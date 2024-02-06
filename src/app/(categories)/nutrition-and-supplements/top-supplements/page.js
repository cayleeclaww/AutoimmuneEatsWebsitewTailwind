import TitleRectangleTurquoise from "../../../../../components/TitleRectangleTurquoise";
import FullscriptSupplement from "../../../../../components/FullscriptSupplement";
import TopSupplements from "../../../../../content/TopSupplements.json";

export default function TopSuppsPage() {
  return (
    <>
      {/* turquoise category title rectangle - desktop & mobile */}
      <TitleRectangleTurquoise>
        <p>Top Supplements</p>
      </TitleRectangleTurquoise>
      {/* banners to Fullscript dispensary */}
      <div className="flex justify-center ">
        {/* desktop */}
        <a
          className="pt-10 hidden md:flex justify"
          href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_728x90.svg&signup_source=website_buttons"
          target="_top"
        >
          <img
            src="https://assets.fullscript.com/buttons/light_728x90.svg"
            alt="Order supplements through my Fullscript store."
          />
        </a>
        {/* mobile banner */}
        <a
          className="md:hidden -mb-6"
          href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_200x200.svg&signup_source=website_buttons"
          target="_top"
        >
          <img
            src="https://assets.fullscript.com/buttons/light_200x200.svg"
            alt="Order supplements through my Fullscript store."
          />
        </a>
      </div>

      {/* all supplements */}
      <div className="grid md:w-1/2 mx-auto my-10 divide-y divide-solid bg-white">
        {TopSupplements.map((supp) => (
          <FullscriptSupplement key={supp.product_id} supplement={supp} />
        ))}
      </div>
      {/* banners to Fullscript dispensary */}
      <div className="flex justify-center">
        {/* desktop */}
        <a
          className="py-10 hidden md:flex justify"
          href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_728x90.svg&signup_source=website_buttons"
          target="_top"
        >
          <img
            src="https://assets.fullscript.com/buttons/light_728x90.svg"
            alt="Order supplements through my Fullscript store."
          />
        </a>
        {/* mobile banner */}
        <a
          className="md:hidden pb-20"
          href="https://us.fullscript.com/welcome/autoimmunenutrition?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_light_200x200.svg&signup_source=website_buttons"
          target="_top"
        >
          <img
            src="https://assets.fullscript.com/buttons/light_200x200.svg"
            alt="Order supplements through my Fullscript store."
          />
        </a>
      </div>
    </>
  );
}
