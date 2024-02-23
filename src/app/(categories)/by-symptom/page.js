import Link from "next/link";
import FourCardSpread from "../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import Cards from "../../../../components/CardComponent";
import SectionTitleTurquoiseShadow from "../../../../components/SectionTitleTurquoiseShadow";
import FeaturePhoto from "../../../../components/FeaturedArticle";
import EmailPrompt from "../../../../components/EmailPrompt";
// by-symptom articles
import IsItAutoimmuneChecklist from "../../../../content/IsItAutoimmuneChecklist.json";
import LupusAndArthritisHowToImprove from "../../../../content/LupusAndArthritisHowToImprove.json";
import FatigueAndAutoimmuneDisease from "../../../../content/FatigueAndAutoimmuneDisease.json";
// Did You Know? articles - *add later


export default function BySymptomPage() {
  const featuredArticle = IsItAutoimmuneChecklist;

  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>By Symptom</p>
      </TitleRectangleTurquoise>

      {/* category description */}
      <p className="mt-8 flex text-center mx-auto w-3/4 text-xl">
        Many symptoms are common across different autoimmune diseases, & can
        improve with the same interventions. Use these helpful guides to reduce
        your pain & increase your quality of life.
      </p>

      {/* subcategory links  */}
      <div className="mt-8 flex flex-wrap justify-center text-slate-400">
        <Link
          href="/by-symptom/Lupus-Arthritis-How-to-Improve-Lupus-Joint-Pain"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          joint pain & arthritis
        </Link>
        <Link
          href="/by-symptom/Fatigue-And-Autoimmune-Disease-How-Nutrition-Can-Help "
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          fatigue
        </Link>
        <Link
          href="/by-symptom/Autoimmune-Disease-Symptom-Checklist"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          is it autoimmune?
        </Link>
      </div>
      {/* social media icons - add code later when SocialMediaDesktop/Mobile are built out */}

      {/* featured article photo + description box - COMPLETE: is mobile friendly! */}
      <FeaturePhoto featuredArticle={featuredArticle} />

      {/* joint pain section */}
      <SectionTitleTurquoiseShadow>
        joint pain & arthritis
      </SectionTitleTurquoiseShadow>
      <Cards allArticles={[LupusAndArthritisHowToImprove]}></Cards>

      {/* fatigue section */}
      <SectionTitleTurquoiseShadow>fatigue</SectionTitleTurquoiseShadow>
      <Cards allArticles={[FatigueAndAutoimmuneDisease]}></Cards>

      {/* is it AI? section */}
      <SectionTitleTurquoiseShadow>
        is it autoimmune?
      </SectionTitleTurquoiseShadow>
      <Cards allArticles={[IsItAutoimmuneChecklist]}></Cards>

      {/* prompt to join email list  */}
      <EmailPrompt />

      {/* did you know? section */}
      {/* <FourCardSpread>did you know?</FourCardSpread> */}
    </>
  );
}
