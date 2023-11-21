import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import headshot from "../../../../../public/Caylee_headshot.jpeg";
import Image from "next/image";
import placeholder_image from "../../../../../public/placeholder_article_photo.jpg";
import FourCardSpread from "../../../../../components/FourCardSpread";
import TitleRectangleTurquoise from "../../../../../components/TitleRectangleTurquoise";
import Link from "next/link";

// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle
// ****** NOTES FOR LATER: Make sure article section links wrap correctly/acceptably...

export const metadata = {
  title: "Autoimmune Nutrition 101: What You Need to Know", // 47 characters
  description:
    "Do you know the best and worst foods for autoimmune disease? Should you eat an anti-inflammatory diet? The answer may surprise you!", // 130 characters
  keywords: [
    "worst foods for autoimmune disease",
    "autoimmune disease anti inflammatory diet",
    "aip diet",
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Autoimmune Nutrition 101: What You Need to Know | Autoimmune Eats", //May need to delete "| Autoimmune Eats" from here later, since it's in the root layout metadata
    description:
      "Do you know the best and worst foods for autoimmune disease? Should you eat an anti-inflammatory diet? The answer may surprise you!", // 130 characters
    url: "http://autoimmuneeats.com/nutrition-and-supplements/autoimmune-nutrition-101-what-you-need-to-know", // update later to
    siteName: "Autoimmune Eats",
    images: [
      {
        url: "http://autoimmuneeats.com/placeholder_article_photo.jpg", //update??
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "article", //Could be "website" or "video" or "article" (LATER: set homepage to "website")
    publishedTime: "2023-11-13",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      // noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page = () => {
  return (
    <>
      {/* turquoise article title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        Autoimmune Nutrition 101:<br></br> What You Need to Know
      </TitleRectangleTurquoise>
      {/* vote up button - desktop & mobile */}
      <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
        <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
          <div class="arrow-container-two">
            <span class="up-arrow-two"></span>
            <p className="mx-3">vote up</p>
            <span class="up-arrow-two"></span>
          </div>
        </button>
      </div>
      {/* desktop article section links */}
      <div className="hidden md:block w-2/3 mx-6 pr-20 text-base">
        <Link href="#Why-Nutrition-is-Important" className="inline-block">
          Why Nutrition is Important
        </Link>
        &nbsp;|&nbsp;
        <Link
          href="#What-are-the-Worst-Foods-for-Autoimmune-Disease"
          className="inline-block"
        >
          What are the Worst Foods for Autoimmune Disease?
        </Link>
        &nbsp;|&nbsp;
        <Link
          href="#Does-the-Anti-Inflammatory-Diet-Work"
          className="inline-block"
        >
          Does the Anti-Inflammatory Diet Work?
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Does-the-AIP-Diet-Work" className="inline-block">
          Does the AIP Diet Work?
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Dangers-of-Dieting" className="inline-block">
          Dangers of Dieting
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Safer-Alternative-to-Dieting" className="inline-block">
          Safer Alternative to Dieting
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Bottom-Line" className="inline-block">
          Bottom Line
        </Link>
      </div>

      {/* mobile author name & article date section */}
      <div className="flex md:hidden">
        <Image
          alt="Caylee Clay's Author Headshot"
          src={headshot}
          className="w-20 h-20 rounded-full ml-10"
        />
        <div className="ml-4 mt-4 text-lg">
          By Caylee Clay, RDN CDN CYT
          <br />
          Updated on November 13, 2023
        </div>
      </div>
      {/* mobile social media icons */}
      <div className="flex md:hidden justify-center gap-2 mt-4 ">
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
      {/* mobile article section links */}
      <div className="md:hidden block mx-6 mt-10 text-base">
        <Link href="#Why-Nutrition-is-Important" className="inline-block">
          Why Nutrition is Important
        </Link>
        &nbsp;|&nbsp;
        <Link
          href="#What-are-the-Worst-Foods-for-Autoimmune-Disease"
          className="inline-block"
        >
          What are the Worst Foods for Autoimmune Disease?
        </Link>
        &nbsp;|&nbsp;
        <Link
          href="#Does-the-Anti-Inflammatory-Diet-Work"
          className="inline-block"
        >
          Does the Anti-Inflammatory Diet Work?
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Does-the-AIP-Diet-Work" className="inline-block">
          Does the AIP Diet Work?
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Dangers-of-Dieting" className="inline-block">
          Dangers of Dieting
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Safer-Alternative-to-Dieting" className="inline-block">
          Safer Alternative to Dieting
        </Link>
        &nbsp;|&nbsp;
        <Link href="#Bottom-Line" className="inline-block">
          Bottom Line
        </Link>
      </div>

      {/* content section - desktop & mobile*/}
      {/* desktop break into two columns */}
      <div className="flex md:columns-2">
        {/* first of two columns */}
        <div className="md:w-[66%] columns-1">
          {/* article image - desktop & mobile */}
          <div className="w-full flex justify-center p-4">
            <Image
              className="flex w-[80%] mt-4 "
              style={{ boxShadow: "10px 10px 15px #99CED3" }}
              src={placeholder_image}
              alt="placeholder image"
            />
          </div>
          {/* article contents - desktop & mobile*/}

          <div className="grid px-8">
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="Why-Nutrition-is-Important"
            >
              Why Nutrition is Important
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="What-are-the-Worst-Foods-for-Autoimmune-Disease"
            >
              What are the Worst Foods for Autoimmune Disease?
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>

            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="Does-the-Anti-Inflammatory-Diet-Work"
            >
              Does the Anti-Inflammatory Diet Work?
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="Does-the-AIP-Diet-Work"
            >
              Does the AIP Diet Work?
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="Dangers-of-Dieting"
            >
              Dangers of Dieting
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>
            {/* desktop - prompt to join email list */}
            <div className="hidden md:block bg-turquoise h-48  mb-4 mt-8 -ml-8">
              <h1 className="text-lg text-center pt-20">
                Prompt to join email list
              </h1>
            </div>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="Safer-Alternative-to-Dieting"
            >
              Safer Alternative to Dieting
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
              id="Bottom-Line"
            >
              Bottom Line
            </p>
            <p className="text-sm mx-6 ">paragraph text</p>
            {/* mobile - is this article helpful, vote up */}
            <div className="grid place-items-center py-24 md:hidden">
              <p className="text-xl">Is this article helpful?</p>
              <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
                <div class="arrow-container-two">
                  <span class="up-arrow-two"></span>
                  <p className="mx-3">vote up</p>
                  <span class="up-arrow-two"></span>
                </div>
              </button>
            </div>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
            >
              Section 3
            </p>
            <p className="text-sm mx-6 ">
              Faucibus purus in massa tempor nec feugiat nisl pretium fusce.
              Posuere urna nec tincidunt praesent semper. Sed id semper risus in
              hendrerit. Tellus id interdum velit laoreet id donec ultrices
              tincidunt. Nisi vitae suscipit tellus mauris a diam. Eget aliquet
              nibh praesent tristique magna sit amet. Sapien pellentesque
              habitant morbi tristique senectus et netus. Eget magna fermentum
              iaculis eu non.
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
              <div className="ml-4 text-sm ">
                By Caylee Clay, RDN CDN CYT
                <br />
                Updated on November 1, 2023
              </div>
            </div>
            {/* desktop social media icons */}
            <div className="flex justify-center gap-2 mt-4 ">
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
          </div>
          {/* desktop is this article helpful */}
          <div className="place-content-center">
            <div className="grid place-items-center">
              <p className="text-xl">Is this article helpful?</p>
              <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
                <div class="arrow-container-two">
                  <span class="up-arrow-two"></span>
                  <p className="mx-3">vote up</p>
                  <span class="up-arrow-two"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* prompt to join email list - desktop & mobile */}
      <div className="bg-turquoise h-48 md:w-4/5 mb-4 block mt-8 ">
        <h1 className="text-lg text-center pt-20">Prompt to join email list</h1>
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
            Caylee Clay, RDN CDN CYT (they/them) is a dietitian-nutritionist,
            scientist, researcher, author, software engineer, & autoimmune
            disease expert. Caylee is the author of{" "}
            <Link
              href="https://www.amazon.com/gp/product/173515041X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=173515041X&linkCode=as2&tag=eatyerveggies-20&linkId=7933144f7c8eea01d9847a2da039b38f"
              target="_blank"
            >
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

export default Page;
