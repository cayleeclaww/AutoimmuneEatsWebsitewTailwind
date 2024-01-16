import Image from "next/image";
import Link from "next/link";

export default function FeaturePhoto(props) {
  const { featuredArticle } = props;

  return (
    <>
      <div className="w-full flex justify-center p-4 mt-12">
        {/* desktop image */}
        <Image
          className="hidden md:flex w-[50%] h-[50%]"
          style={{ boxShadow: "-10px 10px 15px #99CED3" }}
          src={featuredArticle.photoFeature}
          alt={featuredArticle.photoFeatureAlt}
          width={800}
          height={560}
        />
        {/* mobile image */}
        <Image
          className="w-full border-x-6 flex md:hidden"
          style={{ boxShadow: "10px 10px 15px #99CED3" }}
          src={featuredArticle.photoFeature}
          alt={featuredArticle.photoFeatureAlt}
          width={800}
          height={560}
        />

        {/* desktop responsiveness */}
        <div className="hidden md:grid w-1/3 h-1/2 mt-32 bg-white border-solid border-2 border-black-600 -ml-14 -mb-8">
          <div className="text-2xl p-5 text-bold ">{featuredArticle.title}</div>
          <p className="text-m px-5">{featuredArticle.metadata.description}</p>
          <Link href={featuredArticle.metadata.openGraph.url}>
            <button className="text-l p-2 m-5 bg-turquoise uppercase rounded-md w-40">
              read more
            </button>
          </Link>
        </div>
      </div>
      {/* mobile responsiveness  */}
      <div className="flex flex-col items-center md:hidden items-center mx-4 place-content-center pt-8">
        <p className="text-2xl px-4 text-bold text-center">
          {featuredArticle.title}
        </p>
        <p className="text-l p-4">{featuredArticle.metadata.description}</p>
        <Link href={featuredArticle.metadata.openGraph.url}>
          <button className="text-l p-2 m-5 bg-turquoise uppercase rounded-md w-40 ">
            read more
          </button>
        </Link>
      </div>
    </>
  );
}
