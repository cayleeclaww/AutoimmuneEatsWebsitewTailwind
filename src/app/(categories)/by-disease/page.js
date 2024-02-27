import Link from "next/link";
import FourCardSpread from "../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import Cards from "../../../../components/Cards";
import SectionTitleTurquoiseShadow from "../../../../components/SectionTitleTurquoiseShadow";
import EmailPrompt from "../../../../components/EmailPrompt";
import FeaturePhoto from "../../../../components/FeaturedArticle";
// by-disease articles
import WhatIsTheBestPsoriasisDiet from "../../../../content/WhatIsTheBestPsoriasisDiet.json";
import HashimotosAndGluten from "../../../../content/HashimotosAndGluten.json";
import FoodsThatCauseEczema from "../../../../content/FoodsThatCauseEczema.json";
import AutoimmuneDiseaseAndInfections from "../../../../content/LinkBetweenAutoimmuneDiseaseAndInfectionslikeCOVID.json";
import LupusAndArthritisHowToImprove from "../../../../content/LupusAndArthritisHowToImprove.json";
// Did You Know? articles - *add later

export default function ByDiseasePage() {
  const featuredArticle = HashimotosAndGluten;

  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>By Disease</p>
      </TitleRectangleTurquoise>
      {/* category description */}
      <p className="mt-8 flex text-center mx-auto w-3/4 text-xl">
        Each autoimmune disease has its own special considerations. Find helpful
        tips to guide your healing journey, specific to your individual
        diagnosis.
      </p>
      {/* subcategory links  */}
      <div className="mt-8 flex flex-wrap justify-center text-slate-400">
        <Link
          href="/by-disease/What-is-the-Best-Psoriasis-Diet-9-Foods-to-Avoid-and-More"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          psoriasis
        </Link>

        <Link
          href="/by-disease/Hashimotos-And-Gluten-Whats-the-Best-Hashimotos-Diet"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          hashimoto&apos;s
        </Link>
        <Link
          href="/by-disease/Foods-That-Cause-Eczema-What-to-Eat-And-What-Helps-it-Go-Away"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          eczema
        </Link>
        <Link
          href="/by-disease/The-Link-Between-Autoimmune-Disease-And-Infections-like-COVID"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          COVID & Infections
        </Link>
        <Link
          href="/by-symptom/Lupus-Arthritis-How-to-Improve-Lupus-Joint-Pain"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          lupus
        </Link>
      </div>
      {/* social media icons - add code later when SocialMediaDesktop/Mobile are built out*/}

      {/* featured article photo + description box */}
      <FeaturePhoto featuredArticle={featuredArticle} />

      {/* psoriasis section */}
      <SectionTitleTurquoiseShadow>psoriasis</SectionTitleTurquoiseShadow>
      <Cards allArticles={[WhatIsTheBestPsoriasisDiet]}></Cards>

      {/* COVID and infections section */}
      <SectionTitleTurquoiseShadow>
        COVID & Infections
      </SectionTitleTurquoiseShadow>
      <Cards allArticles={[AutoimmuneDiseaseAndInfections]}></Cards>

      {/* hashimoto's section */}
      <SectionTitleTurquoiseShadow>Hashimoto's</SectionTitleTurquoiseShadow>
      <Cards allArticles={[HashimotosAndGluten]}></Cards>

      {/* eczema section  */}
      <SectionTitleTurquoiseShadow>eczema</SectionTitleTurquoiseShadow>
      <Cards allArticles={[FoodsThatCauseEczema]}></Cards>

      {/* lupus section  */}
      <SectionTitleTurquoiseShadow>lupus</SectionTitleTurquoiseShadow>
      <Cards allArticles={[LupusAndArthritisHowToImprove]}></Cards>

      {/* prompt to join email list  */}
      <EmailPrompt />

      {/* did you know? section */}
      {/* <FourCardSpread>did you know?</FourCardSpread> */}
    </>
  );
}
