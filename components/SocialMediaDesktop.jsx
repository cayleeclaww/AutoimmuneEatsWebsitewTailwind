//props will eventually be.... ???? Some way to post content directly onto social media...
//instagram and Facebook links may work now... ?!?! Have not been added to social media mobile component (used https://developers.facebook.com/docs/plugins/share-button#configurator)

import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function SocialMediaDesktop(props) {
  return (
    <div className="flex justify-center gap-2 mt-4 ">
      <a href="http://instagram.com/_u/autoimmune.nutrition/" target="_blank">
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
      </a>
      <div
        class="fb-share-button"
        data-href="https://www.autoimmuneeats.com/nutrition-and-supplements/autoimmune-nutrition-101-what-you-need-to-know"
        data-layout=""
        data-size=""
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.autoimmuneeats.com%2Fnutrition-and-supplements%2Fautoimmune-nutrition-101-what-you-need-to-know&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
        >
          <FaFacebookF
            size={25}
            style={{
              borderRadius: "50%",
              border: "1px solid grey",
              padding: "4px",
              color: "#007FFF",
            }}
          ></FaFacebookF>
        </a>
      </div>
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
  );
}
