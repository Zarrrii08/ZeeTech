"use client";

export default function Logo({
  className = "w-full h-auto",
  delay = 0,
  onIconClick,
}: {
  className?: string;
  delay?: number;
  onIconClick?: (e: React.MouseEvent) => void;
}) {
  const handleIconClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onIconClick?.(e);
  };

  return (
    <img
      src="/logo.png?v=2"
      alt="ZeeTech logo"
      className={className}
      onClick={onIconClick ? handleIconClick : undefined}
      role={onIconClick ? "button" : undefined}
      aria-label={onIconClick ? "Cycle accent color" : undefined}
      style={{ cursor: onIconClick ? "pointer" : undefined, userSelect: "none" }}
    />
  );
}
