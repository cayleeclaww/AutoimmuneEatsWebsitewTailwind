import React from "react";
import Link from "next/link";

// Generates the layout for an individual item in the Resources page. URL, src, alt, subtitle, and description are sourced from object created in resoucecs/page.js. Section titles are generated in resoucecs/page.js. 

const ResourceItem = ({ url, src, alt, subtitle, description }) => {
  return (
    <>
      {/* desktop responsiveness */}
      <div className="w-full hidden md:flex justify-center py-16 items-center">
        <Link href={url} target="_blank">
          <img className="max-h-[450px] max-w-[400px]" src={src} alt={alt} />
        </Link>
        <div className="grid m-6 border-solid border-2 border-grey h-fit max-h-90 max-w-md items-center mt-14 bg-white">
          <p className="text-2xl p-4 text-bold text-center">{subtitle}</p>
          <p className="text-l px-4 pb-4 text-center">{description}</p>
          <Link href={url} target="_blank">
            <button className="text-l p-2 m-3 bg-turquoise uppercase rounded-md justify-center w-[95%] text-black hover:font-bold">
              get here
            </button>
          </Link>
        </div>
      </div>
      {/* mobile responsiveness */}
      <div className="md:hidden grid p-4 place-content-center">
        <Link href={url} target="_blank">
          <img className="max-h-[450px] max-w-[330px]" src={src} alt={alt} />
        </Link>
      </div>
      <div className="md:hidden flex flex-col items-center mx-4 bg-white">
        <p className="text-2xl px-4 pt-6 text-bold text-center">{subtitle}</p>
        <p className="text-l px-4 p-2 text-center">{description}</p>
        <Link href={url} target="_blank">
          <button className="text-l p-2 m-3 w-60 bg-turquoise uppercase rounded-md justify-center text-black hover:font-bold">
            get here
          </button>
        </Link>
      </div>
    </>
  );
};

export default ResourceItem;
