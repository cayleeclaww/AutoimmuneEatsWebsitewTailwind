import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import placeholder_image from "../../../../public/placeholder_article_photo.jpg";
import FourCardSpread from "../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import Cards from "../../../../components/CardComponent";
import SectionTitleTurquoiseShadow from "../../../../components/SectionTitleTurquoiseShadow";
import FeaturePhoto from "../../../../components/FeaturedArticle";
import EmailPrompt from "../../../../components/EmailPrompt";

//articles
import IsItAutoimmuneChecklist from "../../../../content/IsItAutoimmuneChecklist.json";
import LupusAndArthritisHowToImprove from "../../../../content/LupusAndArthritisHowToImprove.json";
import FatigueAndAutoimmuneDisease from "../../../../content/FatigueAndAutoimmuneDisease.json";

// NOTES FOR LATER: add email prompt component once completed
// NOTES FOR LATER: build out social media links

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
        Many symptoms are common across different autoimmune diseases, & can improve with the same interventions. Use these helpful guides to reduce your pain & increase your quality of life. 
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
