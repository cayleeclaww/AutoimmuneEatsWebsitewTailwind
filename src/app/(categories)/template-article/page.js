import article from "../../../../content/TemplateArticle.json";
import ArticleComponent from "../../../../components/ArticleComponent";
import Cards from "../../../../components/CardsComponent";
// import articleOne from "../../../content/TemplateArticle.json";
import articleTwo from "../../../../content/ArticleTest.json";
import articleThree from "../../../../content/AutoimmuneNutrition.json";
import CardTitle from "../../../../components/CardTitleComponent";

// ****** NOTES FOR LATER: build "Did You Know" "Related Articles" in ArticleComponent
// ****** NOTES FOR LATER: build out footer component AND THEN add to layout.js
// ****** NOTES FOR LATER: In JSONs - add optional photo subproperty into each section, run code to display if present
// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle
// ****** NOTES FOR LATER: troubleshoot how to use object property as URL/path for photos........
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed - perhaps first/left arrow disappears,
// and instead appears a circle with the # of upvotes in it

export const metadata = article.metadata;

const Page = () => {
  const symptomsArticles = [article, articleTwo, articleThree];

  return (
    <>
      <ArticleComponent article={article} />
      <CardTitle>related articles</CardTitle>
      <Cards allArticles={symptomsArticles}></Cards>
      <CardTitle>did you know?</CardTitle>
      <Cards allArticles={symptomsArticles}></Cards>
      <div className="w-full mt-24 bg-gray-300 h-64 place-items-center">
        <p className="text-center p-24">footer</p>
      </div>
    </>
  );
};

export default Page;
