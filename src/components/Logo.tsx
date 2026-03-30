interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 130, height: 26 },
    md: { width: 160, height: 32 },
    lg: { width: 200, height: 40 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 40"
      fill="none"
      width={width}
      height={height}
      className={className}
      aria-label="TrendRadar"
    >
      {/* Upward trend line */}
      <path
        d="M4 28 L12 22 L18 25 L26 14 L32 18 L38 8"
        stroke="var(--color-accent, #0d9488)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Pulse dot */}
      <circle cx="38" cy="8" r="3" fill="var(--color-accent, #0d9488)" />
      {/* Radar arc 1 */}
      <path
        d="M34 4 Q42 0 46 6"
        stroke="var(--color-accent, #0d9488)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Radar arc 2 */}
      <path
        d="M36 1 Q46 -4 50 4"
        stroke="var(--color-accent, #0d9488)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      {/* Text: Trend */}
      <text
        x="54"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="var(--color-foreground, #0f172a)"
      >
        Trend
      </text>
      {/* Text: Radar */}
      <text
        x="120"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="var(--color-accent, #0d9488)"
      >
        Radar
      </text>
    </svg>
  );
}
