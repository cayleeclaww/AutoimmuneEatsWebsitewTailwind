import book from "../public/Gain_Control_Over_Your_Psoriasis_book.jpeg";
import Link from "next/link";
import Image from "next/image";

const BookBuyNow = () => {
  return (
    <>
      {/* desktop responsiveness */}
      <div className="w-full flex justify-center py-16 items-center">
        <div className="hidden md:grid m-6 border-solid border-2 border-grey h-fit max-h-90 max-w-md items-center mt-14">
          <p className="text-2xl p-4 text-bold text-center">
            Gain Control Over Your Psoriasis
          </p>
          <p className="text-l px-4 pb-4">
            Stop living in pain & start self-healing by harnessing the power of
            the latest psoriasis science & research.
            <br /> <br />
            Make peace with your body by learning your psoriasis triggers, not
            by attempting to follow some unproven highly restrictive psoriasis
            diet.
          </p>
          <Link href="https://amzn.to/3xSaKFJ" target="_blank">
            <button className="text-l p-2 m-3 bg-turquoise uppercase rounded-md justify-center w-[95%] text-black hover:font-bold">
              buy here
            </button>
          </Link>
        </div>
        <Image
          className="hidden md:flex visible w-[50%] h-[50%] z-1 "
          src={book}
          alt="Display of the book, tablet, and ebook covers for Gain Control Over Your Psoriasis"
        />
      </div>
      {/* mobile responsiveness */}
      <div className="md:hidden grid p-4">
        <Image
          className="ps-10"
          src={book}
          alt="Display of the book, tablet, and ebook covers for Gain Control Over Your Psoriasis"
        />
      </div>
      <div className="md:hidden flex flex-col items-center mx-4">
        <p className="text-2xl px-4 pt-6 text-bold text-center">
          Gain Control Over Your Psoriasis
        </p>
        <p className="text-l px-4 p-2 text-center">
          Stop living in pain & start self-healing by harnessing the power of
          the latest psoriasis science & research. <br />
          <br />
          Make peace with your body by learning your psoriasis triggers, not by
          attempting to follow some unproven highly restrictive psoriasis diet.
        </p>
        <Link href="https://amzn.to/3xSaKFJ" target="_blank">
          <button className="text-l p-2 m-3 w-60 bg-turquoise uppercase rounded-md justify-center text-black hover:font-bold">
            buy here
          </button>
        </Link>
      </div>
    </>
  );
};

export default BookBuyNow;
