import Image from "next/image";
import "tailwindcss/tailwind.css";
import main_image from "../../../public/main_image_front_page_autoimmune_eats_cropped.jpg";
import main_image_mobile from "../../../public/main_image_front_page_autoimmune_eats_HALF.jpg";
import Link from "next/link";
import SectionTitleTurquoiseShadow from "../../../components/SectionTitleTurquoiseShadow";
import Cards from "../../../components/Cards";
import EmailPrompt from "../../../components/EmailPrompt";
import FeaturePhoto from "../../../components/FeaturedArticle";
import BookBuyNow from "../../../components/BookBuyNow";
//by symptom:
import IsItAutoimmuneChecklist from "../../../content/IsItAutoimmuneChecklist.json";
import LupusAndArthritisHowToImprove from "../../../content/LupusAndArthritisHowToImprove.json";
import FatigueAndAutoimmuneDisease from "../../../content/FatigueAndAutoimmuneDisease.json";
//nutrition and supplements:
import WhatCausesAutoimmuneDisease from "../../../content/WhatCausesAutoimmuneDiseaseandHowtoCureitNaturally.json";
import BestAutoimmuneDiseaseDiet from "../../../content/BestAutoimmuneDiseaseDiet.json";
import WorstFoodsforAutoimmuneDisease from "../../../content/WorstFoodsforAutoimmuneDisease.json";
//by disease:
import WhatIsTheBestPsoriasisDiet from "../../../content/WhatIsTheBestPsoriasisDiet.json";
import HashimotosAndGluten from "../../../content/HashimotosAndGluten.json";
import FoodsThatCauseEczema from "../../../content/FoodsThatCauseEczema.json";
import AutoimmuneDiseaseAndInfections from "../../../content/LinkBetweenAutoimmuneDiseaseAndInfectionslikeCOVID.json";
// Did You Know? articles - *add later

