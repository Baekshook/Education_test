import Header from "./Header";
import Hero from "./Hero";
import NoticeBanner from "./NoticeBanner";
import Overview from "./Overview";
import Process from "./Process";
import ApplyCTA from "./ApplyCTA";
import Footer from "./Footer";

function Main() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <Header />
      <Hero />
      <NoticeBanner />
      <Overview />
      <Process />
      <ApplyCTA />
      <Footer />
    </div>
  );
}

export default Main;
