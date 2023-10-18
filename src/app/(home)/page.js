// 'use client'
// import Image from "next/image";
import Image from "next/image";
import Navbar from "../../../components/navbar";
// import './globals.css'
import "tailwindcss/tailwind.css";
import main_image from "../../../public/main_image_front_page_autoimmune_eats.jpg";
// import RootLayout from "../layout";
import placeholder_image from "../../../public/placeholder_article_photo.jpg";





// **** BREADCRUMBS: fix white box over main image 






export default function Home() {
  return (
    <>
      {/* creates main image with overlayed text boxes */}
      <div className="w-full  flex justify-center">
        <Image className="w-full z-1 min-w-[100%]" src={main_image} />
        <div className="absolute z-2 m-40 justify-center">
          <p className="text-6xl bg-white box-border p-10 text-center opacity-80 ">
            <b>welcome</b>
            <br />
            to autoimmune eats
          </p>
          <p className="text-3xl bg-white box-border px-10 pt-0 pb-10 text-center opacity-80 ">
            Discover how to live with
            <br /> more peace & less pain.
          </p>
          <div class="w-60 mx-auto">
            <button className="text-xl bg-white rounded-md box-border mt-20 p-5 text-center opacity-80 justify-center">
              join our mailing list
            </button>
          </div>
        </div>
      </div>

      {/* 4 boxes with main site features  */}
      <div className="w-full grid grid-cols-2 md:flex pb-16">
        <div className="border-box p-10 text-center text-xl">
          <p>
            <b>Free of dieting,</b>
            <br />
            fearing foods, & fat shaming
          </p>
        </div>
        <div className="border-box p-10 text-center text-xl">
          <p>
            <b>Natural remedies</b>
            <br />
            prioritized, plus medication encouraged
          </p>
        </div>
        <div className="border-box p-10 text-center text-xl">
          <p>
            <b>Supported by</b>
            <br />
            medical research & indigenous knowledge
          </p>
        </div>
        <div className="border-box p-10 text-center text-xl">
          <p>
            <b>Holistic</b>
            <br />
            approach to healing & symptom management
          </p>
        </div>
      </div>

      {/* featured article photo + description box */}
      <div className="w-full flex justify-center">
        <Image
          className="w-1/2"
          // width={500}
          src={placeholder_image}
        />
        <div className="w-1/3 h-1/2 mt-44 bg-white border-solid border-2 border-black-600 -ml-14">
          <div className="text-l p-5">Article category </div>
          <div className="text-2xl p-5">Article title </div>
          <button className="text-l p-2 m-5 bg-[#99CED3] rounded-md">
            read more{" "}
          </button>
        </div>
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

{
  /* </RootLayout> */
}
