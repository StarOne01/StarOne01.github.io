"use client";
import { projects } from "@/data/data";
import { Parkinsans } from "next/font/google";
import Image from "next/image";

const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

function FavProjs() {
  return (
    <div
      className={
        "m-7 md:max-w-[900px] lg:mx-auto md:mx-16 mx-6 text-base " +
        parkin.className
      }
    >
      <div id="projects" className="mt-7 max-w-full ">
        <h2
          className={
            "text-4xl underline cursor-default  decoration-slate-500 font-semibold md:text-5xl " +
            parkin.className
          }
        >
          <span className="dark:text-yellow-300 text-cyan-500 font-light">
            Fav
          </span>
          Projects
        </h2>
        <br />

        {projects.map((theme) => (
          <div key={theme.name}>
            <p className="font-extrabold text-2xl"> {theme.name}: </p>
            <p className="">{theme.description}</p>
            <div className="flex flex-row gap-2 flex-wrap">
              {theme.projects.map((project) => (
                <div
                  key={project.name}
                  className="bg-white my-6 dark:border-yellow-300 dark:hover:shadow-lg dark:md:hover:shadow-md dark:md:hover:shadow-yellow-200 hover:text-white cursor-pointer  hover:bg-black justify-center dark:bg-black border sm:max-w-64 rounded-lg p-4 m-4 flex flex-col items-center gap-4"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <Image
                    alt={project.name + " Logo"}
                    src={project.logo}
                    width={150}
                    height={150}
                    className="rounded-md"
                  ></Image>
                  <h3 className="text-xl underline decoration-slate-500 text-center font-semibold">
                    The{" "}
                    <span className="dark:text-yellow-300 text-cyan-500 font-light">
                      {project.name}
                    </span>{" "}
                    Project
                  </h3>
                  <p className="text-base text-center">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavProjs;
