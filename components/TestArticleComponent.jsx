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
import ArticleFeatureImage from "./ArticleFeatureImage";
import ArticleSectionSubtitle from "./ArticleSectionSubtitle";
import ArticleIsHelpfulMobile from "./ArticleIsHelpfulMobile";
import ArticleIsHelpfulDesktop from "./ArticleIsHelpfulDesktop";

// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle




const TestArticleComponent = (props) => {
    const { article } = props;

        return (
          //     <>
          //       {/* turquoise article title rectangle - desktop & mobile */}
          //       <TitleRectangleTurquoise>
          //         {ArticleTest.title}
          //       </TitleRectangleTurquoise>
          //       {/* desktop article section links */}
          //       {/* <div className="hidden md:flex ml-6 text-base w-[60%]">
          //   Article Section 1 | Article Section 2 | Article Section 3
          // </div> */}
          //       {/* vote up button - desktop & mobile */}
          //       <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
          //         <VoteUpButton></VoteUpButton>
          //       </div>
          //       {/* mobile author name & article date section */}
          //       <div className="flex md:hidden">
          //         <Image
          //           alt="Caylee Clay's Author Headshot"
          //           src={headshot}
          //           className="w-20 h-20 rounded-full ml-10"
          //         />
          //         <div className="ml-4 mt-4 text-sm">
          //           {/* By {props.children.authorInfo.authorName} */}
          //           <br />
          //           {/* Updated on {TestArticle.datePublishedOrUpdated} */}
          //         </div>
          //       </div>
          //     </>

          <>
            {/* turquoise article title rectangle - desktop & mobile */}
            <TitleRectangleTurquoise>
              {article.title}
            </TitleRectangleTurquoise>
            {/* desktop article section links */}
            <div className="hidden md:flex ml-6 text-base w-[60%]">
              Article Section 1 | Article Section 2 | Article Section 3
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
            <div className="md:hidden ml-6 mt-10 text-base">
              Article Section 1 | Article Section 2 | Article Section 3
            </div>
            {/* content section - desktop & mobile*/}
            {/* desktop break into two columns */}
            <div className="flex md:columns-2">
              {/* first of two columns */}
              <div className="md:w-[66%] columns-1">
                {/* article image - desktop & mobile */}
                {/* <ArticleFeatureImage>article</ArticleFeatureImage> ***NOT WORKING*** */}
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
                  {/* <ArticleSectionSubtitle>
              {article.sections.sectionOne.subtitle}
            </ArticleSectionSubtitle> ***NOT WORKING*** */}
                  <p
                    className="text-lg ml-6 mt-8 mb-2"
                    style={{ textShadow: "2px 2px 2px #99CED3" }}
                  >
                    {article.sections.sectionOne.subtitle}
                  </p>
                  <p className="text-sm mx-6 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Faucibus purus in massa tempor nec feugiat nisl.
                    Dolor sit amet consectetur adipiscing elit. Cursus vitae
                    congue mauris rhoncus aenean. Tincidunt ornare massa eget
                    egestas purus viverra accumsan in. Ultrices tincidunt arcu
                    non sodales neque sodales ut etiam sit. Non sodales neque
                    sodales ut etiam sit amet nisl purus. Quis eleifend quam
                    adipiscing vitae proin sagittis. Consectetur a erat nam at
                    lectus urna duis convallis. Sodales ut etiam sit amet nisl
                    purus. Justo nec ultrices dui sapien eget mi proin sed. Arcu
                    cursus euismod quis viverra nibh. Rhoncus est pellentesque
                    elit ullamcorper dignissim. Dui ut ornare lectus sit.
                    Tincidunt dui ut ornare lectus sit. Aliquam sem et tortor
                    consequat id porta. Nisl tincidunt eget nullam non. Donec et
                    odio pellentesque diam volutpat commodo sed egestas egestas.
                    Parturient montes nascetur ridiculus mus mauris vitae
                    ultricies.
                  </p>
                  <p
                    className="text-lg ml-6 mt-8 mb-2"
                    style={{ textShadow: "2px 2px 2px #99CED3" }}
                  >
                    {article.sections.sectionTwo.subtitle}
                  </p>
                  <p className="text-sm mx-6 ">
                    Duis convallis convallis tellus id. A pellentesque sit amet
                    porttitor eget dolor morbi. Habitant morbi tristique
                    senectus et netus et malesuada fames. Non quam lacus
                    suspendisse faucibus. Et odio pellentesque diam volutpat.
                    Dui id ornare arcu odio ut sem nulla. Tristique senectus et
                    netus et malesuada fames. Aenean vel elit scelerisque mauris
                    pellentesque. Amet massa vitae tortor condimentum lacinia
                    quis vel eros. Sed faucibus turpis in eu. Duis at tellus at
                    urna. Tortor condimentum lacinia quis vel eros. Dui id
                    ornare arcu odio ut sem nulla. Penatibus et magnis dis
                    parturient montes nascetur ridiculus mus mauris. Et leo duis
                    ut diam quam nulla porttitor massa. Montes nascetur
                    ridiculus mus mauris vitae ultricies leo integer. Morbi
                    tristique senectus et netus et malesuada fames.
                  </p>
                  <p
                    className="text-lg ml-6 mt-8 mb-2"
                    style={{ textShadow: "2px 2px 2px #99CED3" }}
                  >
                    {article.sections.sectionThree.subtitle}
                  </p>
                  <p className="text-sm mx-6 ">
                    Scelerisque purus semper eget duis at tellus at urna. Arcu
                    odio ut sem nulla pharetra diam sit amet nisl. Sapien nec
                    sagittis aliquam malesuada bibendum. Lacus vestibulum sed
                    arcu non odio euismod lacinia. Et tortor at risus viverra.
                    Tristique magna sit amet purus gravida quis blandit. Sit
                    amet mattis vulputate enim nulla. Viverra vitae congue eu
                    consequat ac felis. Cursus metus aliquam eleifend mi in
                    nulla. Nisl tincidunt eget nullam non nisi est sit. Nulla at
                    volutpat diam ut venenatis tellus. Sed id semper risus in
                    hendrerit gravida rutrum. Aenean pharetra magna ac placerat.
                    Est velit egestas dui id ornare arcu odio ut sem. Amet nisl
                    suscipit adipiscing bibendum est ultricies integer quis.
                    Enim nulla aliquet porttitor lacus luctus accumsan tortor.
                    Egestas diam in arcu cursus. Volutpat odio facilisis mauris
                    sit.
                  </p>

                  {/* mobile - is this article helpful, vote up */}
                  <ArticleIsHelpfulMobile></ArticleIsHelpfulMobile>
                  {/* desktop - prompt to join email list */}
                  <div className="hidden md:block bg-turquoise h-48  mb-4 mt-8 -ml-8">
                    <h1 className="text-lg text-center pt-20">
                      Prompt to join email list
                    </h1>
                  </div>

                  <p
                    className="text-lg ml-6 mt-8 mb-2"
                    style={{ textShadow: "2px 2px 2px #99CED3" }}
                  >
                    Section 3
                  </p>
                  <p className="text-sm mx-6 ">
                    Faucibus purus in massa tempor nec feugiat nisl pretium
                    fusce. Posuere urna nec tincidunt praesent semper. Sed id
                    semper risus in hendrerit. Tellus id interdum velit laoreet
                    id donec ultrices tincidunt. Nisi vitae suscipit tellus
                    mauris a diam. Eget aliquet nibh praesent tristique magna
                    sit amet. Sapien pellentesque habitant morbi tristique
                    senectus et netus. Eget magna fermentum iaculis eu non.
                  </p>
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
              <h1 className="text-lg text-center pt-20">
                Prompt to join email list
              </h1>
            </div>
            {/* is this article helpful? - desktop & mobile */}
            <div className="grid place-items-center py-24">
              <p className="text-xl">Is this article helpful?</p>
              <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
                <div class="arrow-container-two">
                  <span class="up-arrow-two"></span>
                  <p className="mx-3">vote up</p>
                  <span class="up-arrow-two"></span>
                </div>
              </button>
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
                  Caylee Clay, RDN CDN CYT (they/them) is a
                  dietitian-nutritionist, scientist, researcher, author,
                  software engineer, & autoimmune disease expert. Caylee is the
                  author of{" "}
                  <Link href="https://www.amazon.com/gp/product/173515041X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173515041X&linkCode=as2&tag=eatyerveggies-20&linkId=7933144f7c8eea01d9847a2da039b38f">
                    {" "}
                    Gain Control Over Your Psoriasis
                  </Link>
                  . Outside of work, Caylee loves gardening, hiking, cooking, &
                  biking all over NYC.
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

export default TestArticleComponent;
