import AllInOneEcosystem from "../_components/AllInOneEcosystem";
import CTA from "../_components/CTA";
import FAQ from "../_components/FAQ";
import ChoosePlan from "./_components/ChoosePlan";
import ComparePlans from "./_components/ComparePlans";
import PricingHero from "./_components/PricingHero";
import Testimonials from "./_components/Testimonials";

function page() {
  return (
    <div>
      <PricingHero />
      <ChoosePlan />
      <ComparePlans />
      <AllInOneEcosystem />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

export default page;
