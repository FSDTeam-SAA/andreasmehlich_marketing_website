import ChatWithKoraAi from "./_components/ChatWithKoraAi";
import KorahubHero from "./_components/KorahubHero";
import RadyToSee from "./_components/RadyToSee";
import RealStories from "./_components/RealStories";
import TutorialsGuides from "./_components/TutorialsGuides";

function page() {
  return (
    <div>
      <KorahubHero />
      <RealStories />
      <ChatWithKoraAi />
      <TutorialsGuides />
      <RadyToSee />
    </div>
  );
}

export default page;
