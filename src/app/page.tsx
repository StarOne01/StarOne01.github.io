"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import React from "react";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LayoutGrid, Card } from "@/components/ui/layout-grid";
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });


function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-trasparent z-10 text-black dark:text-white backdrop-blur-sm fixed w-full">
      <nav
        className="mx-auto flex max-w-7xl  items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 font-semibold p-1.5">
            <span>StarOne</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="#Whoami"
            className="font-semibold text-lg leading-6 dark:text-white p-2 rounded-md text-gray-900"
          >
            Whoami
          </a>
          <a
            href="#Skills"
            className="text-lg font-semibold leading-6 dark:text-white p-2 rounded-md text-gray-900"
          >
            Skills
          </a>
          <a
            href="https://github.com/StarOne01"
            className="text-lg font-semibold leading-6  dark:text-white p-2 rounded-md text-gray-900"
          >
            Projects
          </a>
          <a
            href="prashanth-resume.pdf"
            className="text-lg font-semibold leading-6 dark:text-white p-2 rounded-md text-gray-900"
          >
            Resume
          </a>
          <a
            href="#interests"
            className="text-lg font-semibold leading-6 dark:text-white p-2 rounded-md text-gray-900"
          >
            Interests
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://linktr.ee/starone01"
            className="text-lg font-semibold leading-6 dark:text-white p-2 rounded-md text-gray-900"
          >
            Socials <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent backdrop-blur-xl dark:backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-black font-semibold dark:text-white">
                StarOne
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 dark:text-white text-black"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 center divide-gray-500/10">
              <div className="space-y-2  text-center align-middle py-6">
                <a
                  href="#Whoami"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2  text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Whoami
                </a>
                {/*
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>

                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200">
                        Product

                       <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                  />
                    </Disclosure.Button>
                  
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                      
                    </>
                  )}
                </Disclosure>*/}
                <a
                  href="#Skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Skills
                </a>
                <a
                  href="https://github.com/StarOne01"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7   text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Projects
                </a>
                <a
                  href="#interests"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Interests
                </a>
                <a
                  href="prashanth-resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7  text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-yellow-200"
                >
                  Resume
                </a>
              </div>
              <div className="py-6">
                {/*href="#" onClick={() => setMobileMenuOpen(false)*/}
                <a href="mailto:thestarone01@proton.me">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon dark:fill-white dark:hover:fill-black  hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block m-1 rounded-sm"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/StarOne/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon dark:fill-white dark:hover:fill-black hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block m-1 rounded-md"
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                  </svg>
                </a>
                <a href="https://github.com/StarOne01">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon dark:fill-white dark:hover:fill-black hover:fill-white hover:bg-black dark:hover:bg-yellow-200 inline-block m-1 rounded-3xl"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

function Resume() {
  return (
    <div
      className={"m-7 max md:mx-auto text-base " + poppins400.className}
    ></div>
  );
}

function Hero() {
  const words = [
    {
      text: "Hey !",
    },
  ];

  const name = [
    {
      text: "I'm",
    },
    {
      text: "Prashanth",
      className: "dark:text-yellow-200 text-white",
    },
  ];
  return (
    <div
      className={
        "bg-[url('../../public/AIGenImage3.webp')] bg-cover bg-center " +
        poppins300.className
      }
    >
      <div
        className={`relative flex backdrop-blur-sm dark:mix-blend-hard-light flex-col h-[100vh] bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(50,50,50,0.45)] gap-4 items-center justify-center px-4`}
      >
        <div className="text-4xl md:text-6xl  text-slate-100 text-center">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth words={name} />
        </div>
      </div>
    </div>
  );
}

