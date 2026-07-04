type Props = {
  code: string;
  title: string;
  description: string;
  specs: string[];
};

export default function ServiceCard({ code, title, description, specs }: Props) {
  return (
    <div className="crop-marks border border-ink/15 bg-stock p-6 text-ink transition-colors hover:border-ink/40">
      <div className="job-label">{code}</div>
      <h3 className="mt-3 font-display text-xl">{title}</h3>
      <p className="mt-3 text-sm text-ink/70">{description}</p>
      <ul className="mt-4 space-y-1 border-t border-ink/10 pt-4">
        {specs.map((s) => (
          <li key={s} className="font-mono text-xs text-ink/60">
            &gt; {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
