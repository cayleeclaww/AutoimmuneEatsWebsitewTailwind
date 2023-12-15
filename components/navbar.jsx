"use client";
import Image from "next/image";
import Autoimmune_Eats_Logo from "../public/Autoimmune_Eats_Logo.png";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="navbar relative w-full h-42 shadow-xl bg-white z-40 grid">
      <div className="flex justify-center md:block md:justify-between items-center h-full w-full p-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Autoimmune_Eats_Logo}
            alt="Logo"
            height="100"
            width="247"
            className="cursor-pointer "
            priority
          />
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex justify-between items-center pt-2">
          {/* YT video uses "sm:flex" but not working here -- RESOLVED??*/}

          {/* bydisease menu item  */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group text-black">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex ">
                <Link
                  href="/by-disease"
                  className="text-black visited:text-black"
                >
                  by disease
                </Link>
              </span>
              <svg
                className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            {/* submenu list */}
            <div className="rounded absolute right-0 hidden text-gray-700 pt-1 group-hover:block drop-shadow-lg">
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer ">
                <Link
                  href="/by-disease/psoriasis"
                  className="text-black visited:text-black"
                >
                  psoriasis
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-disease/arthritis"
                  className="text-black visited:text-black"
                >
                  arthritis
                </Link>{" "}
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-disease/hashimotos"
                  className="text-black visited:text-black"
                >
                  hashimoto&apos;s
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-disease/eczema"
                  className="text-black visited:text-black"
                >
                  eczema
                </Link>
              </div>
            </div>
          </div>

          {/* bysymptom menu item */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/by-symptom"
                  className="text-black visited:text-black"
                >
                  by symptom
                </Link>
              </span>
              <svg
                className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            {/* submenu list */}
            <div className="rounded absolute right-0 hidden text-gray-700 pt-1 group-hover:block drop-shadow-lg">
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-symptom/skin-pain"
                  className="text-black visited:text-black"
                >
                  skin pain
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-symptom/fatigue"
                  className="text-black visited:text-black"
                >
                  fatigue
                </Link>{" "}
              </div>
              <div className="bg-gray-200 hover:bg-[#99CED3] py-4 px-4 cursor-pointer">
                <Link
                  href="/by-symptom/joint-pain"
                  className="text-black visited:text-black"
                >
                  joint pain
                </Link>
              </div>
            </div>
          </div>

          {/* nutritionandsupplements menu item */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/nutrition-and-supplements"
                  className="text-black visited:text-black"
                >
                  nutrition & supplements
                </Link>
              </span>
              <svg
                className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            {/* submenu list */}
            <div className="rounded absolute right-0 hidden text-gray-700 pt-1 group-hover:block drop-shadow-lg">
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/nutrition-and-supplements/top-supplements"
                  className="text-black visited:text-black"
                >
                  top supplements
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/nutrition-and-supplements/food-sensitivities"
                  className="text-black visited:text-black"
                >
                  food sensitivities
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/nutrition-and-supplements/nutrition-recommendations"
                  className="text-black visited:text-black"
                >
                  nutrition recommendations
                </Link>
              </div>
            </div>
          </div>

          {/* about menu item */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link href="/about" className="text-black visited:text-black">
                  about
                </Link>
              </span>
              {/* <svg
        className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg> */}
            </button>

            {/* submenu list */}
            {/* <div className="rounded absolute right-0 hidden text-gray-700 pt-1 group-hover:block">
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
        Profile
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
        Settings
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
        Logout
      </li>
    </ul> */}
          </div>

          {/* resources menu item */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/by-disease"
                  className="text-black visited:text-black"
                >
                  resources
                </Link>
              </span>
              <svg
                className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            {/* submenu list */}
            <div className="rounded absolute right-0 hidden text-gray-700 pt-1 group-hover:block drop-shadow-lg">
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources/gain-control-over-your-psoriasis-book"
                  className="text-black visited:text-black"
                >
                  book
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/nutrition-and-supplements/top-supplements"
                  className="text-black visited:text-black"
                >
                  top supplements
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources/autoimmune-nutrition-starters-guide"
                  className="text-black visited:text-black"
                >
                  autoimmune nutrition starters&apos; guide
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources/guided-meditations"
                  className="text-black visited:text-black"
                >
                  guided meditation for eating
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources/candida-screening-form"
                  className="text-black visited:text-black"
                >
                  candida screening form
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources/dinner-meal-planner"
                  className="text-black visited:text-black"
                >
                  dinner meal planner
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources/track-psoriasis-severity"
                  className="text-black visited:text-black"
                >
                  track psoriasis severity
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          onClick={handleHamburger}
          className="md:hidden cursor-pointer absolute top-5 left-5"
        >
          <AiOutlineMenu size={30} />
        </div>

        {/* mobile menu  */}
        <div
          className={
            hamburgerOpen
              ? "fixed left-0 top-0 width-[65%] md:hidden h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-start">
            <div onClick={handleHamburger} className="cursor-pointer">
              <AiOutlineClose size={30} />
            </div>
          </div>
          <div className="flex-col py-4">
            <div>
              <Link href="/by-disease">
                <div
                  onClick={() => setHamburgerOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  by disease
                </div>
              </Link>

              <Link href="/by-symptom">
                <div
                  onClick={() => setHamburgerOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  by symptom
                </div>
              </Link>

              <Link href="/nutrition-and-supplements">
                <div
                  onClick={() => setHamburgerOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  nutrition and supplements
                </div>
              </Link>

              <Link href="/about">
                <div
                  onClick={() => setHamburgerOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  about
                </div>
              </Link>

              <Link href="/resources">
                <div
                  onClick={() => setHamburgerOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  resources
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* OLD CODE:

    const [dropdownDzOpen, setDropdownDzOpen] = useState(false)
    const [dropdownSxOpen, setDropdownSxOpen] = useState(false)

    // const handleDropdown = () => {
    //     setDropdownOpen(!dropdownOpen)
    // }




{/* attempt at new menu and submenu */
}
{
  /* <div className="group relative flex">
    <button className="text-gray-700 rounded inline-flex items-center group hidden sm:flex">
        {/* bydisease menu item */
}
{
  /* <span className="mr-1 ml-10 uppercase hover:border-b text-l flex"><Link href="/bydisease">by disease</Link></span>
      <svg
        className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button> */
}

{
  /* bydisease submenu list */
}
{
  /* <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block">
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
        <Link href="/bydisease/psoriasis">psoriasis</Link>
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
      <Link href="/bydisease/arthritis">arthritis</Link>
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
      <Link href="/bydisease/hashimotos">hashimoto's</Link>      
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
      <Link href="/bydisease/eczema">eczema</Link>      
      </li>
    </ul> */
}

{
  /* <button className="text-gray-700 rounded inline-flex items-center group hidden sm:flex"> */
}
{
  /* bydisease menu item */
}
{
  /* <span className="mr-1 ml-10 uppercase hover:border-b text-l flex"><Link href="/bydisease">by disease</Link></span>
      <svg
        className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button> */
}

{
  /* bydisease submenu list */
}
{
  /* <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block">
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
        <Link href="/bydisease/psoriasis">psoriasis</Link>
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
      <Link href="/bydisease/arthritis">arthritis</Link>
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
      <Link href="/bydisease/hashimotos">hashimoto's</Link>      
      </li>
      <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
      <Link href="/bydisease/eczema">eczema</Link>      
      </li>
    </ul> */
}

{
  /* <ul className="hidden sm:flex"> */
}
{
  /* <Link href="/bydisease">
                        <li className="ml-10 uppercase hover:border-b text-l flex"><span>by disease </span></li></Link>
                        <button onClick={() => setDropdownDzOpen((prev) => !prev)}>
                            {!dropdownDzOpen ? (
                                <AiOutlineCaretDown className="h-6 pl-1"/>
                            ) : (
                                <AiOutlineCaretUp className="h-6 pl-1"/>
                            )}
                            </button>

                            {dropdownDzOpen && (
                                <div className="bg-yellow-400 absolute top-40 flex flex-column items-end z-1 ml-10">
                                    <div className="flex w-full justify-between cursor-pointer flex-col">                             
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>psoriasis</span></Link>
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>arthritis</span></Link>
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>hashimoto's</span></Link>
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>eczema</span></Link>
                                </div>
                                </div>
                            )}
                        

                    <Link href="/bysymptom">
                        <li className="ml-10 uppercase hover:border-b text-l flex">by symptom </li></Link>
                        <button onClick={() => setDropdownSxOpen((prev) => !prev)}>
                            {!dropdownSxOpen ? (
                                <AiOutlineCaretDown className="h-6 pl-1"/>
                            ) : (
                                <AiOutlineCaretUp className="h-6 pl-1"/>
                            )}
                            </button>

                            {dropdownSxOpen && (
                                <div className="bg-yellow-400 absolute top-40 flex flex-column items-end z-1 ml-56">
                                    <div className="flex w-full justify-between cursor-pointer flex-col">                             
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>skin pain</span></Link>
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>joint pain</span></Link>
                                        <Link className="hover:bg-[#99CED3] px-2 py-1 w-full" href="/bydisease/psoriasis"><span>hair loss</span></Link>
                                </div>
                                </div>
                            )} */
}

{
  /* BREADCRUMBS: change submenu items below. ALSO will need to find a way to get the submenus to be responsive and stay below their title menu item when screen size changes.... */
}

{
  /* <Link href="/nutritionandsupplements">
                    <li className="ml-10 uppercase hover:border-b text-l flex">nutrition & supplements <AiOutlineCaretDown className="h-6 pl-1"/></li>
                    </Link>

                    <Link href="/resources">
                    <li className="ml-10 uppercase hover:border-b text-l flex">resources <AiOutlineCaretDown className="h-6 pl-1"/></li>
                    </Link>

                    <Link href="/about">
                    <li className="ml-10 uppercase hover:border-b text-l">about</li>
                    </Link>

                </ul>
            </div>
            <div onClick={handleHamburger} className="md:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div> */
}

{
  /* </ul>   
        </div>
        </div> */
}
