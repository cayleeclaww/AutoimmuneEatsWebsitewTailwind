import ArticleComponent from "../../../../../components/ArticleTemplate";
import article from "../../../../../content/WhatCausesAutoimmuneDiseaseandHowtoCureitNaturally.json";
// Did You Know? articles - *add later
// Related Articles - *add later

export const metadata = article.metadata;

export default function NutAndSuppsPage() {
  // const relatedArticles = [relatedArticleOne, relatedArticleTwo, relatedArticleThree];
  // const didYouKnowArticles = [didYouKnowArticleOne, didYouKnowArticleTwo, didYouKnowArticleThree];

  return (
    <>
      <ArticleComponent article={article} />
    </>
  );
}
