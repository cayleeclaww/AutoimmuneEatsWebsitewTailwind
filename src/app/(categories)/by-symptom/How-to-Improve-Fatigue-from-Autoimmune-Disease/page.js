import ArticleComponent from "../../../../../components/ArticleComponent";
import article from "../../../../../content/HowtoImproveFatigue.json";

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
