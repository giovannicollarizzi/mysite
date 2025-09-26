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
      "This paper develops a statistical theory of the value of data in prediction, modeling Bayesian linear regression with endogenous covariate choice. Returns to covariates can increase: the marginal value of one covariate may rise when more covariates are observed. Covariates and observations are complements when data is scarce but substitutes when abundant. Training and targeting data are always complements, so richer training data increases the value of targeting data. Prediction entails sunk costs and firms should scale both user acquisition and attribute collection initially, before eventually specializing. Prediction may thus be a natural monopoly, making concentration more efficient than decentralization. Access regulation, such as federated learning or FRAND-priced APIs, can restore competition, while privacy rules may inadvertently reinforce concentration. Data broker mergers can be efficient or anticompetitive depending on the statistical relationship among data products and data exclusivity agreements that deter entry.",
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
  