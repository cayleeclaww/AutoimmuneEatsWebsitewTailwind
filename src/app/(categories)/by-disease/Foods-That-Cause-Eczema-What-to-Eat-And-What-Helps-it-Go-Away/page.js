import ArticleComponent from "../../../../../components/ArticleComponent";
import article from "../../../../../content/FoodsThatCauseEczema.json";
// Did You Know? articles - *add later
// Related Articles - *add later

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
