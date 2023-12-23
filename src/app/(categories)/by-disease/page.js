import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import placeholder_image from "../../../../public/placeholder_article_photo.jpg";
import FourCardSpread from "../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import Cards from "../../../../components/CardsComponent";
import CardTitle from "../../../../components/CardTitleComponent";
//articles
import WhatIsTheBestPsoriasisDiet from "../../../../content/WhatIsTheBestPsoriasisDiet.json";
import HashimotosAndGluten from "../../../../content/HashimotosAndGluten.json";
import FoodsThatCauseEczema from "../../../../content/FoodsThatCauseEczema.json";
import AutoimmuneDiseaseAndCovid from "../../../../content/AutoimmuneDiseaseAndCovid.json";
import LupusAndArthritisHowToImprove from "../../../../content/LupusAndArthritisHowToImprove.json";


//NOTE FOR LATER: decide which article to feature 
//NOTE FOR LATER: update social media icons to component - create object inline to pass URL for whole page for FB/LinkedIn/Pinterest???? Or just exclude...? 
//NOTE FOR LATER: figure out how to make the feature photo into a component... use an object as the prop???


export default function ByDiseasePage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>By Disease</p>
      </TitleRectangleTurquoise>
      {/* category description */}
      <p className="mt-8 flex text-center mx-auto w-3/4">
        1-2 sentence long description of category. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
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
          href="/by-disease/Autoimmune-Disease-And-Covid-Can-Infections-Cause-Disease"
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
      <div className="w-full flex justify-center p-4 mt-12">
        {/* desktop image */}
        <Image
          className="hidden md:flex w-[50%] h-[50%]"
          style={{ boxShadow: "-10px 10px 15px #99CED3" }}
          src={placeholder_image}
          alt="placeholder image"
        />
        {/* mobile image */}
        <Image
          className="w-full border-x-6 flex md:hidden"
          style={{ boxShadow: "10px 10px 15px #99CED3" }}
          src={placeholder_image}
          alt="placeholder image"
        />

        {/* desktop responsiveness */}
        <div className="hidden md:grid w-1/3 h-1/2 mt-32 bg-white border-solid border-2 border-black-600 -ml-14 -mb-8">
          <div className="text-2xl p-5 text-bold ">Article title </div>
          <p className="text-m px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <button className="text-l p-2 m-5 bg-turquoise uppercase rounded-md w-40">
            read more
          </button>
        </div>
      </div>
      {/* mobile responsiveness  */}
      <div className="flex flex-col items-center md:hidden items-center mx-4 place-content-center pt-8">
        <p className="text-2xl px-4 text-bold text-center">Article title</p>
        <p className="text-l p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <button className="text-l p-2 m-5 bg-turquoise uppercase rounded-md w-40 ">
          read more
        </button>
      </div>
      {/* psoriasis section */}
      <CardTitle>psoriasis</CardTitle>
      <Cards allArticles={[WhatIsTheBestPsoriasisDiet]}></Cards>
      {/* COVID and infections section */}
      <CardTitle>COVID & Infections</CardTitle>
      <Cards allArticles={[AutoimmuneDiseaseAndCovid]}></Cards>
      {/* hashimoto's section */}
      <CardTitle>Hashimoto's</CardTitle>
      <Cards allArticles={[HashimotosAndGluten]}></Cards>
      {/* eczema section  */}
      <CardTitle>eczema</CardTitle>
      <Cards allArticles={[FoodsThatCauseEczema]}></Cards>
      {/* lupus section  */}
      <CardTitle>lupus</CardTitle>
      <Cards allArticles={[LupusAndArthritisHowToImprove]}></Cards>
      {/* prompt to join email list  */}
      <div className="w-full bg-turquoise h-64 mt-24 place-items-center">
        <p className="text-center p-24">Prompt to join email list</p>
      </div>
      {/* did you know? section */}
      <FourCardSpread>did you know?</FourCardSpread>
      {/* footer - desktop & mobile */}
      <div className="w-full mt-24 bg-gray-300 h-64 place-items-center">
        <p className="text-center p-24">footer</p>
      </div>
    </>
  );
}
