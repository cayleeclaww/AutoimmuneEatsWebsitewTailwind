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
import BestAutoimmuneDiseaseDiet from "../../../../content/BestAutoimmuneDiseaseDiet.json";
import AutoimmuneNutritionNEW from "../../../../content/AutoimmuneNutritionNEW.json";
import WorstFoodsforAutoimmuneDisease from "../../../../content/WorstFoodsforAutoimmuneDisease.json";

//NOTE FOR LATER: decide which article to feature 
// NOTES FOR LATER: update "/nutrition-and-supplements/autoimmune-nutrition-101-what-you-need-to-know-NEW" by removing NEW when article updated
// NOTES FOR LATER: Write articles about food sensitivites and top supplements, uncomment categories below 

export default function NutritionAndSupplementsPage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Nutrition & Supplements</p>
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
          href="/nutrition-and-supplements/autoimmune-nutrition-101-what-you-need-to-know-NEW"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          nutrition recommendations
        </Link>
        {/* <Link
          href="/nutrition-and-supplements/***UPDATE***"
          className="uppercase text-base hover:text-turquoise mx-8 my-4"
        >
          food sensitivities
        </Link> */}
        {/* <Link
          href="/nutrition-and-supplements/***UPDATE***"
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

      {/* nutrition recommendations section */}
      <CardTitle>nutrition recommendations</CardTitle>
      <Cards
        allArticles={[
          AutoimmuneNutritionNEW,
          BestAutoimmuneDiseaseDiet,
          WorstFoodsforAutoimmuneDisease,
        ]}
      />

      {/* top supplements section */}
      {/* <CardTitle>top supplements</CardTitle>  */}
      {/* <Cards allArticles={[ **Article Object/JSON title(s) here** ]}></Cards> */}

      {/* food sensitivities section */}
      {/* <CardTitle>food sensitivities</CardTitle>  */}
      {/* <Cards allArticles={[ **Article Object/JSON title(s) here** ]}></Cards> */}

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
