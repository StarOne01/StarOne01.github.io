import GNU_logo from "../../public/GNU_logo.svg";
import C_logo from "../../public/C_Logo.webp";
import { Parkinsans } from "next/font/google";
import LLVM_logo from "../../public/LLVM_logo.webp";
import Linux_logo from "../../public/Tux.webp";
import Chromium_logo from "../../public/Chromium_Logo.svg";
import Patronus from "../../public/patronus-from-harry-potter.avif"
import Stars from "../../public/stars.avif"
import Mountains from "../../public/mountains.avif"
import Aurora from "../../public/aurora.avif"
const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

const words = [
  {
    text: "Hey !",
    className: parkin.className,
  },
];

const nameData = [
  {
    text: "I'm",
  },
  {
    text: "Prashanth",
    className: "dark:text-yellow-200 text-white " + parkin.className,
  },
];
const projects = [
  {
    name: "Legendary",
    projects: [
      {
        name: "C",
        logo: C_logo,
        description:
          "C revolutionized programming by providing a portable, efficient language that became the foundation for modern operating systems and software development.",
      },
      {
        name: "Linux",

        logo: Linux_logo,
        description:
          "Linux democratized computing by providing a free, open-source operating system that now powers everything from smartphones to supercomputers.",
      },
      {
        name: "GNU",
        logo: GNU_logo,
        description:
          "GNU sparked the free software movement, establishing principles of software freedom that transformed how we think about software ownership and distribution.",
      },
      {
        name: "LLVM",
        logo: LLVM_logo,
        description:
          "LLVM transformed compiler technology by providing a modular infrastructure that enables better optimization and cross-platform development.",
      },
      {
        name: "Chromium",
        logo: Chromium_logo,
        description:
          "Chromium redefined web browsing by introducing a fast, secure, and open-source engine that became the foundation for many modern browsers.",
      },
    ],
  },
];

const contrib = [
  {
    name: "LLVM",
    contribs: {
      docs: [
        {
          PR: "122219",
        },
        {
          PR: "122598",
        },
        {
          PR: "122563",
        },
        {
          PR: "122497",
        },
        {
          PR: "122406",
        },
        {
          PR: "122411",
        },
      ],
    },
  },
];

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Love for lights (Auroras)
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Life around the clouds
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Stars.. You know why the name?
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        I love stars, cause they spend all their energy to keep life growing
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Expecto Patronum
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      Aurora,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      Mountains,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",

    thumbnail:
      Stars,
  },

  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      Patronus,
  },
];

export {
  words,
  nameData,
  projects,
  contrib,
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  cards,
};
