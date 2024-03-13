import book from "../public/Gain_Control_Over_Your_Psoriasis_book.jpeg";
import Link from "next/link";
import Image from "next/image";

const BookBuyNow = () => {
  return (
    <>
      {/* desktop responsiveness */}
      <div className="w-full flex justify-center py-16 items-center">
        <div className="hidden md:grid m-6 border-solid border-2 border-grey h-fit max-h-90 max-w-md items-center mt-14 bg-white">
          <p className="text-3xl py-4 px-2 text-bold text-center">
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
          <Link href="https://amzn.to/3xSaKFJ" target="_blank">
            <button className="text-l p-2 m-3 bg-turquoise uppercase rounded-md justify-center w-[95%] text-black hover:font-bold">
              buy here
            </button>
          </Link>
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
        <Link href="https://amzn.to/3xSaKFJ" target="_blank">
          <button className="text-l p-2 m-3 w-60 bg-turquoise uppercase rounded-md justify-center text-black hover:font-bold">
            buy here
          </button>
        </Link>
        <p className="text-sm italic text-center mx-3 mb-3 text-gray-400">
          These are affiliate links, which keep this informational website free
          of charge. Bookshop.org supports our work the most.
        </p>
      </div>
    </>
  );
};

export default BookBuyNow;
