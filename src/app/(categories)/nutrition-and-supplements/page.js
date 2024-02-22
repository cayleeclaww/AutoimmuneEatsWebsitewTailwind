import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
// import Image from "next/image";
// import placeholder_image from "../../../../public/placeholder_article_photo.jpg";
import FourCardSpread from "../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import Cards from "../../../../components/CardComponent";
import SectionTitleTurquoiseShadow from "../../../../components/SectionTitleTurquoiseShadow";
import FeaturePhoto from "../../../../components/FeaturedArticle";
import EmailPrompt from "../../../../components/EmailPrompt";

//articles
import BestAutoimmuneDiseaseDiet from "../../../../content/BestAutoimmuneDiseaseDiet.json";
import WhatCausesAutoimmuneDisease from "../../../../content/WhatCausesAutoimmuneDiseaseandHowtoCureitNaturally.json";
import WorstFoodsforAutoimmuneDisease from "../../../../content/WorstFoodsforAutoimmuneDisease.json";

// complete Did You Know section
// NOTES FOR LATER: add email prompt component once completed
// NOTES FOR LATER: update "/nutrition-and-supplements/autoimmune-nutrition-101-what-you-need-to-know-NEW" by removing NEW when article updated
// NOTES FOR LATER: build out social media links
// NOTES FOR LATER: Write articles about food sensitivites and top supplements, uncomment categories below

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
        disease naturally - but it can be tricky. Read on to learn best practices &
        avoid common mistakes.
      </p>
      {/* subcategory links  */}
      <div className="mt-8 flex flex-wrap justify-center text-slate-400">
        <Link
          href="/nutrition-and-supplements/Best-Autoimmune-Disease-Diet-Anti-Inflammatory-or-AIP-or"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          nutrition recommendations
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

      {/* social media icons */}
      <div className="flex justify-center gap-2 mt-8">
        <AiOutlineInstagram
          size={25}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "2px",
            fontSize: "30px",
            backgroundImage: "linear-gradient(120deg, blue, red, yellow)",
            color: "white",
          }}
        ></AiOutlineInstagram>
        <FaFacebookF
          size={25}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "4px",
            color: "#007FFF",
          }}
        ></FaFacebookF>
        <BiLogoPinterestAlt
          size={25}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "2px",
            color: "red",
          }}
        ></BiLogoPinterestAlt>
        <AiFillLinkedin
          size={25}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "2px",
            color: "#0066b2",
          }}
        ></AiFillLinkedin>
        <BsLink45Deg
          size={25}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "2px",
          }}
        ></BsLink45Deg>
        <BiSolidPrinter
          size={25}
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            padding: "3px",
          }}
        ></BiSolidPrinter>
      </div>

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
