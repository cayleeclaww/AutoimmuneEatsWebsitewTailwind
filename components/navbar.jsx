"use client";
import Image from "next/image";
import Autoimmune_Eats_Logo from "../public/Autoimmune_Eats_Logo.png";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    // change below to bg-[#fbfbf6] once logo is updated to match
    <header className="navbar relative w-full h-42 shadow-xl bg-white z-40 grid">
      <div className="flex justify-center md:block md:justify-between items-center h-full w-full p-4 2xl:px-16">
        {/* Logo - desktop + mobile */}
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
          {/* by-disease menu items */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group text-black">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex ">
                <Link
                  href="/by-disease"
                  className="text-black visited:text-black hover:no-underline "
                >
                  by disease
                </Link>
              </span>
              {/* creates arrow that flips on hover */}
              <svg
                className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            {/* submenu items */}
            <div className="rounded absolute right-0 hidden text-gray-700 pt-1 group-hover:block drop-shadow-lg">
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer ">
                <Link
                  href="/by-disease/What-is-the-Best-Psoriasis-Diet-9-Foods-to-Avoid-and-More"
                  className="text-black visited:text-black"
                >
                  psoriasis
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-symptom/Lupus-Arthritis-How-to-Improve-Lupus-Joint-Pain"
                  className="text-black visited:text-black"
                >
                  lupus
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-disease/Hashimotos-And-Gluten-Whats-the-Best-Hashimotos-Diet"
                  className="text-black visited:text-black"
                >
                  hashimoto&apos;s
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-disease/Foods-That-Cause-Eczema-What-to-Eat-And-What-Helps-it-Go-Away"
                  className="text-black visited:text-black"
                >
                  eczema
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-disease/The-Link-Between-Autoimmune-Disease-And-Infections-like-COVID"
                  className="text-black visited:text-black"
                >
                  COVID & infections
                </Link>
              </div>
            </div>
          </div>

          {/* by-symptom menu items */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/by-symptom"
                  className="text-black visited:text-black hover:no-underline "
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
                  href="/by-symptom/Lupus-Arthritis-How-to-Improve-Lupus-Joint-Pain"
                  className="text-black visited:text-black"
                >
                  joint pain & arthritis
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/by-symptom/Fatigue-And-Autoimmune-Disease-How-Nutrition-Can-Help"
                  className="text-black visited:text-black"
                >
                  fatigue
                </Link>
              </div>
              <div className="bg-gray-200 hover:bg-[#99CED3] py-4 px-4 cursor-pointer">
                <Link
                  href="/by-symptom/Autoimmune-Disease-Symptoms-Checklist"
                  className="text-black visited:text-black"
                >
                  is it autoimmune?
                </Link>
              </div>
            </div>
          </div>

          {/* nutrition-and-supplements menu items */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/nutrition-and-supplements"
                  className="text-black visited:text-black hover:no-underline "
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
                  href="/nutrition-and-supplements/Best-Autoimmune-Disease-Diet-Anti-Inflammatory-or-AIP-or"
                  className="text-black visited:text-black"
                >
                  nutrition recommendations
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
              {/* uncomment once a resource of food sensitivities has been created */}
              {/* <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/nutrition-and-supplements/food-sensitivities"
                  className="text-black visited:text-black"
                >
                  food sensitivities
                </Link>
              </div> */}
            </div>
          </div>

          {/* about menu item */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/about"
                  className="text-black visited:text-black hover:no-underline "
                >
                  about
                </Link>
              </span>
            </button>
          </div>

          {/* resources menu item */}
          <div className="group relative ">
            <button className="text-gray-700 rounded inline-flex items-center group">
              <span className="mr-1 ml-10 uppercase hover:border-b text-l flex">
                <Link
                  href="/resources"
                  className="text-black visited:text-black hover:no-underline "
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
                  href="/resources#book"
                  className="text-black visited:text-black"
                >
                  book
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources#autoimmune-nutrition-starters-guide"
                  className="text-black visited:text-black"
                >
                  autoimmune nutrition starters&apos; guide
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources#guided-meditation"
                  className="text-black visited:text-black"
                >
                  guided meditation for eating
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources#candida-screening-form"
                  className="text-black visited:text-black"
                >
                  candida screening form
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources#better-than-a-meal-plan"
                  className="text-black visited:text-black"
                >
                  better than a meal plan
                </Link>
              </div>

              <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/resources#track-psoriasis-severity"
                  className="text-black visited:text-black"
                >
                  track psoriasis severity
                </Link>
              </div>
              {/* uncomment once Top Supps section is added to Resources page */}
              {/* <div className="bg-gray-200 hover:bg-turquoise py-4 px-4 cursor-pointer">
                <Link
                  href="/nutrition-and-supplements/top-supplements"
                  className="text-black visited:text-black"
                >
                  top supplements
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* mobile menu - does not include submenu items as seen in desktop version */}
        <div
          onClick={handleHamburger}
          className="md:hidden cursor-pointer absolute top-5 left-5"
        >
          <AiOutlineMenu size={30} />
        </div>

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

              <Link href="/nutrition-and-supplements/top-supplements">
                <div
                  onClick={() => setHamburgerOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  top supplements
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
