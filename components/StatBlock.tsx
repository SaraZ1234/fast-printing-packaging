type Props = {
  value: string;
  label: string;
};

export default function StatBlock({ value, label }: Props) {
  return (
    <div className="border-l border-stock/20 pl-4">
      <div className="font-display text-3xl sm:text-4xl">{value}</div>
      <div className="job-label mt-1 !text-stock/50">{label}</div>
    </div>
  );
}
