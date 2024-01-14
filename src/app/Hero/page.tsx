"use client"
import Link from "next/link";
import Nav from "../Nav/page";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <>
      <div className={`absolute navbar ${buttonClicked ? "bg-transparent" : ""}`}>
        <Nav />
      </div>

      <div
        className={` flex justify-center items-center p-4 transition-all ${
          buttonClicked ? "bg-blue-300" : "bg-indigo-950 "
        }`}
      >
        <div className=" mx-12  text-white font-bold text-4xl h-screen flex items-center">
          <div>
            <h1>
              <span className="text-blue-900 drop-shadow-md text-5xl"> Hello ,</span>{" "}
              I&apos;m <span className="Kevina text-5xl font-normal"> Kevina Maydiva Heriansaputri</span>{" "}
            </h1>
            <h1>
              A Front End{" "}
              <span className="text-blue-900 drop-shadow-md text-5xl hover:opacity-65 duration-300"> Developer .</span>
            </h1>
          </div>
        </div>

        <div>
          <Link href="https://www.instagram.com/kevinamaydiva_/">
          <Image
            className="-mx-12 scale-75 rounded-3xl hover:scale-90 duration-300 drop-shadow-xl "
            src="/profile.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          </Link>
        </div>
      </div>

<div className="flex justify-center  top-[-30rem] relative sm:top-[-10rem]  sm:relative ">

      <div className="px-12 sm:p-0  sm:scale-100  hover:scale-90 duration-300">
      <div className="hover:scale-125 duration-300 scale-150 px-12 sm:p-2 sm:scale-75">
        <button
          className="p-4 hover:scale-100  sm:scale-90   bg-indigo-900 rounded-3xl hover:bg-blue-950  text-white hover:text-slate-300 duration-300"
          onClick={handleButtonClick}
        >
          <Link className=" font-bold  " href="#Skills">
            There What I can do
          </Link>
        </button>
      </div>
      </div>
      
      <div className="px-12 sm:p-0    sm:scale-100   hover:scale-90 duration-300">
        <div className="hover:scale-125 duration-300 scale-150  px-12 sm:p-2  sm:scale-75">
        <button
          className="p-4 hover:scale-100 duration-300  sm:scale-90   bg-indigo-900 rounded-3xl hover:bg-blue-950  text-white hover:text-slate-300 "
          onClick={handleButtonClick}
        >
          <Link className=" font-bold  " href="#BIO">
            My Bio
          </Link>
        </button>
      </div>
      </div>
      </div>
    </>
  );
}
