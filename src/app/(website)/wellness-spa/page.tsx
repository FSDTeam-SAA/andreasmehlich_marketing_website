import CTA from "../_components/CTA";
import FAQ from "../_components/FAQ";
import HowItWorks from "../barbershops/_components/HowItWorks";
import HowUserKora from "../barbershops/_components/HowUserKora";
import BeautySalonsHero from "../beauty-salons/_components/BeautySalonsHero";
import ButyFeaturesBarber from "../beauty-salons/_components/ButyFeaturesBarber";
import ButyFullBooked from "../beauty-salons/_components/ButyFullBooked";
import ButyYourIndustry from "../beauty-salons/_components/ButyYourIndustry";

function page() {
  return (
    <div>
      <BeautySalonsHero />
      <ButyFullBooked />
      <ButyFeaturesBarber />
      <ButyYourIndustry />
      <HowItWorks />
      <HowUserKora />
      <FAQ />
      <CTA />
    </div>
  );
}

export default page;
