import placeholder_image from "../public/placeholder_article_photo.jpg";
import Image from "next/image";
import articleOne from "../content/TemplateArticle.json";
import articleTwo from "../content/ArticleTest.json";
import articleThree from "../content/AutoimmuneNutrition.json";

export default function FourCardSpreadNEW(props) {
  const allArticles = [articleOne, articleTwo, articleThree];

  return (
    <>
      <div className="w-full mt-24">
        <div className="grid grid-cols-2 mx-4 md:grid-cols-4">
          {allArticles.map((card) => (
            <div className="grid auto-rows-min p-4" key={card.title}>
              <Image
                className="rounded-t-lg "
                alt={card.photoFeatureAlt}
                src={card.photoFeature}
                width={500}
                height={500}
                id={card.title}
              />
              <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl ">
                <p className="p-4 text-center text-xl">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
