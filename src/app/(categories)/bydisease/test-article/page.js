import { BsLink45Deg } from "react-icons/bs";
import { BiSolidPrinter, BiLogoPinterestAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import headshot from "../../../../../public/Caylee_headshot.jpeg";
import Image from "next/image";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import placeholder_image from "../../../../../public/placeholder_article_photo.jpg";
import FourCardSpread from "../../../../../components/FourCardSpread";

// ******BREADCRUMBS:::: create 2 colums for desktop view, where author photo/name + article date/etc
//goes into second column, article content goes in first column.
// revert to 1 column for web view


const Page = () => {
  return (
    <>
      {/* turquoise article title rectangle - COMPLETE: is mobile friendly! */}
      <div className="bg-turquoise h-48 md:w-4/5 mb-4 block">
        <h1 className="text-3xl text-center pt-20">Article Title</h1>
      </div>
      {/* desktop article section links - COMPLETE: is mobile friendly! */}
      <div className="hidden md:flex ml-6 text-base">
        Article Section 1 | Article Section 2 | Article Section 3
      </div>
      {/* vote up button - COMPLETE: is mobile friendly! */}
      <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
        {/* ** OLD BUTTOM ARROWS - FIRST ATTEMPT */}
        {/* <button className="text-lg p-2 m-2 bg-turquoise rounded-md w-40 grid">
          {/* <FaArrowUp size={15} className="ml-4 -mb-8 mt-1" /> */}

        {/* <FaArrowUp size={15} className="ml-28 -mt-5" /> */}
        {/* <p class="arrow-container">
            <span class="arrow up-arrow"></span> vote up
          </p>
        </button>  */}

        <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
          <div class="arrow-container-two">
            <span class="up-arrow-two"></span>
            <p className="mx-3">vote up</p>
            <span class="up-arrow-two"></span>
          </div>
        </button>
      </div>
      {/* mobile section */}
      {/* mobile author name & article date section - COMPLETE: is mobile friendly! */}
      <div className="flex md:hidden">
        <Image
          alt="Caylee Clay's Author Headshot"
          src={headshot}
          className="w-20 h-20 rounded-full ml-10"
        />
        <div className="ml-4 mt-4 text-lg">
          By Caylee Clay, RDN CDN CYT
          <br />
          Updated on November 1, 2023
        </div>
      </div>
      {/* mobile social media icons - COMPLETE: is mobile friendly! */}
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
      {/* mobile article section links - COMPLETE: is mobile friendly! */}
      <div className="md:hidden ml-6 mt-10 text-base">
        Article Section 1 | Article Section 2 | Article Section 3
      </div>

      {/* content section */}
      {/* break into two columns */}
      <div className="flex md:columns-2">
        {/* first of two columns */}
        <div className="md:w-[66%] columns-1">
          {/* article contents */}
          {/* article image - COMPLETE: is mobile friendly! */}
          <div className="w-full flex justify-center p-4">
            <Image
              className="flex w-[80%] mt-4 "
              style={{ boxShadow: "10px 10px 15px #99CED3" }}
              src={placeholder_image}
            />
          </div>
          <div className="grid">
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
            >
              Overview
            </p>
            <p className="text-sm mx-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus purus in massa tempor nec feugiat nisl. Dolor sit amet
              consectetur adipiscing elit. Cursus vitae congue mauris rhoncus
              aenean. Tincidunt ornare massa eget egestas purus viverra accumsan
              in. Ultrices tincidunt arcu non sodales neque sodales ut etiam
              sit. Non sodales neque sodales ut etiam sit amet nisl purus. Quis
              eleifend quam adipiscing vitae proin sagittis. Consectetur a erat
              nam at lectus urna duis convallis. Sodales ut etiam sit amet nisl
              purus. Justo nec ultrices dui sapien eget mi proin sed. Arcu
              cursus euismod quis viverra nibh. Rhoncus est pellentesque elit
              ullamcorper dignissim. Dui ut ornare lectus sit. Tincidunt dui ut
              ornare lectus sit. Aliquam sem et tortor consequat id porta. Nisl
              tincidunt eget nullam non. Donec et odio pellentesque diam
              volutpat commodo sed egestas egestas. Parturient montes nascetur
              ridiculus mus mauris vitae ultricies.
            </p>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
            >
              Section 1
            </p>
            <p className="text-sm mx-6 ">
              Duis convallis convallis tellus id. A pellentesque sit amet
              porttitor eget dolor morbi. Habitant morbi tristique senectus et
              netus et malesuada fames. Non quam lacus suspendisse faucibus. Et
              odio pellentesque diam volutpat. Dui id ornare arcu odio ut sem
              nulla. Tristique senectus et netus et malesuada fames. Aenean vel
              elit scelerisque mauris pellentesque. Amet massa vitae tortor
              condimentum lacinia quis vel eros. Sed faucibus turpis in eu. Duis
              at tellus at urna. Tortor condimentum lacinia quis vel eros. Dui
              id ornare arcu odio ut sem nulla. Penatibus et magnis dis
              parturient montes nascetur ridiculus mus mauris. Et leo duis ut
              diam quam nulla porttitor massa. Montes nascetur ridiculus mus
              mauris vitae ultricies leo integer. Morbi tristique senectus et
              netus et malesuada fames.
            </p>
            <p
              className="text-lg ml-6 mt-8 mb-2"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
            >
              Section 2
            </p>
            <p className="text-sm mx-6 ">
              Scelerisque purus semper eget duis at tellus at urna. Arcu odio ut
              sem nulla pharetra diam sit amet nisl. Sapien nec sagittis aliquam
              malesuada bibendum. Lacus vestibulum sed arcu non odio euismod
              lacinia. Et tortor at risus viverra. Tristique magna sit amet
              purus gravida quis blandit. Sit amet mattis vulputate enim nulla.
              Viverra vitae congue eu consequat ac felis. Cursus metus aliquam
              eleifend mi in nulla. Nisl tincidunt eget nullam non nisi est sit.
              Nulla at volutpat diam ut venenatis tellus. Sed id semper risus in
              hendrerit gravida rutrum. Aenean pharetra magna ac placerat. Est
              velit egestas dui id ornare arcu odio ut sem. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Enim nulla aliquet
              porttitor lacus luctus accumsan tortor. Egestas diam in arcu
              cursus. Volutpat odio facilisis mauris sit.
            </p>

            {/* is this article helpful? */}
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

            {/* prompt to join email list */}
            <div className="hidden md:block bg-turquoise h-48 w-full mb-4 mt-8 ">
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
          {/* desktop author name & article date section - COMPLETE! */}
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
            {/* desktop social media icons - COMPLETE! */}
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
          {/* is this article helpful? */}
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
      {/* prompt to join email list */}
      <div className="bg-turquoise h-48 md:w-4/5 mb-4 block mt-8 ">
        <h1 className="text-lg text-center pt-20">Prompt to join email list</h1>
      </div>
      {/* is this article helpful? */}
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
      {/* author bio section */}
      <div className="grid mx-6 mt-8 ">
        <div className="text-lg mb-2">About the author:</div>
        <div className="flex ">
          <Image
            alt="Caylee Clay's Author Headshot"
            src={headshot}
            className="w-20 h-20 rounded-full "
          />
          <div className="ml-4 mt-4 text-base">
            Caylee Clay, RDN CDN CYT is a dietitian-nutritionist, scientist and
            researcher, author, software engineer, and autoimmune disease
            expert. Caylee is the author of **ADD LINK*** Gain Control Over Your
            Psoriasis **ADD LINK***. Outside of work, Caylee loves gardening,
            hiking, cooking, and biking all over NYC.
          </div>
        </div>
      </div>
      {/* related articles */}
      <div className="w-full mt-24">
        <p
          className="text-4xl pl-6 pb-2"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          related articles
        </p>
        <FourCardSpread />
      </div>
      {/* did you know? articles */}
      <div className="w-full mt-24">
        <p
          className="text-4xl pl-6 pb-2"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          did you know?
        </p>
        <FourCardSpread />
      </div>
      {/* footer  */}
      <div className="w-full mt-24 bg-gray-300 h-64 place-items-center">
        <p className="text-center p-24">footer</p>
      </div>
    </>
  );
};

export default Page;
