import WebHero from "./_components/WebHero"
import BuiltInBookingSystem from "./_components/BuiltInBookingSystem"
import AIWebsiteBuilder from "./_components/AIWebsiteBuilder"
import IndustryTemplates from "./_components/IndustryTemplates"
import DomainsPublish from "./_components/DomainsPublish"
import FAQ from "../_components/FAQ"
import CTA from "../_components/CTA"

function page() {
  return (
    <div>
      <WebHero />
      <BuiltInBookingSystem />
      <AIWebsiteBuilder />
      <IndustryTemplates />
      <DomainsPublish />
      <FAQ />
      <CTA />
    </div>
  )
}

export default page
