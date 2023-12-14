// import { BsLink45Deg } from "react-icons/bs";
// import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
// import { FaFacebookF } from "react-icons/fa";
// import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import headshot from "../public/Caylee_headshot.jpeg";
import Image from "next/image";
import placeholder_image from "../public/placeholder_article_photo.jpg";
import FourCardSpread from "./FourCardSpread";
import TitleRectangleTurquoise from "./TitleRectangleTurquoise";
import Link from "next/link";
import VoteUpButton from "./VoteUpButton";
import SocialMediaMobile from "./SocialMediaMobile";
import SocialMediaDesktop from "./SocialMediaDesktop";
// import ArticleFeatureImage from "./ArticleFeatureImage";
// import ArticleSectionSubtitle from "./ArticleSectionSubtitle";
// import ArticleIsHelpfulMobile from "./ArticleIsHelpfulMobile";
import ArticleIsHelpfulDesktop from "./ArticleIsHelpfulDesktop";
import parse from "html-react-parser";

// ****** NOTES FOR LATER: fix if statement on line 39 so | does not print after last subtitle (https://stackoverflow.com/questions/38176352/javascript-map-array-last-item  && https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react)
// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle

const ArticleComponent = (props) => {
  const { article } = props;

  return (
    <>
      {/* turquoise article title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>{article.title}</TitleRectangleTurquoise>
      {/* desktop article section links */}
      <div className="hidden md:block w-2/3 mx-6 pr-20 text-base">
        {article.sections.map((sect, i) => (
          <div key={sect.hrefID} className="inline-block">
            {/* if (i + 1 < article.sections.length){
             sect.subtitle + " | "
              console.log(article.sections.length);
            }
            else {
             sect.subtitle = sect.subtitle;
            }  */}
            <Link href={`#${sect.hrefID} `}>
              &nbsp;{sect.subtitle}
              {" | "}
            </Link>
            {/* if (i + 1 < sections.length){" | "} */}{" "}
          </div>
        ))}
      </div>

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
          By {article.authorInfo.authorName}
          <br />
          Updated on {article.datePublishedOrUpdated}
        </div>
      </div>
      {/* mobile social media icons */}
      <SocialMediaMobile></SocialMediaMobile>
      {/* mobile article section links */}
      <ul className="md:hidden block mx-6 mt-10 text-base">
        {article.sections.map((sect) => (
          <li key={sect.hrefID}>
            <Link href={`#${sect.hrefID}`}>{sect.subtitle}</Link>
          </li>
        ))}
      </ul>
      {/* content section - desktop & mobile*/}
      {/* desktop break into two columns */}
      <div className="flex md:columns-2">
        {/* first of two columns */}
        <div className="md:w-[66%] columns-1">
          {/* article image - desktop & mobile */}
          <div className="w-full flex justify-center p-4">
            <Image
              className="flex w-[80%] h-[80%] mt-4 "
              style={{ boxShadow: "10px 10px 15px #99CED3" }}
              src={placeholder_image}
              alt="placeholder image"
            />
          </div>
          {/* article contents - desktop & mobile*/}
          <div className="grid px-8">
            {/* disclaimer */}
            <p className="text-sm ml-6 mt-8 mb-2 italic">
              {article.disclaimer}
            </p>
            {/* subtitle + content */}
            {article.sections.map((sect) => (
              // subtitle name + href ID
              <div key={sect.hrefID}>
                <p
                  className="text-lg ml-6 mt-8 mb-2"
                  style={{ textShadow: "2px 2px 2px #99CED3" }}
                  id={sect.hrefID}
                >
                  {sect.subtitle}
                </p>
                {/* paragraphs */}
                <div className="text-sm mx-6 ">{parse(sect.content)}</div>
              </div>
            ))}
          </div>
        </div>
        {/* second column on desktop */}
        <div className="hidden md:grid w-[33%] columns-1">
          {/* desktop author name & article date section */}
          <div className="content-start max-h-10">
            <div className="flex items-center mt-12 pb-6 border-b-4 border-black-500">
              <Image
                alt="Caylee Clay's Author Headshot"
                src={headshot}
                className="w-20 h-20 rounded-full "
              />
              <div className="ml-4 text-sm">
                By {article.authorInfo.authorName}
                <br />
                Updated on {article.datePublishedOrUpdated}
              </div>
            </div>
            {/* desktop social media icons */}
            <SocialMediaDesktop></SocialMediaDesktop>
          </div>
          {/* desktop is this article helpful */}
          <ArticleIsHelpfulDesktop></ArticleIsHelpfulDesktop>
        </div>
      </div>
      {/* prompt to join email list - desktop & mobile */}
      <div className="bg-turquoise h-48 md:w-4/5 mb-4 block mt-8 ">
        <h1 className="text-lg text-center pt-20">Prompt to join email list</h1>
      </div>
      {/* is this article helpful? - desktop & mobile - bottom of page */}
      <div className="grid place-items-center py-24">
        <p className="text-xl">Is this article helpful?</p>
        <div className="p-2 m-2 grid">
          <VoteUpButton></VoteUpButton>
        </div>
      </div>
      {/* author bio section - desktop & mobile */}
      <div className="grid mx-6 mt-8 ">
        <div className="text-lg mb-2">About the author:</div>
        <div className="flex ">
          <Image
            alt="Caylee Clay's Author Headshot"
            src={headshot}
            className="w-20 h-20 rounded-full "
          />
          <div className="ml-4 mt-4 text-base">
            Caylee Clay, RDN CDN CYT (they/them) is a dietitian-nutritionist,
            scientist, researcher, author, software engineer, & autoimmune
            disease expert. Caylee is the author of{" "}
            <Link href="https://amzn.to/3xSaKFJ" target="_blank">
              {" "}
              Gain Control Over Your Psoriasis
            </Link>
            . Outside of work, Caylee loves gardening, hiking, cooking, & biking
            all over NYC.
          </div>
        </div>
      </div>
      {/* related articles - desktop & mobile */}
      <FourCardSpread>related articles</FourCardSpread>
      {/* did you know? articles - desktop & mobile */}
      <FourCardSpread>did you know?</FourCardSpread>
      {/* footer - desktop & mobile */}
      <div className="w-full mt-24 bg-gray-300 h-64 place-items-center">
        <p className="text-center p-24">footer</p>
      </div>
    </>
  );
};

export default ArticleComponent;
