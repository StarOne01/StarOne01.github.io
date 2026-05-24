import GNU_logo from "../../public/GNU_logo.svg";
import C_logo from "../../public/C_Logo.webp";
import LLVM_logo from "../../public/LLVM_logo.webp";
import Linux_logo from "../../public/Tux.webp";
import Chromium_logo from "../../public/Chromium_Logo.svg";
import Floris_Logo from "../../public/florish.png";
import Signal_Logo from "../../public/Signal-Logo.png";
import Graphene_Logo from "../../public/graphene.webp";
import Brave_logo from "../../public/brave.png";

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

export { projects };
