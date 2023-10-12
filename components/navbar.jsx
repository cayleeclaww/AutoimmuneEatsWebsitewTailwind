'use client'
import Image from "next/image"
import Autoimmune_Eats_Logo from "../public/Autoimmune_Eats_Logo.png"
import Link from "next/link"
// import '../src/app/globals.css'
import 'tailwindcss/tailwind.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav className="fixed w-full h-40 shadow-xl bg-white">
        {/* Remove "flex" below to get nav bar items to be below logo */}
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href="/">
            <Image src={Autoimmune_Eats_Logo} 
            alt="Logo"
            height="100"
            width="247"
            className="cursor-pointer"
            priority/>
            </Link>
            <div className="hidden sm:flex">
                {/* YT video uses "sm:flex" but not working here */}
                <ul className="hidden sm:flex">
                    <Link href="/bydisease">
                        <li className="ml-10 uppercase hover:border-b text-xl">by disease</li>
                    </Link>
                    <Link href="/bysymptom">
                    <li className="ml-10 uppercase hover:border-b text-xl">by symptom</li>
                    </Link>
                    <Link href="/nutritionandsupplements">
                    <li className="ml-10 uppercase hover:border-b text-xl">nutrition and supplements</li>
                    </Link>
                    <Link href="/resources">
                    <li className="ml-10 uppercase hover:border-b text-xl">resources</li>
                    </Link>
                    <Link href="/about">
                    <li className="ml-10 uppercase hover:border-b text-xl">about</li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
        </div>
        <div className={
            menuOpen 
            ? "fixed left-0 top-0 width-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25} />
                </div>
            </div>
            <div className="flex-col py-4">
                <ul>
                    <Link href="/bydisease">
                        <li 
                            onClick={() => setMenuOpen(false)} 
                            className="py-4 cursor-pointer">by disease</li>
                    </Link>

                    <Link href="/bysymptom">
                        <li 
                            onClick={() => setMenuOpen(false)} 
                            className="py-4 cursor-pointer">by symptom</li>
                    </Link>

                    <Link href="/nutritionandsupplements">
                        <li 
                            onClick={() => setMenuOpen(false)} 
                            className="py-4 cursor-pointer">nutrition and supplements</li>
                    </Link>

                    <Link href="/resources">
                        <li 
                            onClick={() => setMenuOpen(false)} 
                            className="py-4 cursor-pointer">resources</li>
                    </Link>

                    <Link href="/about">
                        <li 
                            onClick={() => setMenuOpen(false)} 
                            className="py-4 cursor-pointer">about</li>
                    </Link>
                </ul>
            </div>


        </div>
    </nav>
  )
}

export default Navbar
