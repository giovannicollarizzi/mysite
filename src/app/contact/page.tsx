// src/app/contact/page.tsx

export const metadata = {
    title: "Contact — Giovanni Colla Rizzi",
    description: "Contact information for Giovanni Colla Rizzi.",
  };
  
  export default function Contact() {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
  
        <p className="text-lg mb-8">
        Connect for research collaborations, job opportunities, or questions about my work.        </p>
  
        <div className="space-y-6 text-lg">
          <div>
            <h2 className="font-semibold text-xl mb-1">Email</h2>
            <a
              href="mailto:giovanni.colla.rizzi@gmail.com"
              className="underline text-blue-600 hover:text-blue-800"
            >
              giovanni.colla.rizzi@gmail.com
            </a>
          </div>
  
          <div>
            <h2 className="font-semibold text-xl mb-1">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/giovannirizzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              linkedin.com/in/giovannicollarizzi
            </a>
          </div>
  
          <div>
            <h2 className="font-semibold text-xl mb-1">Phone</h2>
            <p className="text-gray-700">+33 6 31 14 70 88</p>
            {/* Replace with your actual number */}
          </div>
  
          <div>
            <h2 className="font-semibold text-xl mb-1">Work Address</h2>
            <p className="text-gray-700">
            Office N° T.651<br />
              Toulouse School of Economics<br />
              1 Esplanade de l’Université<br />
              31000 Toulouse, France
            </p>
          </div>
        </div>
      </main>
    );
  }
  