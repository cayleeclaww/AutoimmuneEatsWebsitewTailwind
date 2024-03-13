import book from "../public/Gain_Control_Over_Your_Psoriasis_book.jpeg";
import Link from "next/link";
import Image from "next/image";

const BookBuyNow = () => {
  return (
    <>
      {/* desktop responsiveness */}
      <div className="w-full flex justify-center py-16 items-center">
        <div className="hidden md:grid m-6 border-solid border-2 border-grey h-fit max-h-90 max-w-md items-center mt-14 bg-white">
          <p className="text-3xl py-6 px-4 text-bold text-center">
            Gain Control Over Your Psoriasis
          </p>
          <p className="text-l px-4 pb-4">
            Stop living in pain & start self-healing by harnessing the power of
            the latest psoriasis science & research.
          </p>
          <p className="text-l px-4 pb-4">
            Make peace with your body by learning your psoriasis triggers, not
            by attempting to follow some unproven highly restrictive psoriasis
            diet.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="https://bookshop.org/a/102444/9781735150413"
              target="_blank"
              className="flex justify-center items-center text-center text-l p-2 my-4 ml-6 bg-turquoise uppercase rounded-md text-black hover:font-bold"
            >
              buy on Bookshop.org
            </Link>
            <Link
              href="https://amzn.to/3xSaKFJ"
              target="_blank"
              className="flex justify-center items-center text-center text-l p-2 my-4 mr-6 bg-turquoise uppercase rounded-md text-black hover:font-bold"
            >
              buy on Amazon
            </Link>
          </div>
          <p className="text-sm italic text-center mx-3 mb-3 text-gray-400">
            These are affiliate links, which keep this informational website
            free of charge. Bookshop.org supports our work the most.
          </p>
        </div>
        <Image
          className="hidden md:flex visible w-[50%] h-[50%] z-1 "
          src={book}
          alt="Display of the book, tablet, and ebook covers for Gain Control Over Your Psoriasis"
        />
      </div>

      {/* mobile responsiveness */}
      <div className="md:hidden grid p-4 bg-white">
        <Image
          className="ps-10"
          src={book}
          alt="Display of the book, tablet, and ebook covers for Gain Control Over Your Psoriasis"
        />
      </div>
      <div className="md:hidden flex flex-col items-center px-4 bg-white">
        <p className="text-3xl px-4 pt-6 text-bold text-center">
          Gain Control Over Your Psoriasis
        </p>
        <p className="text-l px-4 p-2 text-center">
          Stop living in pain & start self-healing by harnessing the power of
          the latest psoriasis science & research.{" "}
        </p>
        <p className="text-l px-4 p-2 text-center">
          Make peace with your body by learning your psoriasis triggers, not by
          attempting to follow some unproven highly restrictive psoriasis diet.
        </p>
        <div className="grid grid-cols-2 gap-3 w-full">
          <Link
            href="https://bookshop.org/a/102444/9781735150413"
            target="_blank"
            className="flex justify-center items-center text-center px-auto text-l p-2 my-4 ml-6 bg-turquoise uppercase rounded-md text-black hover:font-bold"
          >
            buy on Bookshop.org
          </Link>
          <Link
            href="https://amzn.to/3xSaKFJ"
            target="_blank"
            className="flex justify-center items-center text-center px-auto text-l p-2 my-4 mr-6 bg-turquoise uppercase rounded-md text-black hover:font-bold"
          >
            buy on Amazon
          </Link>
        </div>
        <p className="text-sm italic text-center mx-3 mb-3 text-gray-400">
          These are affiliate links, which keep this informational website free
          of charge. Bookshop.org supports our work the most.
        </p>
      </div>
    </>
  );
};

export default BookBuyNow;
