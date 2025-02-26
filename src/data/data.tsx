import GNU_logo from "../../public/GNU_logo.svg";
import C_logo from "../../public/C_Logo.webp";
import { Parkinsans } from "next/font/google";
import LLVM_logo from "../../public/LLVM_logo.webp";
import Linux_logo from "../../public/Tux.webp";
import Chromium_logo from "../../public/Chromium_Logo.svg";
import Patronus from "../../public/patronus-from-harry-potter.webp";
import Stars from "../../public/stars.webp";
import Mountains from "../../public/mountains.webp";
import Floris_Logo from "../../public/florish.png";
import Signal_Logo from "../../public/Signal-Logo.png";
import Graphene_Logo from "../../public/graphene.webp";
import Aurora from "../../public/aurora.webp";
import Brave_logo from "../../public/brave.png";

const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

const words = [
  {
    text: "Hey !",
  },
];

const nameData = [
  {
    text: "I'm",
  },
  {
    text: "Prashanth",
    className: "dark:text-yellow-200 text-white ",
  },
];

const also = [
  {
    text: "a.k.a",
  },
  {
    text: "Starone01",
    className: "dark:text-yellow-200 text-white ",
  },
];

const projects = [
  {
    name: "Legendary",
    description: "Projects that i think revolutionized the tech industry",
    projects: [
      {
        name: "C",
        logo: C_logo,
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
        description:
          "C revolutionized programming by providing a portable, efficient language that became the foundation for modern operating systems and software development.",
      },
      {
        name: "Linux",
        logo: Linux_logo,
        link: "https://www.linux.org/",
        description:
          "Linux democratized computing by providing a free, open-source operating system that now powers everything from smartphones to supercomputers.",
      },
      {
        name: "GNU",
        logo: GNU_logo,
        link: "https://www.gnu.org/",
        description:
          "GNU sparked the free software movement, establishing principles of software freedom that transformed how we think about software ownership and distribution.",
      },
      {
        name: "LLVM",
        logo: LLVM_logo,
        link: "https://llvm.org/",
        description:
          "LLVM transformed compiler technology by providing a modular infrastructure that enables better optimization and cross-platform development.",
      },
      {
        name: "Chromium",
        logo: Chromium_logo,
        link: "https://www.chromium.org/",
        description:
          "Chromium redefined web browsing by introducing a fast, secure, and open-source engine that became the foundation for many modern browsers.",
      },
    ],
  },
  {
    name: "Personal Favs",
    description: "Projects that I love",
    projects: [
      {
        name: "Florisboard",
        logo: Floris_Logo,
        link: "https://florisboard.org/",
        description:
        "Florisboard is a free and open-source keyboard for Android that is highly customizable and privacy-friendly.",
      },
      {
        name: "GrapheneOS",
        logo: Graphene_Logo,
        link: "https://grapheneos.org/",
        description:
          "GrapheneOS is a privacy-focused mobile operating system that provides a secure and open-source alternative to mainstream Android."
          
        },
        {
          name: "Signal",
          logo: Signal_Logo,
          link: "https://signal.org/",
          description:
            "Signal is a free and open-source messaging app that prioritizes privacy and security, providing end-to-end encryption for all communications."
        },
        {
          name: "Brave",
          logo: Brave_logo,
          link: "https://brave.com/",
          description:
            "Brave is a privacy-focused web browser that blocks ads and trackers, providing a faster and more secure browsing experience."
        }
    ],
  },
];

const contrib = [
  {
    name: "LLVM",
    contribs: {
      code: [
        {
          PR: "123495",
        },
      ],
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
        {
          PR: "122997",
        },
        {
          PR: "123000",
        },
        {
          PR: "123004",
        },
        {
          PR: "123068"
        }
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
    className: "sm:col-span-2",
    thumbnail: Aurora,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: Mountains,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",

    thumbnail: Stars,
  },

  {
    id: 4,
    content: <SkeletonFour />,
    className: "sm:col-span-2",
    thumbnail: Patronus,
  },
];

export {
  words,
  also,
  nameData,
  projects,
  contrib,
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  cards,
};
