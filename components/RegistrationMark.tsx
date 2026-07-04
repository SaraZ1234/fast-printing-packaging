type Props = {
  className?: string;
};

// A printer's registration mark - the crosshair-in-circle used to align
// CMYK plates. Used sparingly throughout the site as the signature motif.
export default function RegistrationMark({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="10" />
      <line x1="20" y1="0" x2="20" y2="40" />
      <line x1="0" y1="20" x2="40" y2="20" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
