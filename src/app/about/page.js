import EmailPrompt from "../../../components/EmailPrompt";

export default function AboutPage() {
  return (
    <>
      <div className="w-2/3 mx-auto my-24">
        <h1 className="text-3xl my-4">About Autoimmune Eats</h1>
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
        <p>
          <br></br>
          We want you to feel better. We want you to empower you with knowledge,
          so that you can live in less pain without sacrificing quality of life.
          Ultimately, our main goal is to help those with autoimmune disease
          suffer less & live better.
        </p>
        <h2 className="text-2xl mt-16 mb-4">Our Approach</h2>
        <p>
          This is a space that is free of both dieting & fatphobia. Restrictive
          diets & fat shaming are harmful, not helpful, to those suffering from
          autoimmune disease. We have the science & the resources to offer
          better options than these outdated & unfounded methods. It's time to
          retire these prejudiced, damaging ideas.
        </p>
        <br></br>
        <ul>
          Instead, we believe in:
          <li>
            Creating & maintaining a healthy, safe relationship with food & our
            bodies
          </li>
          <li>Healing the gut by fostering a healthy microbiome</li>
          <li>Supporting the body’s natural detoxification pathways</li>
          <li>Safely identifying & living with food sensitivities</li>
          <li>
            Being able to enjoy our favorite foods while still openly
            acknowledging that the American food system is broken &, at times,
            poisonous.
          </li>
        </ul>
        <br></br>
        <p>
          Additionally, we recognize that neurodivergent & genderqueer people
          are more likely to experience autoimmune disease. Our goal is to
          create awareness of this connection, so that these communities can
          receive more appropriate healthcare.
        </p>
        <p>
          <br></br> Finally, we firmly believe that the constantly increasing
          rates of autoimmune disease are heavily related to the destruction of
          our planet. Incidence of autoimmune disease directly corresponds to
          pollution levels in our waterways, air, & food system.
        </p>
        <p>
          <br></br> Our stance is that a healthier planet will support healthier
          humans. (It just seems obvious, doesn't it?)
        </p>
        <EmailPrompt/>
      </div>
    </>
  );
}
