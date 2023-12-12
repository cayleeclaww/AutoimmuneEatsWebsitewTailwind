import article from "../../../../content/TemplateArticle.json";
import ArticleComponent from "../../../../components/ArticleComponent";

// ****** NOTES FOR LATER: In JSONs - add each new paragraph into a new object subproperty so can add <p> breaks. 
// ****** NOTES FOR LATER: In JSONs - add optional photo subproperty into each section, run code to display if present 
// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle
// ****** NOTES FOR LATER: troubleshoot how to use object property as URL/path for photos........
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed - perhaps first/left arrow disappears,
// and instead appears a circle with the # of upvotes in it

export const metadata = article.metadata;

const Page = () => {
  return (
    <>
      <ArticleComponent article={article} />
    </>
  );
};

export default Page;