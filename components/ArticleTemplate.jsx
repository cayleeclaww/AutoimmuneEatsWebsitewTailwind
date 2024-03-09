import Image from "next/image";
import TitleRectangleTurquoise from "./TitleRectangleTurquoise";
import Link from "next/link";
import SocialMediaMobile from "./SocialMediaMobile";
import SocialMediaDesktop from "./SocialMediaDesktop";
import ArticleIsHelpful from "./ArticleIsHelpful";
import parse from "html-react-parser";
import EmailPrompt from "./EmailPrompt";

const ArticleTemplate = (props) => {
  const { article } = props;

  return (
    <>
      {/* turquoise article title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>{article.title}</TitleRectangleTurquoise>
      {/* article section links - desktop */}
      <div className="hidden md:block w-2/3 mx-6 pr-20 text-base lg:mx-10">
        {article.sections.map((sect, i) => (
          <div key={sect.hrefID} className="inline-block">
            &nbsp;<Link href={`#${sect.hrefID}`}>{sect.subtitle}</Link>
            {i + 1 == article.sections.length ? " " : " | "}
          </div>
        ))}
      </div>
      {/* vote up button - once component is operational, uncomment below */}
      {/* <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
        <VoteUpButton></VoteUpButton>
      </div> */}
      {/* author name & article date - mobile */}
      <div className="flex md:hidden">
        <Image
          alt={article.authorInfo.authorPhotoAlt}
          src={article.authorInfo.authorPhoto}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full ml-10"
        />
        <div className="ml-4 mt-4 text-sm">
          By {parse(article.authorInfo.authorName)}
          <br />
          Updated on {article.datePublishedOrUpdated}
        </div>
      </div>
      {/* social media icons - mobile - currently not fully operational, but keep code so is in correct place when operational */}
      {/* <SocialMediaMobile></SocialMediaMobile> */}
      {/* article section links - mobile */}
      <div className="md:hidden block mx-6 mt-10 text-base">
        {article.sections.map((sect) => (
          <div key={sect.hrefID}>
            <ul>
              <Link href={`#${sect.hrefID}`}>
                <li>{sect.subtitle}</li>
                {/* <br /> */}
              </Link>
            </ul>
          </div>
        ))}
      </div>
      {/* content section - desktop & mobile */}
      {/* break into two columns - desktop */}
      <div className="flex md:columns-2">
        {/* first of two columns - desktop & mobile */}
        <div className="md:w-[66%] columns-1">
          {/* article photo/image - desktop & mobile */}
          <div className="w-full flex justify-center p-4">
            <Image
              className="flex w-[80%] h-[80%] mt-4 "
              style={{ boxShadow: "10px 10px 15px #99CED3" }}
              alt={article.photoFeatureAlt}
              src={article.photoFeature}
              width={500}
              height={500}
            />
          </div>
          {/* article contents - desktop & mobile */}
          <div className="grid px-8 lg:px-12">
            {/* disclaimer - desktop & mobile */}
            <p className="text-sm ml-1 mt-8 mb-2 italic">
              {article.disclaimer}
            </p>
            {/* subtitle names + href ID - desktop & mobile */}
            {article.sections.map((sect) => (
              <div key={sect.hrefID}>
                <h2
                  className="text-2xl ml-1 mt-8 mb-2"
                  style={{ textShadow: "2px 2px 2px #99CED3" }}
                  id={sect.hrefID}
                >
                  {sect.subtitle}
                </h2>
                {/* content paragraphs - desktop & mobile */}
                <div className="text-base mx-1 ">{parse(sect.content)}</div>
              </div>
            ))}
          </div>
        </div>
        {/* second column - desktop */}
        <div className="hidden md:grid w-[33%] columns-1">
          {/* author name & article date - desktop */}
          <div className="content-start max-h-10">
            <div className="flex items-center mt-12 pb-6 border-b-4 border-black-500">
              <Image
                alt={article.authorInfo.authorPhotoAlt}
                src={article.authorInfo.authorPhoto}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full "
              />
              <div className="ml-4 text-sm">
                By {parse(article.authorInfo.authorName)}
                <br />
                Updated on {article.datePublishedOrUpdated}
              </div>
            </div>
            {/* social media icons - desktop - currently not fully operational, but keep code so is in correct place when operational*/}
            {/* <SocialMediaDesktop></SocialMediaDesktop> */}
          </div>
          {/* Fullscript sidebar #1- desktop */}
          <div className="place-content-center">
            <div className="grid place-items-center">
              <a
                href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_160x600.svg&signup_source=website_buttons"
                target="_top"
              >
                <img
                  src="https://assets.fullscript.com/buttons/light_160x600.svg"
                  alt="Order supplements through my Fullscript store."
                />
              </a>
            </div>
          </div>
          {/* is this article helpful - once Vote Up is functional, uncomment below*/}
          {/* <ArticleIsHelpful /> */}
          {/* Fullscript sidebar #2 - desktop */}

          <div className="place-content-center">
            <div className="grid place-items-center">
              <a
                href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_160x600.svg&signup_source=website_buttons"
                target="_top"
              >
                <img
                  src="https://assets.fullscript.com/buttons/light_160x600.svg"
                  alt="Order supplements through my Fullscript store."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* prompt to join email list */}
      <EmailPrompt className="md:w-1/2" />
      {/* is this article helpful? - once Vote Up is functional, uncomment below - will be hidden on mobile due to parent div properties */}
      {/* <ArticleIsHelpful /> */}
      {/* author bio section - desktop & mobile */}
      <div className="grid mx-6 my-10">
        <div className="text-lg mb-2">About the author:</div>
        <div className="flex ">
          <Image
            alt={article.authorInfo.authorPhotoAlt}
            src={article.authorInfo.authorPhoto}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-4 my-4 text-base">
            {parse(article.authorInfo.authorBio)}
          </div>
        </div>
      </div>
      {/* related articles - once it's functional, uncomment below */}
      {/* <FourCardSpread>related articles</FourCardSpread> */}
      {/* did you know? articles - once it's functional, uncomment below */}
      {/* <FourCardSpread>did you know?</FourCardSpread> */}
    </>
  );
};

export default ArticleTemplate;
