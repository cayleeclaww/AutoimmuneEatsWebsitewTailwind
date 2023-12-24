import article from "../../../../../content/IsItAutoimmuneChecklist.json";
import ArticleComponent from "../../../../../components/ArticleComponent";

export const metadata = article.metadata;

export default function BySymptomPage() {
  // const relatedArticles = [relatedArticleOne, relatedArticleTwo, relatedArticleThree];
  // const didYouKnowArticles = [didYouKnowArticleOne, didYouKnowArticleTwo, didYouKnowArticleThree];

  return (
    <>
      <ArticleComponent article={article} />
    </>
  );
}