function Whoami() {
  return (
    <div id="Whoami" className={" " + poppins400.className}>
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          poppins300.className
        }
      >
        Who
        <span className="dark:text-yellow-300 text-cyan-500 font-light">
          ami
        </span>
      </h2>
      <br />
      <ul className="m-7 ml-5">
        <li>Full Stacker</li>
        <li>FOSS Enthusiasist</li>
        <li>Astrophile</li>
        <li>Melophile</li>
        <li>Cyber Security Specialist</li>
      </ul>
      Welcome to my digital realm, where I bring code to life in extraordinary
      ways. I'm a{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        system developer, skilled in C, C++
      </span>{" "}
      – the building blocks of software magic. My journey takes me deep into the
      heart of machines, crafting their very souls and making them hum with
      electronic vitality. I'm also a{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        aspiring dual-faceted engineer,
      </span>{" "}
      both Electric and Electronic. Electronic engineering supports my{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        interests in Computers and electronical systems,
      </span>{" "}
      while my passion for Electric engineering quenches my thirst for
      understanding the beauty of physics and electromagnetism. As an electronic
      engineer, I create powerful things with mere milliamps. On the other hand,
      as an electrical engineer, I play with hundreds of volts and craft
      high-power appliances. But that's not all –{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        I'm also a cybersecurity enthusiast,
      </span>{" "}
      unearthing hidden truths across various realms.{" "}
      <span className="dark:text-yellow-300 dark:bg-transparent text-white-500 bg-cyan-200">
        From the vast expanse of astronomy to the intricate dance of wireless
        networks, and from captivating graphics to the core of bare-metal
        transistors, I love unveiling secrets and seeing what lies beneath the
        surface.
      </span>
      Come, join me on this adventure where science fiction meets reality. Let's
      explore uncharted code, push the boundaries of what's possible, and dive
      into the very heart of technology and the mysteries of the electronical
      world.
    </div>
  );
}

function Skills() {
  return (
    <div id="Skills">
      <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          poppins300.className
        }
      >
        Skills
      </h2>
      <br />
      <h3
        className={
          "text-xl underline md:text-2xl decoration-slate-500 " +
          poppins400.className
        }
      >
        <span className=" text-cyan-400 dark:text-yellow-300">Web</span>{" "}
        Development
      </h3>
      <ul className="m-7 ml-5">
        <li>JavaScipt/TypeScipt</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>React.js </li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>

      <h3
        className={
          "text-xl underline md:text-2xl decoration-slate-500 " +
          poppins400.className
        }
      >
        <span className=" text-cyan-400 dark:text-yellow-300">Ethical</span>{" "}
        Hacking
      </h3>
      <ul className="m-7 ml-5">
        <li>Computer Networks</li>
        <li>GNU+Linux - POSIX</li>
        <li>Python + Bash</li>
        <li>WireShark</li>
        <li>Nmap</li>
        <li>HashCat</li>
        <li>Jhonny</li>
        <li>Aircrack-ng</li>
        <li>Burpsuit</li>
      </ul>

      <h3
        id="interests"
        className={
          "text-xl underline md:text-2xl decoration-slate-500  " +
          poppins400.className
        }
      >
        Also
        <span className=" text-cyan-400 dark:text-yellow-300">
          {" "}
          Interested
        </span>{" "}
        in
      </h3>
      <ul className="m-7 ml-5">
        <li>Software Development</li>
        <li>Embedded Systems</li>
        <li>Digital and Analog Electronics</li>
        <li>Machine Learning</li>
        <li>Mathematics</li>
      </ul>
    </div>
  );
}

function Projects() {
  return <div></div>;
}

function LayoutGridDemo({ cards }: { cards: Card[] }) {
  return (
    <div className="h-screen pb-16 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};



const cards1 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476970980147-71209edbfa4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",

    thumbnail:
      "https://images.unsplash.com/photo-1498194187168-304d0ffa6ed0?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }]

let cards2 = [
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    id: 6,
    content: <SkeletonSix/>,
    className: "md:col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className={"m-7 max md:mx-auto text-base  " + poppins400.className}>
        <Whoami />
        <br />
        <Skills />
        <h2
        className={
          "text-4xl underline decoration-slate-500 font-semibold md:text-5xl " +
          poppins300.className
        }
      >
        Things
        <span className="dark:text-yellow-300 py-4 text-cyan-500 font-light">
          iLove
        </span>
      </h2>
        <LayoutGridDemo cards={cards1} />
        <LayoutGridDemo cards={cards2} />

      </div>
    </>
  );
}
