"use client"
import { useEffect } from "react";

const UseScript = (props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//us.fullscript.com/oembed/embed.js";
    script.data = {"product_id":"89020","store_slug":"cclaynutrition","return":"product_card"};
    // script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
    return <div>{/* Your custom component rendering */}</div>;
};

export default UseScript;
