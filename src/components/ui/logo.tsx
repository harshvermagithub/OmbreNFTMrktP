export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 10 C30 10 15 25 15 45 C15 65 35 75 35 85 L65 85 C65 75 85 65 85 45 C85 25 70 10 50 10"
        className="fill-orange-400/90 dark:fill-orange-500/90"
      />
      <path
        d="M35 88 L65 88 L65 92 L35 92 Z"
        className="fill-orange-400/90 dark:fill-orange-500/90"
      />
      <path
        d="M38 95 L62 95 L62 98 L38 98 Z"
        className="fill-orange-400/90 dark:fill-orange-500/90"
      />
      <path
        d="M40 35 L45 35 L45 55 L40 55 Z M55 35 L60 35 L60 55 L55 55 Z"
        className="fill-cyan-500/90 dark:fill-cyan-400/90"
      />
      <path
        d="M30 25 L35 25 L35 30 L30 30 Z M40 25 L45 25 L45 30 L40 30 Z M50 25 L55 25 L55 30 L50 30 Z"
        className="fill-cyan-500/90 dark:fill-cyan-400/90"
      />
      <path
        d="M35 60 L65 60 L65 65 L35 65 Z M35 70 L65 70 L65 75 L35 75 Z"
        className="fill-cyan-500/90 dark:fill-cyan-400/90"
      />
    </svg>
  );
} 