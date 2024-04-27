"use client";
 
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({ weight: "400", subsets: ['latin'] }) 

function Hero() {
  const words = [
    {
      text: "Hey !",
    },
  ];

  const name = [
    {
      text: "I'm"
    },
    {
      text: "Prashanth",
      className: "text-cyan-600 dark:text-cyan-200 font-light",
    },
  ];
  return (
    <>
    <AuroraBackground className= {poppins.className}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl dark:text-white text-center">
        <TypewriterEffectSmooth words={words} />
        <TypewriterEffectSmooth words={name} />
        </div>
      </motion.div>
    </AuroraBackground>
    </>
  );
}

function Whoami() {
  return(
  <div className={"m-7 text-base md:text-xl " + poppins.className}>
    <h2 className="text-4xl font-semibold md:text-7xl">Who<span className="text-cyan-600 dark:text-cyan-200 font-light">ami</span></h2>
    <br/>
    <ul className="m-7 ml-5">
      <li>Full Stacker</li>
      <li>FOSS Enthusiasist</li>
      <li>Astrophile</li>
      <li>Melophile</li>
    </ul>
    Tailwind CSS is a popular utility-first CSS framework that makes it easy to style your applications using predefined classes. One useful feature of Tailwind is the ability to apply responsive font sizes using media queries. In this blog post, we'll take a look at how to use media queries in Tailwind to apply responsive font sizes to your text.

Media queries in Tailwind
Tailwind includes a number of utility classes that allow you to apply styles based on the size of the viewport. These utility classes are prefixed with the size abbreviation, followed by a colon (e.g. sm:, md:, lg:, etc.). For example, you can use the sm: prefix to apply styles only on small screens, or the lg: prefix to apply styles only on large screens.

Applying responsive font sizes
To apply responsive font sizes in Tailwind, you can use the text- utility classes along with media queries. For example, to apply a larger font size on small screens and a smaller font size on large screens, you can use the following classes:Tailwind CSS is a popular utility-first CSS framework that makes it easy to style your applications using predefined classes. One useful feature of Tailwind is the ability to apply responsive font sizes using media queries. In this blog post, we'll take a look at how to use media queries in Tailwind to apply responsive font sizes to your text.

Media queries in Tailwind
Tailwind includes a number of utility classes that allow you to apply styles based on the size of the viewport. These utility classes are prefixed with the size abbreviation, followed by a colon (e.g. sm:, md:, lg:, etc.). For example, you can use the sm: prefix to apply styles only on small screens, or the lg: prefix to apply styles only on large screens.

Applying responsive font sizes
To apply responsive font sizes in Tailwind, you can use the text- utility classes along with media queries. For example, to apply a larger font size on small screens and a smaller font size on large screens, you can use the following classes:Tailwind CSS is a popular utility-first CSS framework that makes it easy to style your applications using predefined classes. One useful feature of Tailwind is the ability to apply responsive font sizes using media queries. In this blog post, we'll take a look at how to use media queries in Tailwind to apply responsive font sizes to your text.

Media queries in Tailwind
Tailwind includes a number of utility classes that allow you to apply styles based on the size of the viewport. These utility classes are prefixed with the size abbreviation, followed by a colon (e.g. sm:, md:, lg:, etc.). For example, you can use the sm: prefix to apply styles only on small screens, or the lg: prefix to apply styles only on large screens.

Applying responsive font sizes
To apply responsive font sizes in Tailwind, you can use the text- utility classes along with media queries. For example, to apply a larger font size on small screens and a smaller font size on large screens, you can use the following classes:Tailwind CSS is a popular utility-first CSS framework that makes it easy to style your applications using predefined classes. One useful feature of Tailwind is the ability to apply responsive font sizes using media queries. In this blog post, we'll take a look at how to use media queries in Tailwind to apply responsive font sizes to your text.

Media queries in Tailwind
Tailwind includes a number of utility classes that allow you to apply styles based on the size of the viewport. These utility classes are prefixed with the size abbreviation, followed by a colon (e.g. sm:, md:, lg:, etc.). For example, you can use the sm: prefix to apply styles only on small screens, or the lg: prefix to apply styles only on large screens.

Applying responsive font sizes
To apply responsive font sizes in Tailwind, you can use the text- utility classes along with media queries. For example, to apply a larger font size on small screens and a smaller font size on large screens, you can use the following classes:Tailwind CSS is a popular utility-first CSS framework that makes it easy to style your applications using predefined classes. One useful feature of Tailwind is the ability to apply responsive font sizes using media queries. In this blog post, we'll take a look at how to use media queries in Tailwind to apply responsive font sizes to your text.

Media queries in Tailwind
Tailwind includes a number of utility classes that allow you to apply styles based on the size of the viewport. These utility classes are prefixed with the size abbreviation, followed by a colon (e.g. sm:, md:, lg:, etc.). For example, you can use the sm: prefix to apply styles only on small screens, or the lg: prefix to apply styles only on large screens.

Applying responsive font sizes
To apply responsive font sizes in Tailwind, you can use the text- utility classes along with media queries. For example, to apply a larger font size on small screens and a smaller font size on large screens, you can use the following classes:Tailwind CSS is a popular utility-first CSS framework that makes it easy to style your applications using predefined classes. One useful feature of Tailwind is the ability to apply responsive font sizes using media queries. In this blog post, we'll take a look at how to use media queries in Tailwind to apply responsive font sizes to your text.

Media queries in Tailwind
Tailwind includes a number of utility classes that allow you to apply styles based on the size of the viewport. These utility classes are prefixed with the size abbreviation, followed by a colon (e.g. sm:, md:, lg:, etc.). For example, you can use the sm: prefix to apply styles only on small screens, or the lg: prefix to apply styles only on large screens.

Applying responsive font sizes
    </div>);
}

function Skills()
 {
  return(
    <div className={"m-7 text-base md:text-xl " + poppins.className}>
      <h2 className="text-4xl font-semibold md:text-7xl">Skills</h2>
      <ul className="m-7 ml-5">
        <li>JavaScipt/TypeScipt + React + Next + Node</li>
        <li>C/Cxx</li>
        <li>HTML/CSS</li>
        <li>Linux - POSIX</li>
        <li>Git</li>
        <li></li>
      </ul>
    </div>
  );
 }

function Projects() {
  return(
    <div>

    </div>
  )
}



export default function Home() {
  return(
    <>
    <Hero/>
    <Whoami/>
    <br/>
    <Skills/>
    <br />
    <Projects/>
    </>
  );
}
