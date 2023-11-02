// 'use client'
// import Image from "next/image";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import main_image from "../../../public/main_image_front_page_autoimmune_eats.jpg";
import main_image_mobile from "../../../public/main_image_front_page_autoimmune_eats_HALF.jpg";
import placeholder_image from "../../../public/placeholder_article_photo.jpg";
import book from "../../../public/Gain_Control_Over_Your_Psoriasis_book.jpeg";
import FourCardSpread from "../../../components/FourCardSpread";

// **** NOTES FOR LATER: Add "alt" to all images

export default function Home() {
  return (
    <>
      {/* creates main image with overlayed text boxes - COMPLETE: is mobile friendly!  */}
      <div className="w-full flex justify-center">
        <Image
          className="hidden md:grid w-full z-1 min-w-[100%]"
          src={main_image}
        />
        <Image
          className="grid w-full z-1 min-w-[100%] md:hidden"
          src={main_image_mobile}
        />
        {/* text boxes for sm and larger screens */}
        <div className="hidden sm:grid absolute z-2 m-14 justify-center max-h-24 lg:pt-20">
          <div className="bg-white box-border px-10 pt-10 text-center opacity-80">
            <p className="text-6xl pb-4 ">
              <b>welcome</b>
              <br />
              to autoimmune eats
            </p>
            <p className="text-3xl px-10 pb-8 pt-0">
              Discover how to live with
              <br /> more peace & less pain.
            </p>
          </div>
          <div class="w-60 mx-auto">
            <button className="text-xl bg-white rounded-md box-border mt-6 p-4 text-center opacity-80 justify-center">
              join our mailing list
            </button>
          </div>
        </div>

        {/* text boxes for very small screens */}
        <div className="sm:hidden grid absolute m-14 z-2 place-self-center ">
          <div className="bg-white box-border px-2 pt-5 sm:pt-10 text-center opacity-80">
            <p className="text-2xl sm:text-6xl pb-4 ">
              <b>welcome</b>
              <br />
              to autoimmune eats
            </p>
            <p className="grid text-l px-5 pb-5">
              Discover how to live with more peace & less pain.
            </p>
          </div>
          <div class="w-full flex justify-center">
            <button className="w-40 text-l bg-white rounded-md box-border mt-6 p-2 sm:p-4 text-center opacity-80 ">
              join our mailing list
            </button>
          </div>
        </div>
      </div>

      {/* 4 boxes with main site features - COMPLETE: is mobile friendly! */}
      <div className="w-full grid grid-cols-2 md:flex my-6 sm:my-12">
        <div className="border-box p-5 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Free of dieting,</b>
            <br />
            fearing foods, & fat shaming
          </p>
        </div>
        <div className="border-box p-5 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Natural remedies</b>
            <br />
            prioritized, plus medication encouraged
          </p>
        </div>
        <div className="border-box p-5 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Supported by</b>
            <br />
            medical research & Indigenous knowledge
          </p>
        </div>
        <div className="border-box p-5 sm:p-10 text-center text-l sm:text-xl">
          <p>
            <b>Holistic</b>
            <br />
            approach to healing & symptom management
          </p>
        </div>
      </div>

      {/* featured article photo + description box - COMPLETE: is mobile friendly! */}
      <div className="w-full flex justify-center p-4">
        {/* desktop image */}
        <Image
          className="hidden md:flex w-[50%] h-[50%]"
          style={{ boxShadow: "-10px 10px 15px #99CED3" }}
          src={placeholder_image}
        />
        {/* mobile image */}
        <Image
          className="w-full mx-6 flex md:hidden"
          style={{ boxShadow: "10px 10px 15px #99CED3" }}
          src={placeholder_image}
        />

        {/* desktop responsiveness */}
        <div className="hidden md:grid w-1/3 h-1/2 mt-32 bg-white border-solid border-2 border-black-600 -ml-14 -mb-8">
          <div className="text-2xl p-5 text-bold ">Article title </div>
          <p className="text-m px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <button className="text-l p-2 m-5 bg-turquoise uppercase rounded-md w-40">
            read more
          </button>
        </div>
      </div>

      {/* mobile responsiveness  */}
      <div className="flex flex-col items-center md:hidden items-center mx-4 place-content-center pt-8">
        <p className="text-2xl px-4 text-bold text-center">Article title</p>
        <p className="text-l p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <button className="text-l p-2 m-5 bg-turquoise uppercase rounded-md w-40 ">
          read more
        </button>
      </div>

      {/* "symptoms" section - COMPLETE: is mobile friendly! */}
      <div className="w-full mt-24">
        <p
          className="text-6xl pl-6 pb-2"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          symptoms
        </p>
        <FourCardSpread />
        {/* <div className="grid grid-cols-2 mx-4 md:grid-cols-4">
          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Book section - COMPLETE: is mobile friendly! */}

      {/* below is for desktop responsiveness */}
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
          <button className="text-l p-2 m-3 bg-turquoise uppercase rounded-md justify-center ">
            buy here
          </button>
        </div>
        <Image
          className="hidden md:flex visible w-[50%] h-[50%] z-1 "
          src={book}
        />
      </div>

      {/* below is for mobile responsiveness */}
      <div className="md:hidden grid p-4">
        <Image className="ps-10" src={book} />
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
        <button className="text-l p-2 m-3 bg-turquoise uppercase rounded-md justify-center ">
          buy here
        </button>
      </div>

      {/* "conditions" section - COMPLETE: is mobile friendly! */}
      <div className="w-full mt-24">
        <p
          className="text-6xl pl-6 pb-2"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          conditions
        </p>
        <FourCardSpread />

        {/* <div className="grid grid-cols-2 mx-4 md:grid-cols-4">
          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* green speech bubbles section - COMPLETE: is mobile friendly! */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-24 ">
        {/* did you know? */}
        <div className="grid grid-cols-1 ">
          <div class="speech bottom">did you know?</div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Fact with link to article</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Fact with link to article</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Fact with link to article</p>
            </div>
          </div>
        </div>

        {/* tools and calulators section  */}
        <div className="grid grid-cols-1 ">
          <div class="speech bottom">tools & calculators</div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center ">
              <p className="card-title ">PASI Calculator</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Symptom Checker</p>
            </div>
          </div>

          <div className="flex px-5 md:px-20 py-5 justify-center">
            <Image
              className="rounded-l-lg w-1/2 object-cover"
              src={placeholder_image}
            />
            <div className="border-solid border-2 rounded-r-lg shadow-md p-2 text-center text-xl flex items-center">
              <p className="card-title">Something Else</p>
            </div>
          </div>
        </div>
      </div>

      {/* prompt to join email list  */}
      <div className="w-full bg-turquoise h-64 mt-24 place-items-center">
        <p className="text-center p-24">Prompt to join email list</p>
      </div>

      {/* "recipes" section - COMPLETE: is mobile friendly! */}
      <div className="w-full mt-24">
        <p
          className="text-6xl pl-6 pb-2"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          recipes
        </p>
        <FourCardSpread />

        {/* <div className="grid grid-cols-2 mx-4 md:grid-cols-4">
          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image className="rounded-t-lg" src={placeholder_image} />
            <div className="card-title-container">
              <p className="card-title">Article title</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* statement on scientific/journalistic integrity */}
      <div className="w-full bg-turquoise h-64 mt-24 place-items-center">
        <p className="text-center p-24">
          Statement on scientific/journalistic integrity
        </p>
      </div>

      {/* footer  */}
      <div className="w-full bg-gray-300 h-64 place-items-center">
        <p className="text-center p-24">footer</p>
      </div>
    </>
  );
}

{
  /* 
<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>   */
}
