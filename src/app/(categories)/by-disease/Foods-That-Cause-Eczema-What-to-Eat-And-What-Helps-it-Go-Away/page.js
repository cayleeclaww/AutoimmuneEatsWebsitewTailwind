import ArticleComponent from "../../../../../components/ArticleComponent";
import article from "../../../../../content/FoodsThatCauseEczema.json";

export const metadata = article.metadata;

export default function ByDiseasePage() {
  // const relatedArticles = [relatedArticleOne, relatedArticleTwo, relatedArticleThree];
  // const didYouKnowArticles = [didYouKnowArticleOne, didYouKnowArticleTwo, didYouKnowArticleThree];

  return (
    <>
      <ArticleComponent article={article} />
    </>
  );
}
