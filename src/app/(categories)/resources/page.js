import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import CardTitle from "../../../../components/SectionTitleTurquoiseShadow";
import BookBuyNow from "../../../../components/BookBuyNow";
import EmailPrompt from "../../../../components/EmailPrompt";
import ResourceItem from "../../../../components/ResourceItem";

// ** FOR LATER: create a carousel component to display supplements - uncomment related lines at bottom of this code & in navbar component

export default function ResourcesPage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Resources</p>
      </TitleRectangleTurquoise>
      <div id="book">
        <CardTitle>Gain Control Over Your Psoriasis</CardTitle>
        <BookBuyNow />
      </div>
      {/* Autoimmune Nutrition Starters' Guide */}
      <div id="autoimmune-nutrition-starters-guide">
        <CardTitle>Autoimmune Nutrition Starters' Guide</CardTitle>
        <ResourceItem
          url="https://mailchi.mp/dff1a9ca7a62/autoimmune-nutrition-starters-guide"
          src="/Email_Signup_Thumbnail_Autoimmune_Nutrition_Starters_Guide.png"
          alt="Thumbnail image for the Autoimmune Nutrition Starters' Guide"
          subtitle="FREE! Autoimmune Nutrition Starters Guide (PDF)"
          description="Are you interested in reducing your autoimmune symptoms using nutrition? You\'re in the right place! Use these 7 basic steps to promote healing."
        />
      </div>
      {/* Guided Meditation */}
      <div id="guided-meditation">
        <CardTitle>10 Minute Guided Meditation for Eating</CardTitle>
        <ResourceItem
          url="https://mailchi.mp/4229b97caf89/guidedmeditation"
          src="/Email_Signup_Thumbnail_10_Minute_Guided_Meditation.png"
          alt="Thumbnail image for 10 Minute Guided Meditation for Eating"
          subtitle="FREE! 10 Minute Guided Meditation for Eating: Using the Five Senses (Video)"
          description="A whole host of health benefits can cascade from being more mindful when we eat. However, it's not always easy to eat without being distracted. This meditation will help you slow down & relax into eating."
        />
      </div>
      <EmailPrompt />
      {/* Candida screening form */}
      <div id="candida-screening-form">
        <CardTitle>Candida Screening Form</CardTitle>
        <ResourceItem
          url="https://mailchi.mp/27c76ba54c78/candidascreen"
          src="/Email_Signup_Thumbnail_Candida_Screening_Form.png"
          alt="Thumbnail image for Candida Screening Form"
          subtitle="FREE! Candida Screening Form (PDF)"
          description="Candida yeast infections are commonly seen in people suffering from autoimmune diseases. Use this form to get a better idea if your health problems are related to Candida albicans or not."
        />
      </div>
      {/* better than a meal plan */}
      <div id="better-than-a-meal-plan">
        <CardTitle>Better than a Meal Plan</CardTitle>
        <ResourceItem
          url="https://mailchi.mp/fd4406528fee/betterthanamealplan"
          src="/Email_Signup_Thumbnail_Better_Than_a_Meal_Plan.jpg"
          alt="Thumbnail image for the Better than a Meal Plan"
          subtitle="FREE! Better than a Meal Plan (PDF)"
          description="Get organized with healthy meals you actually like eating, instead of trying to follow some rigid meal plan made by someone else! Use this template to organize your dinners for the next week. Refill & reuse the template week after week to easily organize your meals."
        />
      </div>
      {/* track psoriasis severity with PASI */}
      <div id="track-psoriasis-severity">
        <CardTitle>Track Psoriasis Severity</CardTitle>
        <ResourceItem
          url="https://mailchi.mp/ea121f177b09/pasi"
          src="/Email_Signup_Thumbnail_Track_Your_Psoriasis_Severity.png"
          alt="Thumbnail image for Track Psoriasis Severity handout"
          subtitle="FREE! Track Your Psoriasis Severity (PDF)"
          description="Use this handout to keep track of the severity of your psoriasis over time. This will help you to measure your healing & improvement, so you can better understand which healthy changes are helping your psoriasis the most."
        />
      </div>
      {/* future top supplements section */}
      {/* <CardTitle>Top Supplements</CardTitle> */}
      <EmailPrompt />
    </>
  );
}
