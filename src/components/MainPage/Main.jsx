import Hero from "./Hero";
import NoticeBanner from "./NoticeBanner";
import Overview from "./Overview";
import Process from "./Process";
import ApplyCTA from "./ApplyCTA";
import FAQ from "./FAQ";
import Contact from "./Contact";

function Main() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <Hero />
      <NoticeBanner />
      <Overview />
      <Process />
      <ApplyCTA />
      <FAQ />
      <Contact />
    </div>
  );
}

export default Main;
