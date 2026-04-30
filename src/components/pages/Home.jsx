import Hero from "../MainPage/Hero";
import NoticeBanner from "../MainPage/NoticeBanner";
import Overview from "../MainPage/Overview";
import Process from "../MainPage/Process";
import FAQ from "../MainPage/FAQ";
import Contact from "../MainPage/Contact";
import ApplyCTA from "../MainPage/ApplyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <NoticeBanner />
      <Overview />
      <Process />
      <FAQ />
      <Contact />
      <ApplyCTA />
    </>
  );
}
