import CmykBar from "@/components/CmykBar";
import RegistrationMark from "@/components/RegistrationMark";

const JOBS = [
  { id: "JOB-2291", client: "Nordway Coffee Roasters", type: "Retail packaging", detail: "Custom kraft bags + printed corrugated shippers, 8,000 units." },
  { id: "JOB-2287", client: "Halden & Fitch", type: "Rigid gift boxes", detail: "Foil-stamped rigid box with soft-touch lamination, 2,500 units." },
  { id: "JOB-2280", client: "Verano Skincare", type: "Labels & cartons", detail: "Roll-fed labels + folding cartons with spot UV, 40,000 units." },
  { id: "JOB-2274", client: "Municipal Press Co.", type: "Direct mail", detail: "Variable-data postcards for a 12,000-household campaign." },
  { id: "JOB-2266", client: "Ferro Bicycle Works", type: "Shipping packaging", detail: "Triple-wall corrugated bike boxes with custom foam inserts." },
  { id: "JOB-2259", client: "Linden & Oak Studio", type: "Stationery", detail: "Letterpress-look business cards, 32pt uncoated, foil edge." },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-ink/15">
        <CmykBar />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="job-label">Job log</div>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            Recent runs off the press.
          </h1>
          <p className="mt-4 max-w-xl text-ink/70">
            A sample of jobs completed in the last production cycle — actual
            client names shown with permission, files available on request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <div key={job.id} className="crop-marks flex flex-col border border-ink/15 p-6">
              <div className="flex items-center justify-between">
                <span className="job-label">{job.id}</span>
                <RegistrationMark className="h-5 w-5 text-ink/30" />
              </div>
              <h3 className="mt-4 font-display text-lg">{job.client}</h3>
              <span className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-magenta">
                {job.type}
              </span>
              <p className="mt-3 text-sm text-ink/70">{job.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
