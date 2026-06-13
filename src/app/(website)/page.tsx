import AllInOneEcosystem from "./_components/AllInOneEcosystem";
import CTA from "./_components/CTA";
import FAQ from "./_components/FAQ";
import HomeHero from "./_components/HomeHero";
import KoraGoApp from "./_components/KoraGoApp";
import LiveDashboard from "./_components/LiveDashboard";
import LoveBy from "./_components/LoveBy";
import NeedToGrow from "./_components/NeedToGrow";
import Website from "./_components/Website";
import WebsiteBuilder from "./_components/WebsiteBuilder";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <NeedToGrow />
      <LiveDashboard />
      <KoraGoApp />
      <Website />
      <WebsiteBuilder />
      <AllInOneEcosystem />
      <LoveBy />
      <FAQ />
      <CTA />
    </div>
  );
}