export const metadata = {
  title: "Autoimmune Eats: Radical Nutrition for Autoimmune Disease",
  canonical: "https://autoimmuneeats.com",
  description:
    "Harness nutrition to improve your autoimmune disease - without resorting to restrictive & unproven diets. Learn how you can start feeling better today.",
  keywords: [
    "autoimmune eats",
    "autoimmune nutrition",
    "anti-diet autoimmune",
    "autoimmune eats caylee clay",
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Autoimmune Eats: Radical Nutrition for Autoimmune Disease",
    description:
      "Harness nutrition to improve your autoimmune disease - without resorting to restrictive & unproven diets. Learn how you can start feeling better today.",
    url: "https://autoimmuneeats.com/",
    siteName: "Autoimmune Eats",
    image: [
      {
        url: "https://autoimmuneeats.com/Autoimmune_Eats_Logo.png",
        alt: "Autoimmune Eats Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const symptomsArticles = [
    IsItAutoimmuneChecklist,
    LupusAndArthritisHowToImprove,
    FatigueAndAutoimmuneDisease,
  ];
  const nutAndSuppsArticles = [
    WhatCausesAutoimmuneDisease,
    BestAutoimmuneDiseaseDiet,
    WorstFoodsforAutoimmuneDisease,
  ];
  const byDiseaseArticles = [
    WhatIsTheBestPsoriasisDiet,
    HashimotosAndGluten,
    FoodsThatCauseEczema,
    AutoimmuneDiseaseAndInfections,
  ];

  const featuredArticle = BestAutoimmuneDiseaseDiet;

  return (
    <>
      {/* main image with overlayed text boxes - desktop + mobile */}
      <div className="w-full flex justify-center bg-gradient-to-r from-turquoise via-coral-pink to-[#e3b341]">
        <Image
          className="hidden md:grid w-full z-1 min-w-[100%]"
          src={main_image}
          alt="wooden cutting board with colorful dried herbs mirrored on left and right sides"
          priority
        />
        <Image
          className="grid w-full z-1 min-w-[100%] md:hidden"
          src={main_image_mobile}
          alt="wooden cutting board with colorful dried herbs on left side"
          priority
          placeholder="blur"
        />

        {/* text boxes for sm and larger screens */}
        <div className="hidden sm:grid absolute z-2 m-16 justify-center max-h-24 lg:pt-20">
          <div className="bg-white box-border px-10 pt-10 text-center opacity-80">
            <p className="text-3xl lg:text-6xl pb-4 ">
              <strong>welcome</strong>
              <br />
              to autoimmune eats
            </p>
            <p className="text-2xl lg:text-3xl px-10 pb-8 pt-0">
              Discover how to live with
              <br /> more peace & less pain.
            </p>
          </div>
          <div className="w-60 mx-auto">
            <Link
              href="https://mailchi.mp/5ce73b419aaa/autoimmune-eats"
              target="_blank"
            >
              <button className="text-xl text-black bg-white rounded-md box-border mt-6 p-4 text-center opacity-80 justify-center">
                join our mailing list
              </button>
            </Link>
          </div>
        </div>

        {/* text boxes for very small screens */}
        <div className="sm:hidden grid absolute m-14 z-2 place-self-center ">
          <div className="bg-white box-border px-2 pt-5 sm:pt-10 text-center opacity-80">
            <p className="text-2xl sm:text-6xl pb-4 ">
              <strong>welcome</strong>
              <br />
              to autoimmune eats
            </p>
            <p className="grid text-l px-5 pb-5">
              Discover how to live with more peace & less pain.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="https://mailchi.mp/5ce73b419aaa/autoimmune-eats"
              target="_blank"
            >
              <button className="w-40 text-l text-black bg-white rounded-md box-border mt-6 p-2 sm:p-4 text-center opacity-80 ">
                join our mailing list
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 4 boxes with main site features */}
      <div className="w-full grid grid-cols-2 md:flex my-6 sm:my-12 bg-white">
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <strong>Free of dieting,</strong>
            <br />
            fearing foods, & fat shaming
          </p>
        </div>
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <strong>Natural remedies</strong>
            <br />
            prioritized, medication supported
          </p>
        </div>
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <strong>Supported by</strong>
            <br />
            medical research & Indigenous knowledge
          </p>
        </div>
        <div className="p-5 md:w-1/4 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <strong>Holistic</strong>
            <br />
            approach to healing & symptom management
          </p>
        </div>
      </div>
      {/* featured article photo + description box */}
      <FeaturePhoto featuredArticle={featuredArticle} />

      {/* "nutrition and supplements" section */}
      <SectionTitleTurquoiseShadow>
        Nutrition & Supplements
      </SectionTitleTurquoiseShadow>
      <Cards allArticles={nutAndSuppsArticles}></Cards>

      {/* Book section */}
      <BookBuyNow />

      {/* prompt to join email list */}
      <EmailPrompt />

      {/* "conditions" section */}
      <SectionTitleTurquoiseShadow>BY condition</SectionTitleTurquoiseShadow>
      <Cards allArticles={byDiseaseArticles}></Cards>

      {/* green speech bubbles section  - desktop + mobile */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 mt-24 "> */}

      {/* did you know? - add code later when 4 did you know articles are written*/}
      {/* <div className="grid grid-cols-1 ">
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
        </div> */}

      {/* tools and calulators section  - add code later when calculators are built out*/}
      {/* <div className="grid grid-cols-1 ">
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
      </div> */}

      {/* "recipes" section - use later when/if content is created! */}
      {/* <SectionTitleTurquoiseShadow>recipes</SectionTitleTurquoiseShadow> */}
      {/* <Cards allArticles={symptomsArticles}></Cards> */}

      {/* statement on scientific/journalistic integrity */}
      <div className="w-full bg-turquoise py-10 grid place-items-center text-center">
        <div className="w-3/4 md:w-1/2">
          <h2 className="text-xl font-bold md:text-2xl pb-6">
            Scientific & Journalistic Integrity Matter to Us
          </h2>
          <p>
            At Autoimmune Eats, we set high standards of quality, research, &
            transparency for all of our content. Every article & resource
            provided is replete with the highest quality citations & sources
            available. Known limitations in the current body of research at
            publication are noted whenever possible.<br></br>
            <br></br>We value both contemporary Western sciences & ancient
            Indigenous sciences equally, as we recognize that the Indigenous
            sciences have been systemically discredited & inappropriately
            disregarded in recent history.
          </p>
        </div>
      </div>

      {/* "symptoms" section */}
      <SectionTitleTurquoiseShadow>BY SYMPTOM</SectionTitleTurquoiseShadow>
      <Cards allArticles={symptomsArticles}></Cards>
    </>
  );
}
