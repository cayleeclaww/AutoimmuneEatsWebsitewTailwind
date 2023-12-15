import article from "../../../../../content/TemplateArticle.json";
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
