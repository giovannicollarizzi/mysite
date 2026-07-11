// src/app/research/page.tsx
export const metadata = {
    title: "Research — Giovanni Colla Rizzi",
    description: "Job market paper, working papers, publications, and talks.",
  };
  
  type Paper = {
    title: string;
    authors?: string;
    year?: string;
    status?: string;
    pdf?: string;
    ssrn?: string;
    slides?: string;
    code?: string;
    abstract: string;
  };
  
  const jmp: Paper = {
    title: "Opening the Black Box: A Statistical Theory of the Value of Data",
    year: "2026",
    status: "Job Market Paper",
    pdf: "/papers/jmp.pdf",
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5157961",
    abstract:
      "This paper develops a theory of the value of data for prediction. A platform predicts a target variable for a target individual. To improve its prediction, the platform can collect covariates on that individual and training observations from similar individuals, where each observation contains the target variable and a possibly different set of covariates. The model delivers two main results. First, covariates exhibit economies of scope: one covariate becomes more valuable when the platform observes others. Second, covariates and observations are complements in small datasets but can become substitutes in large datasets. I then apply the model to competition for covariates between two ecosystems, showing that economies of scope can lead to asymmetries in data accumulation and cause tipping.",
  };
  
  const workingPapers: Paper[] = [
    {
      
      title: "The Great Moderation and the Rise of Markups: Demand Volatility and Tacit Collusion",
      authors: "with Friedrich Lucke & Giovanni Morzenti",
      year: "2026",
      status: "Working Paper",
      pdf: "/papers/price_of_stab.pdf",
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4373471",
      abstract:
        "	Business cycle stability has traditionally been considered beneficial for the economy. This paper identifies a cost: stable demand makes tacit collusion easier to sustain. In a repeated-oligopoly model, incentives to undercut rivals are greatest when demand peaks, so a decline in volatility increases the maximum sustainable collusive markup---most strongly in concentrated markets, with an elasticity equal to the inverse demand elasticity. The paper tests these predictions on a US state--sector panel covering the Great Moderation---the sustained decline in US macroeconomic volatility that began in the early 1980s---using a shift--share instrument for volatility based on the staggered deregulation of interstate banking. A 1\% decline in volatility raises markups by 0.2\%; the effect is absent in the least concentrated state--sectors and grows stronger and turns significant in the most concentrated quartile. Tacit collusion is consistent with a monopoly markup of 1.317, close to observed markups. The Great Moderation's decline in volatility accounts for up to two-thirds of the rise in markups between 1980 and 1997. More generally, the paper highlights a trade-off between macroeconomic stabilization and competition: merger guidelines should become stricter when demand stabilizes.",
    }
    
  ];
  
  function PaperBlock({ p }: { p: Paper }) {
    return (
      <div className="mt-6 border-t pt-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <h3 className="text-lg font-medium">{p.title}</h3>
          <div className="text-sm text-gray-600">
            {[p.status, p.year].filter(Boolean).join(" • ")}
          </div>
        </div>
        {p.authors && <div className="text-sm text-gray-700 mt-1">{p.authors}</div>}
  
        {/* Links */}
        <div className="mt-2 flex flex-wrap gap-4 text-sm">
          {p.pdf && (
            <a className="underline" href={p.pdf} target="_blank" rel="noopener noreferrer">
              PDF
            </a>
          )}
          {p.ssrn && (
            <a className="underline" href={p.ssrn} target="_blank" rel="noopener noreferrer">
              SSRN
            </a>
          )}
          {p.slides && (
            <a className="underline" href={p.slides} target="_blank" rel="noopener noreferrer">
              Slides
            </a>
          )}
          {p.code && (
            <a className="underline" href={p.code} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
        </div>
  
        {/* Abstract always visible */}
        <h4 className="mt-3 font-bold">Abstract</h4>
        <p className="mt-1 leading-relaxed text-[0.98rem] whitespace-pre-line">
          {p.abstract}
        </p>
      </div>
    );
  }
  
  export default function ResearchPage() {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="mt-3 text-lg">
        I study the economics of data and its implications for platform strategy and regulation.        </p>
  
        {/* JMP */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Job Market Paper</h2>
          <PaperBlock p={jmp} />
        </section>
  
        {/* Working papers */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Working Papers</h2>
          {workingPapers.map((p) => (
            <PaperBlock key={p.title} p={p} />
          ))}
        </section>
      </main>
    );
  }
  