export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Photo */}
        <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden shadow-md">
          <img
            src="/portrait.jpg"
            alt="Giovanni Colla Rizzi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-3xl font-bold">Giovanni Colla Rizzi</h1>
          <p className="mt-3 text-lg">
            Economist & Data/ML Builder. <br />
            I bridge economics, data, and machine learning to understand prediction,
            platforms, and AI.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a className="underline" href="mailto:giovanni.colla.rizzi@gmail.com">Email</a>
            <a className="underline" href="https://github.com/giovannicollarizzi">GitHub</a>
            <a className="underline" href="/cv.pdf">CV</a>
            <a className="underline" href="/projects">Projects</a>
            <a className="underline" href="/research">Research</a>
            <a className="underline" href="/experience">Experience</a>
            <a className="underline" href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2">
          I am a PhD candidate in Industrial Organization at Toulouse School of Economics,
          currently visiting Boston University. My research develops a statistical theory
          of the value of data, and I build applied ML projects that turn these insights
          into real-world tools.
        </p>
      </section>
    </main>
  );
}
