import { FaArrowUp } from "react-icons/fa";
import headshot from '../../../../../public/Caylee_headshot.jpeg';
import Image from "next/image";


// ******BREADCRUMBS:::: create 2 colums for desktop view, where author photo/name + article date/etc 
//goes into second column, article content goes in first column. 
// revert to 1 column for web view 




const Page = () => {
  return (
    <>
      <div className="bg-turquoise h-48 md:w-4/5 mb-4 block">
        <h1 className="text-3xl text-center pt-20">Article Title</h1>
      </div>
      <div className="hidden md:flex ml-6 text-l">
        Article Section 1 | Article Section 2 | Article Section 3
      </div>
      <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
        <button className="text-l p-2 m-2 bg-turquoise rounded-md w-40 grid">
          <FaArrowUp size={15} className="ml-4 -mb-8 mt-1" /> vote up{" "}
          <FaArrowUp size={15} className="ml-28 -mt-5" />
        </button>
      </div>
      <Image
        alt="Caylee Clay's Author Headshot"
        src={headshot}
        className="w-24 h-24 rounded-full ml-10"
      />
    </>
  );
};

export default Page;
