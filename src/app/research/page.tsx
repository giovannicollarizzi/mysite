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
      "	This paper develops a theory of the value of data for prediction. An agent observes a target variable and some characteristics (covariates) of a sample of individuals to predict the outcome for a target individual based on her characteristics. The main findings are: (i) covariates exhibit economies of scope, as the value of one covariate is higher when others are also observed; (ii) covariates and observations are complements when datasets are small but may become substitutes in large datasets. These results imply three policy conclusions. First, prediction markets feature barriers to entry even without fixed costs: data collection is profitable only beyond a minimum scale, and more advanced training technologies are viable only when prediction is sufficiently valuable. Second, competition between prediction sellers endogenously produces quality and technology asymmetries, especially when a large share of demand is contestable. Third, in data-acquisition markets, economies of scope create a force toward concentration: app concentration increases the value of users, so asymmetries propagate across market sides and may tip the market to a single ecosystem. Data can thus generate concentration through both entry barriers and amplification of small initial advantages.",
  };
  
  const workingPapers: Paper[] = [
    {
      
      title: "The Price of Stability: the Rise in Markups and the Great Moderation",
      authors: "with Friedrich Lucke & Giovanni Morzenti",
      year: "2026",
      status: "Working Paper",
      pdf: "/papers/price_of_stab.pdf",
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4373471",
      abstract:
        "During the Great Moderation, macroeconomic volatility declined while firm markups increased. We document a causal relationship between volatility and markups due to tacit collusion. We exploit the legalisation of interstate banking as an exogenous decrease in volatility. Using an instrumental variable approach, we show that a 1% reduction in volatility causes a 19 p.p. increase in aggregate markups. The effect is due to large firms and firms operating in non-tradable industries. The changing market structure explains two-thirds of the effect, whereas reallocation only accounts for one-third. The reduction of volatility during the Great Moderation explains 31% of the markup increase between 1980 and 1997.",
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
  