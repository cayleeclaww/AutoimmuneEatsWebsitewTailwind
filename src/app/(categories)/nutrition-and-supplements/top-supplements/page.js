import TitleRectangleTurquoise from "../../../../../components/TitleRectangleTurquoise";
import Image from "next/image";
import Script from "next/script";
import FullscriptSupplement from "../../../../../components/FullscriptSupplement";
import UseScript from "../../../../../components/UseScript";
import Link from "next/link";
// import vitamin_D_thorne_supplement_image from "../../../../../public/supplements/vitamin_D_thorne_supplement_image.png";
import vitamin_D from "../../../../../content/supplements/vitamin_D.json";
import curcumin from "../../../../../content/supplements/curcumin.json";
import omega_three from "../../../../../content/supplements/omega-3.json";
import multivitamin_methyl_free from "../../../../../content/supplements/multivitamin_methyl_free.json";
import nac from "../../../../../content/supplements/nac.json";
import ox_bile from "../../../../../content/supplements/ox_bile.json";
import psyllium_husk from "../../../../../content/supplements/psyllium_husk.json";

// FOR LATER: figure out how to get supplement in flexbox
// FOR LATER: delete UseScript component 

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
        {/* Vitamin D - Thorne */}
        <FullscriptSupplement supplement={vitamin_D} />
        {/* NOW Omega-3 */}
        <FullscriptSupplement supplement={omega_three} />
        {/* NOW Psyllium Husk Powder */}
        <FullscriptSupplement supplement={psyllium_husk} />

        {/* Curcum-Evail - Designs for Health */}
        <FullscriptSupplement supplement={curcumin} />

        {/* Seeking Health Multivitamin One MF */}
        <FullscriptSupplement supplement={multivitamin_methyl_free} />

        {/* NAC - Integrative Therapeutics */}
        <FullscriptSupplement supplement={nac} />

        {/* Ox Bile 125mg - Allergy Research Group */}
        <FullscriptSupplement supplement={ox_bile} />
      </div>

    </>
  );
}
