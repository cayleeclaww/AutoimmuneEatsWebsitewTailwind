// import { BsLink45Deg } from "react-icons/bs";
// import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
// import { FaFacebookF } from "react-icons/fa";
// import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import headshot from "../public/Caylee_headshot.jpeg";
import Image from "next/image";
// import placeholder_image from "../public/placeholder_article_photo.jpg";
// import FourCardSpread from "../../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "./TitleRectangleTurquoise";
// import Link from "next/link";
// import TestArticle from "../../../../../components/ArticleTest";
import VoteUpButton from "./VoteUpButton";
// import SocialMediaMobile from "../../../../../components/SocialMediaMobile";
// import SocialMediaDesktop from "../../../../../components/SocialMediaDesktop";
// import ArticleFeatureImage from "../../../../../components/ArticleFeatureImage";
// import ArticleSectionSubtitle from "../../../../../components/ArticleSectionSubtitle";
// import ArticleIsHelpfulMobile from "../../../../../components/ArticleIsHelpfulMobile";
// import ArticleIsHelpfulDesktop from "../../../../../components/ArticleIsHelpfulDesktop";

// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle






const TestArticleComponent = (props) => {


        return (
          <>
            {/* turquoise article title rectangle - desktop & mobile */}
            {/* <TitleRectangleTurquoise> {props}</TitleRectangleTurquoise> */}
            {/* desktop article section links */}
            {/* <div className="hidden md:flex ml-6 text-base w-[60%]">
        Article Section 1 | Article Section 2 | Article Section 3
      </div> */}
            {/* vote up button - desktop & mobile */}
            <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
              <VoteUpButton></VoteUpButton>
            </div>
            {/* mobile author name & article date section */}
            <div className="flex md:hidden">
              <Image
                alt="Caylee Clay's Author Headshot"
                src={headshot}
                className="w-20 h-20 rounded-full ml-10"
              />
              <div className="ml-4 mt-4 text-sm">
                {/* By {props.children.authorInfo.authorName} */}
                <br />
                {/* Updated on {TestArticle.datePublishedOrUpdated} */}
              </div>
            </div>
          </>
        );
};

export default TestArticleComponent;
