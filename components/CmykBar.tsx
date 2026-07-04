type Props = {
  className?: string;
  labeled?: boolean;
};

// A process-color control strip, the small bar of solid CMYK swatches
// printers use to check ink density and registration on a press sheet.
export default function CmykBar({ className = "", labeled = false }: Props) {
  const swatches = [
    { name: "C", color: "bg-cyan" },
    { name: "M", color: "bg-magenta" },
    { name: "Y", color: "bg-yellow" },
    { name: "K", color: "bg-ink" },
  ];

  return (
    <div className={`flex ${className}`}>
      {swatches.map((s) => (
        <div key={s.name} className="flex flex-col items-center">
          <div className={`h-3 w-8 sm:h-4 sm:w-10 ${s.color}`} />
          {labeled && (
            <span className="job-label mt-1 text-[9px]">{s.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
