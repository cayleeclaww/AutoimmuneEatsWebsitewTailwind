import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import CardTitle from "../../../../components/CardTitleComponent";
import BookBuyNow from "../../../../components/BookBuyNow";
import EmailPrompt from "../../../../components/EmailPrompt";
import Link from "next/link";
import Image from "next/image";
import Autoimmune_Nutrition_Starters_Guide_Website_Thumbnail from "public/Autoimmune_Nutrition_Starters_Guide_Website_Thumbnail.png";

// ** MAKE SURE all images have alt tags

export default function ResourcesPage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Resources</p>
      </TitleRectangleTurquoise>
      <div id="book">
        <CardTitle>Gain Control Over Your Psoriasis</CardTitle>
        <BookBuyNow />
      </div>
      {/* Autoimmune Nutrition Starters' Guide */}
      <div id="autoimmune-nutrition-starters-guide">
        <CardTitle>Autoimmune Nutrition Starters' Guide</CardTitle>
        {/* desktop responsiveness */}
        <div className="w-full flex justify-center py-16 items-center">
          <Link
            href="https://mailchi.mp/dff1a9ca7a62/autoimmune-nutrition-starters-guide"
            target="_blank"
          >
            <Image
              src={Autoimmune_Nutrition_Starters_Guide_Website_Thumbnail}
              className="hidden md:flex visible z-1 "
              width={326}
              height={448}
            />
          </Link>
          <div className="hidden md:grid m-6 border-solid border-2 border-grey h-fit max-h-90 max-w-md items-center mt-14">
            <p className="text-2xl p-4 text-bold text-center">
              FREE! Autoimmune Nutrition Starters' Guide (PDF)
            </p>
            <p className="text-l px-4 pb-4">
              Are you interested in reducing your autoimmune symptoms using
              nutrition? You're in the right place! Use these 7 basic steps to
              promote healing.
            </p>
            <Link
              href="https://mailchi.mp/dff1a9ca7a62/autoimmune-nutrition-starters-guide"
              target="_blank"
            >
              <button className="text-l p-2 m-3 bg-turquoise uppercase rounded-md justify-center w-[95%] text-black hover:font-bold">
                get here
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile responsiveness */}
      <div className="md:hidden grid p-4 place-content-center">
        <Link
          href="https://mailchi.mp/dff1a9ca7a62/autoimmune-nutrition-starters-guide"
          target="_blank"
        >
          <Image
            className=""
            src={Autoimmune_Nutrition_Starters_Guide_Website_Thumbnail}
            width={326}
            height={448}
            alt="Thumbnail cover image for the Autoimmune Nutrition Starters Guide downloadable PDF"
          />
        </Link>
      </div>
      <div className="md:hidden flex flex-col items-center mx-4">
        <p className="text-2xl px-4 pt-6 text-bold text-center">
          FREE! Autoimmune Nutrition Starters' Guide (PDF)
        </p>
        <p className="text-l px-4 p-2 text-center">
          Are you interested in reducing your autoimmune symptoms using
          nutrition? You're in the right place! Use these 7 basic steps to
          promote healing.
        </p>
        <Link
          href="https://mailchi.mp/dff1a9ca7a62/autoimmune-nutrition-starters-guide"
          target="_blank"
        >
          <button className="text-l p-2 m-3 w-60 bg-turquoise uppercase rounded-md justify-center text-black hover:font-bold">
            get here
          </button>
        </Link>
      </div>
      <div id="guided-meditation">
        <CardTitle>Guided Meditation for Eating</CardTitle>
        <Link href="https://mailchi.mp/4229b97caf89/guidedmeditation">
          Put a picture for this link
        </Link>
      </div>
      <EmailPrompt />
      <div id="candida-screening-form">
        <CardTitle>Candida Screening Form</CardTitle>
        <Link href="https://mailchi.mp/27c76ba54c78/candidascreen">
          Put a picture for this link
        </Link>
      </div>
      <div id="dinner-meal-planner">
        <CardTitle>Dinner Meal Planner</CardTitle>
        <Link href="https://mailchi.mp/fd4406528fee/betterthanamealplan">
          Put a picture for this link
        </Link>
      </div>
      <div id="track-psoriasis-severity">
        <CardTitle>Track Psoriasis Severity</CardTitle>
        <Link href="https://mailchi.mp/ea121f177b09/pasi">
          Put a picture for this link
        </Link>
      </div>
      {/* <CardTitle>Top Supplements</CardTitle> */}
      {/* prompt to join email list */}
      <EmailPrompt />
    </>
  );
}
