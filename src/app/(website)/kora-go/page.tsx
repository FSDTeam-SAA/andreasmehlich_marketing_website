import CTA from "../_components/CTA"
import FAQ from "../_components/FAQ"
import KoraHero from "./_components/KoraHero"
import ScheduleTask from "./_components/ScheduleTask"

function page() {
  return (
    <div>
      <KoraHero />
      <ScheduleTask />
      <FAQ />
      <CTA />
    </div>
  )
}

export default page
