import {Navigation} from '@/components/navigation';
import Link from 'next/link';
import {Footer} from '@/components/footer';

export async function generateStaticParams() {
  const langList = ['en', 'ru', 'pt'];
  return langList.map((lang) => ({
    lang,
  }));
}


export default async function ResumePage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  console.log('lang', lang);
  return (
    <div>
      <Navigation/>
      <div className="">
        <header>
          <div className="flex flex-row gap-2">
            <Link className="text-2xl" href="/pt/resume">🇧🇷</Link>
            <Link className="text-2xl" href="/ru/resume">🇷🇺</Link>
            <Link className="text-2xl" href="/en/resume">🇬🇧</Link>
          </div>
        </header>
        <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-bold">Aleksey Svetlitskiy</h1>
              <p className="text-lg">Fullstack/Node.js Developer</p>
              <p className="text-sm">Florianópolis, Santa Catarina, Brazil</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="mailto:a.svetlitskiy@gmail.com"
                   className="text-blue-500 hover:underline">a.svetlitskiy@gmail.com</a>
                <a href="https://www.linkedin.com/in/a-svetlitskiy" target="_blank" rel="noopener noreferrer"
                   className="text-blue-500 hover:underline">LinkedIn</a>
              </div>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p>
                I’m passionate about two things: writing code and creating value.
                With nearly 20 years of experience, I focus on building scalable and
                efficient solutions that solve real-world problems and drive business
                growth. My expertise lies in Node.js, TypeScript, and backend
                development, where I design robust APIs, architect microservices,
                and integrate cloud solutions to deliver measurable results.
              </p>
              <p>
                I’ve contributed to projects ranging from crypto platforms and NFT marketplaces to AI orchestration
                systems, always prioritizing performance, scalability, and security. For me, the success of a project is
                defined by how much value it brings to its stakeholders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills & Certifications</h2>
              <ul className="list-disc pl-6">
                <li><strong>Top Skills:</strong> Node.js, TypeScript, Microservices</li>
                <li><strong>Languages:</strong> English (Professional Working), Portuguese (Professional Working),
                  Russian (Professional Working)
                </li>
                <li><strong>Certifications:</strong> JavaScript Algorithms and Data Structures, Public Speaking
                  Foundations, Deep Learning, ISTQB Foundation Level
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Cere Network</h3>
                <p className="text-sm italic">Fullstack/Node.js Developer (Sep 2021 - Oct 2024)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Integrated main crypto protocol into various applications.</li>
                  <li>Developed the Cluster Management System for managing clusters within the DDC product.</li>
                  <li>Created Cere Wallet using Web3Auth, leading its full integration into company products.</li>
                  <li>Designed the Davinci NFT Marketplace, bridging digital art and ticketing.</li>
                  <li>Built a QR Code Scanner app for event ticket validation, integrated with the NFT marketplace.</li>
                  <li>Developed an AI Orchestration System for scalable AI workflows using cloud and dedicated
                    servers.
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Newity</h3>
                <p className="text-sm italic">Fullstack/Node.js Developer (Jan 2019 - Aug 2021)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Contributed to building platforms in the blockchain and digital asset space.</li>
                  <li>Developed a Private Crypto Stock Market for the Atomyze platform, focusing on transaction security
                    and real-time data processing.
                  </li>
                  <li>Worked on the Atomyze Platform for asset digitalization, ensuring scalability and seamless user
                    experiences.
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Nexign</h3>
                <p className="text-sm italic">Team Lead (Jan 2017 - Dec 2018)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Led a team of 6 developers across 20 projects, focusing on feature development and workflow
                    optimization.
                  </li>
                  <li>Implemented CI/CD pipelines and corporate Coding Style Guides.</li>
                  <li>Improved team efficiency and project delivery through effective management practices.</li>
                </ul>
                <p className="text-sm italic">Quality Assurance Manager (Nov 2016 - Dec 2017)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Oversaw software quality across 8-11 teams, implementing Quality Gate criteria.</li>
                  <li>Identified architectural issues, saving 2 months of development time and reducing costs.</li>
                </ul>
                <p className="text-sm italic">Senior Software Engineer (Jul 2014 - Nov 2016)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Developed solutions using AngularJS and PL/SQL.</li>
                  <li>Introduced static analysis, unit testing, and code reviews, improving code quality.</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Ellis IT LTD</h3>
                <p className="text-sm italic">Software Engineer (Aug 2012 - Jul 2014)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Developed a web-based project for utilities companies using ExtJS and Kohana.</li>
                  <li>Optimized database performance with PostgreSQL.</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Pride LTD</h3>
                <p className="text-sm italic">Software Engineer (Aug 2008 - Jul 2012)</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Developed an admin panel for data reporting using PHP, JavaScript, and PostgreSQL.</li>
                  <li>Provided technical support to the accounting department for billing system issues.</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <ul className="list-disc pl-6">
                <li><strong>Udacity:</strong> Deep Learning (2018)</li>
                <li><strong>South Ural State University (SUSU):</strong> Software Engineering (2002 - 2007)</li>
              </ul>
            </section>

            <Footer lang={lang} />
          </div>
        </main>
      </div>
    </div>

  );
}
