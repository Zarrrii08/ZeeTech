export default function PersonSchema() {
  const sameAs = [
    "https://github.com/Zarrrii08",
    "https://www.linkedin.com/in/zaryab-hayat-khan-0598b5220/",
    "https://stackoverflow.com/users/18258721/zaryab-hayat-khan",
  ];

  const schema: {
    "@context": string;
    "@type": string;
    name: string;
    jobTitle: string;
    url: string;
    sameAs?: string[];
  } = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zaryab Hayat Khan",
    jobTitle: "Software Engineer",
    url: "https://zaryabhayatkhan.dev",
  };

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
