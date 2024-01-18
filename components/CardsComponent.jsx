import Image from "next/image";
import Link from "next/link";

// NOTE FOR LATER: will want to change "<Link href={card.metadata.openGraph.url}" to a dynamically loaded URL in the future

const Cards = (props) => {
  const {allArticles} = props;

  return (
    <>
      <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {allArticles.map((card) => (
            <Link href={card.metadata.openGraph.url} key={card.metadata.title}>
              <div className="shadow-lg rounded-lg max-w-[400px] text-center">
                <Image
                  className="rounded-t-lg"
                  src={card.photoFeature}
                  alt={card.photoFeatureAlt}
                  width={400}
                  height={400}
                  id={card.title}
                />
                <div className="p-5">
                  <h3 className="text-xl text-slate-700 ">{card.title}</h3>
                  {/* <p className="text-lg font-normal text-gray-600 mb-3">{card.metadata.description}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

{
  /* <div className="py-24 flex items-center justify-center ">
        <div className="w-[24rem] shadow-lg rounded-lg hover:shadow-xl">
          <a href="/">
            <Image
              src={placeholder_image}
              className="w-full h-50 rounded-t-lg"
              alt="Card"
            />
            <div className="px-4 pt-4 pb-6">
              <h3 className="text-2xl font-bold my-3">Title</h3>
              <p className="text-lg mb-4">
                Perhaps article description from metatag
              </p>
            </div>
          </a>
        </div>
      </div> */
}

{
  /* <div className="group">
        <div className="relative grid w-full h-[100vw] sm:h-96 md:h-[40vw] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center">
          <div
            className="absolute inset-0 m-0 h-full  w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none"
            // style={{ backgroundImage: `url(${image})` }}
          >
            <div className="to-bg-black-10 absolute group-hover:top-0 transition-all duration-300 top-full h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12 top-full group-hover:top-0 transition-all duration-300 ">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5]   antialiased">
              "name"
            </h2>

            <Link
              href="instagramUrl"
              className="inline-block h-16 w-full rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
            >
              <div className="w-full h-full flex justify-around  items-center ">
                <h1 className="text-2xl text-white mr-5">"name"</h1>
              </div>
            </Link>
          </div>
        </div>
      </div> */
}
