import Link from "next/link";
import FourCardSpread from "../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import Cards from "../../../../components/Cards";
import SectionTitleTurquoiseShadow from "../../../../components/SectionTitleTurquoiseShadow";
import FeaturePhoto from "../../../../components/FeaturedArticle";
import EmailPrompt from "../../../../components/EmailPrompt";
//articles
import BestAutoimmuneDiseaseDiet from "../../../../content/BestAutoimmuneDiseaseDiet.json";
import WhatCausesAutoimmuneDisease from "../../../../content/WhatCausesAutoimmuneDiseaseandHowtoCureitNaturally.json";
import WorstFoodsforAutoimmuneDisease from "../../../../content/WorstFoodsforAutoimmuneDisease.json";
// Did You Know? articles - *add later

export default function NutritionAndSupplementsPage() {
  const featuredArticle = BestAutoimmuneDiseaseDiet;

  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Nutrition & Supplements</p>
      </TitleRectangleTurquoise>

      {/* category description */}
      <p className="mt-8 flex text-center mx-auto w-3/4 text-xl">
        Nutrition is one of the greatest resources for improving autoimmune
        disease naturally - but it can be tricky. Read on to learn best
        practices & avoid common mistakes.
      </p>
      {/* subcategory links  */}
      <div className="mt-8 flex flex-wrap justify-center text-slate-400">
        <Link
          href="/nutrition-and-supplements/Best-Autoimmune-Disease-Diet-Anti-Inflammatory-or-AIP-or"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          nutrition recommendations
        </Link>
        <Link
          href="/nutrition-and-supplements/top-supplements"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          top supplements
        </Link>
        {/* <Link
          href="/nutrition-and-supplements/***UPDATE later after content is created! ***"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          food sensitivities
        </Link> */}
        {/* <Link
          href="/nutrition-and-supplements/***UPDATE later after content is created! ***"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          top supplements
        </Link> */}
      </div>

      {/* social media icons - add code later when SocialMediaDesktop/Mobile are built out */}

      {/* featured article photo + description box */}
      <FeaturePhoto featuredArticle={featuredArticle} />

      {/* nutrition recommendations section */}
      <SectionTitleTurquoiseShadow>
        nutrition recommendations
      </SectionTitleTurquoiseShadow>
      <Cards
        allArticles={[
          BestAutoimmuneDiseaseDiet,
          WhatCausesAutoimmuneDisease,
          WorstFoodsforAutoimmuneDisease,
        ]}
      />

      {/* top supplements section - use later after content is created! */}
      {/* <SectionTitleTurquoiseShadow>top supplements</SectionTitleTurquoiseShadow>  */}
      {/* <Cards allArticles={[ **Article Object/JSON title(s) here** ]}></Cards> */}

      {/* food sensitivities section - use later after content is created! */}
      {/* <SectionTitleTurquoiseShadow>food sensitivities</SectionTitleTurquoiseShadow>  */}
      {/* <Cards allArticles={[ **Article Object/JSON title(s) here** ]}></Cards> */}

      {/* prompt to join email list  */}
      <EmailPrompt />

      {/* did you know? section */}
      {/* <FourCardSpread>did you know?</FourCardSpread> */}
    </>
  );
}
