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
    year: "2025",
    status: "Job Market Paper",
    pdf: "/papers/jmp.pdf",
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5157961",
    abstract:
      "This paper develops a theory of the value of data for prediction purposes. An agent uses training data (observations of covariates and target variable) to learn about the parameters of a statistical model, and prediction data (covariates) about target individuals. The main findings are that: (i) training covariates exhibit economies of scope; (ii) training covariates and observations are complements when data is scarce and otherwise substitutes; and (iii) training and prediction data are complements. These patterns have several implications. First, data-driven acquisitions may lead to data concentration, all the more so when sample sizes due, e.g., to privacy rules. Second, pooling covariates is always pro-competitive, whereas pooling observations can be either pro- or anticompetitive. Thirdly, a data seller may profitably conclude exclusivity agreements with a firm selling predictions even if this harms social welfare.",
  };
  
  const workingPapers: Paper[] = [
    {
      
      title: "The Price of Stability: the Rise in Markups and the Great Moderation",
      authors: "with Friedrich Lucke & Giovanni Morzenti",
      year: "2025",
      status: "Working Paper",
      pdf: "/papers/price_of_stab.pdf",
      ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4373471",
      abstract:
        "During the Great Moderation, macroeconomic volatility declined while firm markups increased. We document a causal relationship between volatility and markups due to tacit collusion. We exploit the legalisation of interstate banking as an exogenous decrease in volatility. Using an instrumental variable approach, we show that a 1% reduction in volatility causes a 19 p.p. increase in aggregate markups. The effect is due to large firms and firms operating in non-tradable industries. The changing market structure explains two-thirds of the effect, whereas reallocation only accounts for one-third. The reduction of volatility during the Great Moderation explains 31% of the markup increase between 1980 and 1997.",
    },
    {title: "Data Combination and the Supply of Privacy-Protecting Apps",
      authors: "with Doh-Shin Jeon",
      year: "2025",
      status: "Work in Progress",
      abstract:
        "The paper analyzes the interplay of positive data spillovers across apps and negative privacy externalities across app users. We show that these two forces affect social welfare of the market equilibrium in opposite directions, potentially leading to suboptimal business model choice on part of ad-funded apps which share data  through an ad tech platform. We apply the model to analyze Apple Ad Tracking Transparency and the Digital Markets Acts provisions on user consent on tracking to show that these initiatives can increase social welfare.",
    },
    
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
  