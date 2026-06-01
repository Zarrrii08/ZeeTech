// Resolves direct-download URLs for the latest `terminale` GitHub release.
//
// Most cargo-dist assets have version-less names, so they work via the
// `/releases/latest/download/<name>` shortcut. The macOS `.dmg` files, however,
// are built by a custom `xtask dmg-macos` job and DO embed the version
// (`terminale-v0.1.6-aarch64-apple-darwin.dmg`), so a fixed "latest" link is
// impossible — we must resolve them from the API. We fetch the latest release
// (cached 1h) and fall back to the fixed-name links / releases page if the API
// is unreachable at build/request time.

const REPO = "fbrzlarosa/terminale";
const RELEASES_URL = `https://github.com/${REPO}/releases`;

export type DownloadId = "mac-arm" | "mac-intel" | "windows" | "linux";

export type Download = {
    id: DownloadId;
    label: string;
    kind: string; // user-facing file kind, e.g. "DMG", "MSI", ".tar.gz"
    url: string;
};

export type TerminaleRelease = {
    version: string | null;
    releasesUrl: string;
    downloads: Download[];
};

type GhAsset = { name: string; browser_download_url: string };

function latestDownload(name: string): string {
    return `${RELEASES_URL}/latest/download/${name}`;
}

function buildDownloads(
    macArm: string,
    macIntel: string,
    windows: string,
    linux: string
): Download[] {
    return [
        { id: "mac-arm", label: "macOS · Apple Silicon", kind: "DMG", url: macArm },
        { id: "mac-intel", label: "macOS · Intel", kind: "DMG", url: macIntel },
        { id: "windows", label: "Windows", kind: "MSI", url: windows },
        { id: "linux", label: "Linux", kind: ".tar.gz", url: linux },
    ];
}

// Fixed-name assets resolve without the API; the .dmg links fall back to the
// latest-release page (the version-stamped name can't be guessed offline).
const FALLBACK: TerminaleRelease = {
    version: null,
    releasesUrl: RELEASES_URL,
    downloads: buildDownloads(
        `${RELEASES_URL}/latest`,
        `${RELEASES_URL}/latest`,
        latestDownload("terminale-x86_64-pc-windows-msvc.msi"),
        latestDownload("terminale-x86_64-unknown-linux-gnu.tar.gz")
    ),
};

export async function getTerminaleRelease(): Promise<TerminaleRelease> {
    try {
        const res = await fetch(
            `https://api.github.com/repos/${REPO}/releases/latest`,
            {
                headers: { Accept: "application/vnd.github+json" },
                next: { revalidate: 3600 },
            }
        );
        if (!res.ok) return FALLBACK;

        const data = (await res.json()) as {
            tag_name?: string;
            assets?: GhAsset[];
        };
        const assets = data.assets ?? [];
        const find = (re: RegExp): string | undefined =>
            assets.find((a) => re.test(a.name))?.browser_download_url;

        return {
            version: data.tag_name ?? null,
            releasesUrl: RELEASES_URL,
            downloads: buildDownloads(
                find(/-aarch64-apple-darwin\.dmg$/) ?? `${RELEASES_URL}/latest`,
                find(/-x86_64-apple-darwin\.dmg$/) ?? `${RELEASES_URL}/latest`,
                find(/-x86_64-pc-windows-msvc\.msi$/) ??
                    latestDownload("terminale-x86_64-pc-windows-msvc.msi"),
                find(/-x86_64-unknown-linux-gnu\.tar\.gz$/) ??
                    latestDownload("terminale-x86_64-unknown-linux-gnu.tar.gz")
            ),
        };
    } catch {
        return FALLBACK;
    }
}
