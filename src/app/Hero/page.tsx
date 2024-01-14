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
        className={` flex justify-center items-center gap-x-80 p-4 transition-all ${
          buttonClicked ? "bg-blue-300" : "bg-indigo-950 "
        }`}
      >
        <div className="text-white font-bold text-4xl h-screen flex items-center">
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
          <Image
            className=" scale-90 rounded-3xl hover:scale-100 duration-300 drop-shadow-xl"
            src="/profile.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className=" scale-90 flex justify-center -my-28 hover:scale-100 duration-300">
        <button
          className="p-4   bg-indigo-900 rounded-3xl hover:bg-blue-950  text-white hover:text-slate-300 duration-300"
          onClick={handleButtonClick}
        >
          <Link className=" font-bold " href="#Skills">
            There What I can do
          </Link>
        </button>
      </div>
    </>
  );
}
