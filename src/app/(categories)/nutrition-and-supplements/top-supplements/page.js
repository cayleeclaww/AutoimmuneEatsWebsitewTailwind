import TitleRectangleTurquoise from "../../../../../components/TitleRectangleTurquoise";
import Image from "next/image";
import Script from "next/script";
import FullscriptSupplement from "../../../../../components/FullscriptSupplement";
import UseScript from "../../../../../components/UseScript";
import Link from "next/link";
import vitamin_D_thorne_supplement_image from "../../../../../public/supplements/vitamin_D_thorne_supplement_image.png";

// FOR LATER: figure out how to get supplement in flexbox

// us.fullscript.com/o/catalog/products/U3ByZWU6OlByb2R1Y3QtODkwMjA=
// us.fullscript.com/o/catalog/products/U3ByZWU6OlByb2R1Y3QtODkwMjA=
// us.fullscript.com/o/catalog/products/U3ByZWU6OlByb2R1Y3QtODQwNDQ=
//us.fullscript.com/welcome/cclaynutrition?product_id=84044&signup_source=product_cards
//us.fullscript.com/welcome/autoimmunenutrition

export default function TopSuppsPage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Top Supplements</p>
      </TitleRectangleTurquoise>
      {/* banner to Fullscript dispensary */}
      <a
        className="flex justify-center"
        href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_728x90.svg&signup_source=website_buttons"
        target="_top"
      >
        <img
          src="https://assets.fullscript.com/buttons/light_728x90.svg"
          alt="Order supplements through my Fullscript store."
        />
      </a>
      {/* all supplements */}
      <div className="grid md:w-1/2 mx-auto py-10 divide-y divide-solid">
        {/* vitamin D supplements - use BELOW code to make component!! */}
        <div className="grid md:grid-cols-[30%_70%] px-4 py-10">
          <Link
            href="https://us.fullscript.com/welcome/autoimmunenutrition/store-start"
            target="_blank"
            className="my-auto mx-auto "
          >
            <Image
              src={vitamin_D_thorne_supplement_image}
              width={182}
              height={370}
              className=""
            ></Image>
          </Link>
          <div className="pt-6 grid p-2">
            <h2 className="text-xl md:text-3xl font-bold mx-auto text-center">
              Vitamin D Liquid
            </h2>
            <p className="mx-auto text-center">
              Vitamin D is essential to proper immune system functioning.
              Deficiency in vitamin D may make autoimmune disease worse, &
              increases the risk of infection, which also can worsen autoimmune
              disease.<br></br>
              <br></br>
              Vitamin D also helps promote healthy bones & maintain adequate
              levels of calcium across the body (
              <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3166406/">
                PubMed
              </Link>
              ).
            </p>
          </div>
        </div>
        {/* vitamin D supplements - USE THSI CODE!! */}
        <div className="grid md:grid-cols-[30%_70%] px-4 py-10">
          <Link
            href="https://us.fullscript.com/welcome/autoimmunenutrition/store-start"
            target="_blank"
            className="my-auto mx-auto "
          >
            <Image
              src={vitamin_D_thorne_supplement_image}
              width={182}
              height={370}
            ></Image>
          </Link>
          <div className="pt-4 grid p-2 mx-auto place-content-start">
            <h2 className="text-xl md:text-3xl font-bold mx-auto text-center my-4">
              Vitamin D Liquid
            </h2>
            <p className="text-center">
              Vitamin D is essential to proper immune system functioning.
              Deficiency in vitamin D may make autoimmune disease worse, &
              increases the risk of infection, which also can worsen autoimmune
              disease.<br></br>
              <br></br>
              Vitamin D also helps promote healthy bones & maintain adequate
              levels of calcium across the body (
              <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3166406/">
                PubMed
              </Link>
              ).
            </p>
          </div>
        </div>
      </div>
      {/* <Link href="https://us.fullscript.com/plans/cclaynutrition-vitamin-d">
        Vitamin D
      </Link> */}
      {/* <UseScript/>
      UseScript('"product_id":"89020","store_slug":"cclaynutrition","return":"product_card"') */}
      {/* <FullscriptSupplement product_id={89020}></FullscriptSupplement> */}
      {/* <div className="flex"> */}
      {/* NOW Liquid Vitamin D-3 */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"76524","store_slug":"autoimmunenutrition","return":"product_card"}'
      ></script> */}

      {/* Seeking Health Multivitamin One MF */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"84044","store_slug":"cclaynutrition","return":"product_card"}'
        defer
      ></script> */}
      {/* NOW Omega-3 */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"64623","store_slug":"cclaynutrition","return":"product_card"}'
        defer
      ></script> */}
      {/* NOW Psyllium Husk Powder */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"66929","store_slug":"cclaynutrition","return":"product_card"}'
        defer
      ></script> */}
      {/* Curcum-Evail - Designs for Health */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"90978","store_slug":"cclaynutrition","return":"product_card"}'
        defer
      ></script> */}
      {/* NAC - Integrative Therapeutics */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"58733","store_slug":"cclaynutrition","return":"product_card"}'
        defer
      ></script> */}
      {/* Ox Bile 125mg - Allergy Research Group */}
      {/* <script
        src="//us.fullscript.com/oembed/embed.js"
        data-fs='{"product_id":"64184","store_slug":"cclaynutrition","return":"product_card"}'
        defer
      ></script> */}
      {/* </div> */}
    </>
  );
}
