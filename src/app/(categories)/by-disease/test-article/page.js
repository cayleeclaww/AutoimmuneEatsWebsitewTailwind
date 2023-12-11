import article from "../../../../../content/AutoimmuneNutrition.json";
import TestArticleComponent from "../../../../../components/TestArticleComponent";

// ****** NOTES FOR LATER: Google an article/video on how to use the metadata object in NextJS, esp author and publication date tags
// ****** NOTES FOR LATER: figure out how I want the numbers of votes on each article to be displayed
// ****** NOTES FOR LATER: update prompt to join email with z-10 and other related code from turquoise article title rectangle

// export const metadata = {
//   title: "Test Article",
//   description:
//     "This is a test article generated to create a template layout for future articles",
//   keywords: ["First keyword", "second keyword", "third keyword"],
//   icons: {
//     icon: "/icon.png",
//   },
//   openGraph: {
//     title: "Test Article | Autoimmune Eats", //May need to delete "| Autoimmune Eats" from here later, since it's in the root layout metadata
//     description:
//       "This is a test article generated to create a template layout for future articles",
//     url: "http://autoimmuneeats.com/by-disease/test-article", // update
//     siteName: "Autoimmune Eats",
//     images: [
//       {
//         url: "http://autoimmuneeats.com/placeholder_article_photo.jpg", //update
//         width: 800,
//         height: 600,
//       },
//       // {
//       //   url: "https://nextjs.org/og-alt.png", //is necessary?
//       //   width: 1800,
//       //   height: 1600,
//       //   alt: "My custom alt",
//       // },
//     ],
//     locale: "en_US",
//     type: "article", //Could be "website" or "video" (LATER: set homepage to "website")
//     publishedTime: "2023-11-07",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       // noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

export const metadata = article.metadata;

const Page = () => {
  return (
    <>
      <TestArticleComponent article={article} />
    </>
  );
};

export default Page;
