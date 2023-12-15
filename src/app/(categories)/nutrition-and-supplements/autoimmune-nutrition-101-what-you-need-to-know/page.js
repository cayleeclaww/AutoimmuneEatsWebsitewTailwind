import article from "../../../../../content/AutoimmuneNutrition.json";
import ArticleComponent from "../../../../../components/ArticleComponent";

export const metadata = article.metadata;

const Page = () => {
  return (
    <>
      <ArticleComponent article={article} />
    </>
  );
};

export default Page;
