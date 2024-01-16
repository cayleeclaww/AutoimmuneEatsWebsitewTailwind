import Image from "next/image";
import "tailwindcss/tailwind.css";
import main_image from "../../../public/main_image_front_page_autoimmune_eats.jpg";
import main_image_mobile from "../../../public/main_image_front_page_autoimmune_eats_HALF.jpg";
import placeholder_image from "../../../public/placeholder_article_photo.jpg";
import Link from "next/link";
import CardTitle from "../../../components/CardTitleComponent";
import Cards from "../../../components/CardsComponent";
import EmailPrompt from "../../../components/EmailPrompt";
import FeaturePhoto from "../../../components/FeaturePhoto";
//by symptom:
import IsItAutoimmuneChecklist from "../../../content/IsItAutoimmuneChecklist.json";
import LupusAndArthritisHowToImprove from "../../../content/LupusAndArthritisHowToImprove.json";
import HowtoImproveFatigue from "../../../content/HowtoImproveFatigue.json";
//nutrition and supplements:
import AutoimmuneNutritionNEW from "../../../content/AutoimmuneNutritionNEW.json";
import BestAutoimmuneDiseaseDiet from "../../../content/BestAutoimmuneDiseaseDiet.json";
import WorstFoodsforAutoimmuneDisease from "../../../content/WorstFoodsforAutoimmuneDisease.json";
//by disease:
import WhatIsTheBestPsoriasisDiet from "../../../content/WhatIsTheBestPsoriasisDiet.json";
import HashimotosAndGluten from "../../../content/HashimotosAndGluten.json";
import FoodsThatCauseEczema from "../../../content/FoodsThatCauseEczema.json";
import AutoimmuneDiseaseAndCovid from "../../../content/AutoimmuneDiseaseAndCovid.json";
import BookBuyNow from "../../../components/BookBuyNow";

// **** NOTES FOR LATER: Complete statement on scientific/journalistic integrity

export default function Home() {
  const symptomsArticles = [
    IsItAutoimmuneChecklist,
    LupusAndArthritisHowToImprove,
    HowtoImproveFatigue,
  ];
  const nutAndSuppsArticles = [
    AutoimmuneNutritionNEW,
    BestAutoimmuneDiseaseDiet,
    WorstFoodsforAutoimmuneDisease,
  ];
  const byDiseaseArticles = [
    WhatIsTheBestPsoriasisDiet,
    HashimotosAndGluten,
    FoodsThatCauseEczema,
    AutoimmuneDiseaseAndCovid,
  ];

  const featuredArticle = AutoimmuneNutritionNEW;

  return (
    <>
      {/* creates main image with overlayed text boxes - COMPLETE: is mobile friendly!  */}
      <div className="w-full flex justify-center">
        <Image
          className="hidden md:grid w-full z-1 min-w-[100%]"
          src={main_image}
          alt="wooden cutting board with colorful dried herbs mirrored on left and right sides"
          priority={true}
        />
        <Image
          className="grid w-full z-1 min-w-[100%] md:hidden"
          src={main_image_mobile}
          alt="wooden cutting board with colorful dried herbs on left side"
          priority={true}
        />
        {/* text boxes for sm and larger screens */}
        <div className="hidden sm:grid absolute z-2 m-14 justify-center max-h-24 lg:pt-20">
          <div className="bg-white box-border px-10 pt-10 text-center opacity-80">
            <p className="text-6xl pb-4 ">
              <b>welcome</b>
              <br />
              to autoimmune eats
            </p>
            <p className="text-3xl px-10 pb-8 pt-0">
              Discover how to live with
              <br /> more peace & less pain.
            </p>
          </div>
          <div class="w-60 mx-auto">
            <button className="text-xl bg-white rounded-md box-border mt-6 p-4 text-center opacity-80 justify-center">
              join our mailing list
            </button>
          </div>
        </div>

        {/* text boxes for very small screens */}
        <div className="sm:hidden grid absolute m-14 z-2 place-self-center ">
          <div className="bg-white box-border px-2 pt-5 sm:pt-10 text-center opacity-80">
            <p className="text-2xl sm:text-6xl pb-4 ">
              <b>welcome</b>
              <br />
              to autoimmune eats
            </p>
            <p className="grid text-l px-5 pb-5">
              Discover how to live with more peace & less pain.
            </p>
          </div>
          <div class="w-full flex justify-center">
            <button className="w-40 text-l bg-white rounded-md box-border mt-6 p-2 sm:p-4 text-center opacity-80 ">
              join our mailing list
            </button>
          </div>
        </div>
      </div>
      {/* 4 boxes with main site features - COMPLETE: is mobile friendly! */}
      <div className="w-full grid grid-cols-2 md:flex my-6 sm:my-12">
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Free of dieting,</b>
            <br />
            fearing foods, & fat shaming
          </p>
        </div>
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Natural remedies</b>
            <br />
            prioritized, medication supported
          </p>
        </div>
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Supported by</b>
            <br />
            medical research & Indigenous knowledge
          </p>
        </div>
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Holistic</b>
            <br />
            approach to healing & symptom management
          </p>
        </div>
      </div>
      {/* featured article photo + description box */}
      <FeaturePhoto featuredArticle={featuredArticle} />

      {/* "symptoms" section - COMPLETE: is mobile friendly! */}
      <CardTitle>BY SYMPTOM</CardTitle>
      <Cards allArticles={symptomsArticles}></Cards>
      {/* Book section - COMPLETE: is mobile friendly! */}
      {/* desktop responsiveness */}
      <BookBuyNow/>
      {/* "conditions" section */}
      <CardTitle>BY condition</CardTitle>
      <Cards allArticles={byDiseaseArticles}></Cards>
      {/* green speech bubbles section - COMPLETE: is mobile friendly! */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-24 ">
        {/* did you know? */}
        <div className="grid grid-cols-1 ">
          <div class="speech bottom">did you know?</div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Fact with link to article</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Fact with link to article</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Fact with link to article</p>
            </div>
          </div>
        </div>

        {/* tools and calulators section  */}
        <div className="grid grid-cols-1 ">
          <div class="speech bottom">tools & calculators</div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center ">
              <p className="card-title ">PASI Calculator</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Symptom Checker</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Something Else</p>
            </div>
          </div>
        </div>
      </div>
      {/* prompt to join email list  */}
      <EmailPrompt />
      {/* "recipes" section - use later after content is created! */}
      {/* <CardTitle>recipes</CardTitle> */}
      {/* <Cards allArticles={symptomsArticles}></Cards> */}
      {/* "nutrition and supplements" section */}
      <CardTitle>Nutrition & Supplements</CardTitle>
      <Cards allArticles={nutAndSuppsArticles}></Cards>
      {/* statement on scientific/journalistic integrity */}
      <div className="w-full bg-turquoise h-64 mt-24 place-items-center">
        <p className="text-center p-24">
          Statement on scientific/journalistic integrity
        </p>
      </div>
    </>
  );
}




