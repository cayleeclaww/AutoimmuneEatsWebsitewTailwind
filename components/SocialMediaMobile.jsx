// Currently not fully operational. Instagram works (simply links to IG page) - however may be better as a prompt that tries to open app. FB functionality can almost certainly be improved. Pinterest, LinkedIn, print, and copy link (BsLink) are non-operational.

import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function SocialMediaMobile(props) {
  return (
    <div className="flex md:hidden justify-center gap-2 mt-4 ">
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
      <FaFacebookF
        size={25}
        style={{
          borderRadius: "50%",
          border: "1px solid grey",
          padding: "4px",
          color: "#007FFF",
        }}
      ></FaFacebookF>
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
