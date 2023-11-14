import TitleRectangleTurquoise from "../../../../../components/TitleRectangleTurquoise";
// import "tailwindcss/tailwind.css";
import Script from "next/script";



// FOR LATER: figure out how to get supplement in flexbox



export default function TopSupplementsPage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Top Supplements</p>
      </TitleRectangleTurquoise>
      <body
      className="flex">
        {/* <div className="flex"> */}
          {/* NOW Liquid Vitamin D-3 */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"89020","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
          {/* Seeking Health Multivitamin One MF */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"84044","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
          {/* NOW Omega-3 */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"64623","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
          {/* NOW Psyllium Husk Powder */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"66929","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
          {/* Curcum-Evail - Designs for Health */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"90978","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
          {/* NAC - Integrative Therapeutics */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"58733","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
          {/* Ox Bile 125mg - Allergy Research Group */}
          <Script
            src="//us.fullscript.com/oembed/embed.js"
            data-fs='{"product_id":"64184","store_slug":"cclaynutrition","return":"product_card"}'
          ></Script>
        {/* </div> */}
      </body>
    </>
  );
}
