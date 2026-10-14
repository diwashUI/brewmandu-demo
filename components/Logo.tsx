/** Brewmandu mark: a line-art cup with steam, in brand colors. */
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#2c1e10" />
      <path
        d="M16.5 12.5c-1-1.6 1-2.6 0-4.2"
        stroke="#b45309"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M21.5 12.5c-1-1.6 1-2.6 0-4.2"
        stroke="#b45309"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 15h13l-1.2 8.2a2.5 2.5 0 0 1-2.5 2.3h-6.6a2.5 2.5 0 0 1-2.5-2.3L12 15z"
        fill="none"
        stroke="#f7f1e3"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M25 16.5h1.8a3.2 3.2 0 0 1 0 6.4H25"
        fill="none"
        stroke="#f7f1e3"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.5 29.5h15"
        stroke="#b45309"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
