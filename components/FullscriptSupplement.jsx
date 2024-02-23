import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

// This component creates new product card, title, + description for an individual supplement. Gets called in .map function in top-supplements/page.js to generate product cards for all supplements, pulling supplement JSONs from content/TopSupplements.json. Obtains product_id, title, and description from JSON.

// To add a new supplement:
// 1. Login to Fullscript and find the supplement you want to add in their dispensary. Then, click on the three dots on the top right of the supplement to copy the script for that particular supplement. 
// 2. Paste this script into a webpage and kick up local server. Take a screenshot of the supplement image. 
// 3. Add image to the public/supplements, titled appropriately 
// 4. Add a new property to content/TopSupplements.json with the corresponding info 
// 5. Copy the product_id from the script, add to JSON property. Delete script.


const FullscriptSupplement = (props) => {
  const { supplement } = props;

  return (
    <div className="grid md:grid-cols-[30%_70%] px-4 py-10">
      <a
        href={`https://us.fullscript.com/welcome/autoimmunenutrition/store-start/?product_id=${supplement.product_id}&signup_source=product_cards`}
        target="_blank"
        className="my-auto mx-auto"
      >
        <Image src={supplement.photo} width={182} height={370} alt={supplement.alt}></Image>
      </a>
      <div className="pt-4 grid p-2 mx-auto place-content-start">
        <h2 className="text-xl md:text-3xl font-bold mx-auto text-center my-4">
          {supplement.title}
        </h2>
        <p className="text-center">{parse(supplement.description)}</p>
      </div>
    </div>
  );
};

export default FullscriptSupplement;
