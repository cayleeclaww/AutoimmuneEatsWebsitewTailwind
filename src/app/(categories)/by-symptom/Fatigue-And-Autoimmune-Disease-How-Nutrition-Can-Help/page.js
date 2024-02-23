import ArticleComponent from "../../../../../components/ArticleComponent";
import article from "../../../../../content/FatigueAndAutoimmuneDisease.json";
// Did You Know? articles - *add later
// Related Articles - *add later

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
