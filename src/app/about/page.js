import EmailPrompt from "../../../components/EmailPrompt";
import Image from "next/image";
import founderPic from "public/Caylee_Clay_photo.jpg";
import SectionTitleTurquoiseShadow from "../../../components/SectionTitleTurquoiseShadow";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="w-2/3 mx-auto my-24">
        <h1 className="text-center my-4">
          <SectionTitleTurquoiseShadow>
            About Autoimmune Eats
          </SectionTitleTurquoiseShadow>
        </h1>
        <p>
          Autoimmune Eats is here to provide revolutionary care for the
          autoimmune community.
        </p>
        <p>
          <br></br> People living with autoimmune disease face a wide set of
          physical, mental, emotional, & spiritual issues that are entirely
          unaddressed by the “modern” treatment of autoimmune disease.
        </p>
        <p>
          <br></br> We are here so you feel seen. We are here so you feel heard.
          We are here to provide resources that will birth a better future for
          people like us.
        </p>
        <p>
          <br></br>Both contemporary Western sciences & ancient Indigenous
          sciences are our guiding lights. While natural remedies are the main
          focus, we acknowledge that over-the-counter & prescription medications
          can also be essential to managing our diseases.
        </p>
        <p className="pb-12 border-b-4 border-black-500">
          <br></br>
          We want you to feel better. We want you to empower you with knowledge,
          so that you can live in less pain without sacrificing quality of life.
          Ultimately, our main goal is to help those with autoimmune disease
          suffer less & live better.
        </p>
        <h2 className="text-center -mt-10 mb-4">
          <SectionTitleTurquoiseShadow>
            Our Approach
          </SectionTitleTurquoiseShadow>
        </h2>
        <p>
          This is a space that is free of both dieting & fatphobia. Restrictive
          diets & fat shaming are harmful, not helpful, to those suffering from
          autoimmune disease. We now have the science & resources to offer
          solutions that actually work, instead of these outdated & unfounded
          methods. It's time to retire these prejudiced damaging ideas.
        </p>
        <br></br>
        <ul>
          Instead, we believe in:
          <li>
            Creating & maintaining a healthy, safe relationship with food & our
            bodies
          </li>
          <li>Healing the gut by fostering a healthy microbiome</li>
          <li>Supporting the body's natural detoxification pathways</li>
          <li>Safely identifying & living with food sensitivities</li>
          <li>
            Being able to enjoy our favorite foods while still openly
            acknowledging that the American food system is broken &, at times,
            downright poisonous.
          </li>
        </ul>
        <br></br>
        <p>
          Additionally, we recognize that neurodivergent & genderqueer people
          are more likely to experience autoimmune disease. Our goal is to
          create awareness of this connection, so that these communities can
          receive more appropriate healthcare.
        </p>
        <p className="pb-12 border-b-4 border-black-500">
          <br></br> Finally, we firmly believe that the constantly increasing
          rates of autoimmune disease are heavily related to the destruction of
          our planet. Incidence of autoimmune disease directly corresponds to
          pollution levels in our waterways, air, & food system. Our stance is
          that a healthier planet will support healthier humans. (It just seems
          obvious, doesn't it?)
        </p>
        {/* Meet the Founder section */}
        <div
          className="grid md:grid-cols-[33%_66%] gap-4 py-20 border-b-4 border-black-500"
          id="meet-the-founder"
        >
          <div className="my-6 mx-auto">
            <Image src={founderPic} width={300} height={300}></Image>
          </div>
          <div className="">
            <h2
              className="text-4xl -mt-6 text-center md:text-left"
              style={{ textShadow: "2px 2px 2px #99CED3" }}
            >
              meet the founder
            </h2>
            <h3 className="text-xl mb-4 text-center md:text-left">
              Caylee Clay, RDN CDN CYT
            </h3>
            <p className="text-base">
              Hi there! My name is Caylee Clay (they/them), & I have been
              practicing nutrition for over 10 years. I received a Bachelor of
              Science in Nutrition & Food Studies at New York University, during
              which I completed an independent study with public health advocate{" "}
              <Link href="https://www.foodpolitics.com/" target="_blank">
                Dr. Marion Nestle
              </Link>
              . Next, I attended the Dietetic Internship at Hunter College's
              School of Urban Public Health. After becoming a Registered
              Dietitian-Nutritionist (RDN) & a New York State Certified
              Dietitian-Nutritionist (CDN), I also completed a Certified Yoga
              Teacher (CYT) program. I am the author of{" "}
              <Link
                href="https://bookshop.org/a/102444/9781735150413"
                target="_blank"
              >
                Gain Control Over Your Psoriasis
              </Link>
              .
              <br />
              <br />
              Beyond titles & degrees, I lived with autoimmune disease for over
              half my life. Nutrition has been the greatest gift in my
              autoimmune journey, providing me with so much healing & comfort.
              My life's mission is to share this evidence-based information with
              my autoimmune community. My personal story is outlined at length
              in{" "}
              <Link
                href="https://bookshop.org/a/102444/9781735150413"
                target="_blank"
              >
                my book
              </Link>
              .
              <br />
              <br />
              As much as I love nutrition, I also am passionate about software
              engineering. I built this website myself, including designing the
              UI/UX & programming the site from scratch. I began by researching
              & studying similar style websites, then drafted an initial design.
              Next, I wireframed my design in Figma, which allowed for fast
              browser-based prototyping. After ensuring cohesion among the UI/UX
              design elements, development began. I programmed this fully
              responsive design with React in NextJS, utilizing the Tailwind CSS
              framework to expedite the process. By deploying client-side
              rendering, top site speeds are attained by pre-fetching data,
              image optimizing, keeping state for static components even after
              navigating away, & more. Deploying on Vercel's cloud platform
              enables a flawless CI/CD pipeline, allowing for quick & seamless
              updates.
            </p>
          </div>
        </div>

        <h2 className="text-center -mt-10 mb-4" id="contact">
          <SectionTitleTurquoiseShadow>contact</SectionTitleTurquoiseShadow>
        </h2>
        <p className="text-center">
          Email:
          <br />
          eatyerveg [at] gmail.com
          <br />
          <br />
          Phone:
          <br />
          201 701 1355
        </p>
      </div>
      <EmailPrompt />
    </>
  );
}
