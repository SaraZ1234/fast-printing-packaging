import CmykBar from "@/components/CmykBar";
import RegistrationMark from "@/components/RegistrationMark";
import StatBlock from "@/components/StatBlock";

const TIMELINE = [
  { year: "2004", event: "Founded as a two-press quick-print shop." },
  { year: "2011", event: "Added the first corrugated die-cutting line." },
  { year: "2017", event: "Opened the finishing department: foil, emboss, spot UV." },
  { year: "2023", event: "Installed digital presses for short-run, fast-turn jobs." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/15">
        <CmykBar />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="job-label">About the shop</div>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            Built by people who still walk the press floor.
          </h1>
          <p className="mt-4 max-w-xl text-ink/70">
            Fast Printing &amp; Packaging started as a single two-color press
            in a rented unit. Two decades later, we run print, packaging, and
            finishing under one roof — and the founders still sign off on
            proofs before they ship.
          </p>
        </div>
      </section>

      <section className="bg-ink text-stock">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          <StatBlock value="20yr" label="In operation" />
          <StatBlock value="35" label="Staff on the floor" />
          <StatBlock value="6" label="Presses running" />
          <StatBlock value="600+" label="Active clients" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="job-label">Why clients stay</div>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              One point of contact, start to ship.
            </h2>
            <p className="mt-4 text-ink/70">
              Most print jobs fail at the handoffs — between designer, printer,
              box maker, and freight. We keep prepress, press, packaging, and
              finishing in one building, so nothing waits in someone else's
              queue.
            </p>
            <p className="mt-4 text-ink/70">
              Every job gets a physical or digital proof before it runs, and a
              named production contact who can answer a question about your
              order without transferring the call.
            </p>
          </div>
          <div className="crop-marks border border-ink/15 p-6">
            <div className="job-label">Timeline</div>
            <ul className="mt-4 space-y-5">
              {TIMELINE.map((t) => (
                <li key={t.year} className="flex gap-4 border-t border-ink/10 pt-4 first:border-t-0 first:pt-0">
                  <span className="font-mono text-sm text-ink/40">{t.year}</span>
                  <span className="text-sm text-ink/80">{t.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-kraft/10">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <RegistrationMark className="mx-auto h-10 w-10 text-ink/50" />
          <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            "We don't quote a job we haven't figured out how to run well."
          </p>
          <span className="job-label mt-4 block">— Shop Floor Policy, since 2004</span>
        </div>
      </section>
    </>
  );
}
