import TitleRectangleTurquoise from "../../../../components/TitleRectangleTurquoise";
import CardTitle from "../../../../components/CardTitleComponent";
import BookBuyNow from "../../../../components/BookBuyNow";
import EmailPrompt from "../../../../components/EmailPrompt";

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
      <div id="autoimmune-nutrition-starters-guide">
        <CardTitle>Autoimmune Nutrition Starters' Guide</CardTitle>
      </div>
      <div id="guided-meditation">
        <CardTitle>Guided Meditation for Eating</CardTitle>
      </div>
      <EmailPrompt/>
      <div id="candida-screening-form">
        <CardTitle>Candida Screening Form</CardTitle>
      </div>
      <div id="dinner-meal-planner">
        <CardTitle>Dinner Meal Planner</CardTitle>
      </div>

      <div id="track-psoriasis-severity">
        <CardTitle>Track Psoriasis Severity</CardTitle>
      </div>
      {/* <CardTitle>Top Supplements</CardTitle> */}
      {/* prompt to join email list */}
      <EmailPrompt/>
    </>
  );
}
