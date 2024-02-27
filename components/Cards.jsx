import Image from "next/image";
import Link from "next/link";

// this component can be used for one or more cards - receives an array

const Cards = (props) => {
  const { allArticles } = props;

  return (
    <>
      <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* pulls URL, photo, alt, and title from JSON to create card, where the whole card is a link */}
          {allArticles.map((card) => (
            <Link href={card.metadata.openGraph.url} key={card.metadata.title}>
              <div className="shadow-lg rounded-lg max-w-[400px] text-center">
                <Image
                  className="rounded-t-lg bg-white"
                  src={card.photoFeature}
                  alt={card.photoFeatureAlt}
                  width={400}
                  height={400}
                  id={card.title}
                />
                <div className="p-5 bg-white rounded-b-lg ">
                  <h3 className="text-xl text-slate-700 ">{card.title}</h3>
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