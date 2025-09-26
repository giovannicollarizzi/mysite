import Image from "next/image";
export const metadata = {
  title: "Giovanni Colla Rizzi",
  description: "Home page.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-stretch">
        {/* Left column: portrait */}
        <div className="md:col-span-1">
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/portrait.jpg"
              alt="Giovanni Colla Rizzi"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 25vw, 100vw"
            />
          </div>
        </div>

        {/* Right column: content */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold">Giovanni Colla Rizzi</h1>
          <p className="mt-3 text-lg">
            I bridge industrial economics and Bayesian statistics to understand how data improves predictions, and its impact for market concentration,
            regulation and privacy.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a className="underline" href="mailto:giovanni.colla.rizzi@gmail.com">Email</a>
            <a className="underline" href="/research">Research</a>

            <a className="underline" href="/academic-cv.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          

            {/* Other pages */}
            
            <a className="underline" href="https://github.com/giovannicollarizzi">GitHub</a>

            <a className="underline" href="/contact">Contact</a>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-2">
             {" I am a PhD candidate in Industrial Organization at Toulouse School of Economics. My research develops a statistical theory of the value of data that connects scaling laws to economic outcomes, with implications for platforms' data colleciton strategy and tech regulation."}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
