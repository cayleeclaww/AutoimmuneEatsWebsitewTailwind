import ArticleComponent from "../../../../../components/ArticleComponent";
import article from "../../../../../content/WhatCausesAutoimmuneDiseaseandHowtoCureitNaturally.json";

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
