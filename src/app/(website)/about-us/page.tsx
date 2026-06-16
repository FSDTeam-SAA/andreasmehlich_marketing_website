import AboutKoraAi from "./_components/AboutKoraAi";
import AboutHero from "./_components/AboutHero";
import WhyWeExist from "./_components/WhyWeExist";
import AllInOneEcosystem from "../_components/AllInOneEcosystem";
import FAQ from "../_components/FAQ";
import CTA from "../_components/CTA";

function page() {
  return (
    <div>
      <AboutHero />
      <AboutKoraAi />
      <WhyWeExist />
      <AllInOneEcosystem />
      <FAQ />
      <CTA />
    </div>
  );
}

export default page;
