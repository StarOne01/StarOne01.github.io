"use client";
import { projects } from "@/data/data";
import { Parkinsans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const parkin = Parkinsans({ weight: "400", subsets: ["latin"] });

function ProjectCard({ project, wide }: { project: { name: string; logo: string; description: string; link: string }; wide?: boolean }) {
  return (
    <div className="group bg-black border border-white/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:border-white/40 h-full">
      <div className={`relative overflow-hidden bg-white/5 ${wide ? "h-64" : "h-48"}`}>
        <Image
          alt={project.name + " Logo"}
          src={project.logo}
          fill
          className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-white/80 transition-colors">
          {project.name}
        </h4>
        <p className="mb-4 text-white/60">
          {project.description}
        </p>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white/70 hover:text-white transition-colors"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function FavProjs() {
  const [activeTab, setActiveTab] = useState("all");
  
  const visibleThemes = activeTab === "all"
    ? projects
    : projects.filter((theme) => theme.name === activeTab);

  return (
    <div
      className={
        "pt-16 pb-24 md:max-w-[900px] lg:mx-auto md:mx-16 mx-6 text-base " +
        parkin.className
      }
    >
      <div id="projects" className="mt-7 max-w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2
            className={
              "text-4xl underline cursor-default decoration-white/30 font-semibold md:text-5xl text-white " +
              parkin.className
            }
          >
            <span className="text-white font-light">
              Favorite
            </span>{" "}
            Projects
          </h2>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "all"
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All
            </button>
            {projects.map((category) => (
              <button
                key={`tab-${category.name}`}
                onClick={() => setActiveTab(category.name)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === category.name
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <p className="text-lg md:text-xl mb-12 text-white/80">
          These are projects that have either revolutionized technology or that I personally admire for their innovation, impact, and philosophy.
        </p>

        {visibleThemes.map((theme) => (
          <div key={theme.name} className="mb-16">
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-white mr-3"></div>
              <h3 className="font-extrabold text-2xl md:text-3xl text-white">{theme.name}</h3>
            </div>
            <p className="mb-8 text-lg opacity-70 text-white/70">{theme.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(() => {
                const n = theme.projects.length;
                const spanClass = (i: number) => {
                  if (n === 5) {
                    if (i === 0) return "lg:col-span-2";
                    if (i === 3) return "lg:col-span-2";
                    if (i === 4) return "lg:col-span-3";
                  }
                  if (n === 4) {
                    if (i === 0) return "lg:col-span-2";
                    if (i === 3) return "lg:col-span-2";
                  }
                  if (n === 3) {
                    if (i === 0) return "lg:col-span-2";
                    if (i === 2) return "lg:col-span-3";
                  }
                  return "";
                };
                return theme.projects.map((project, i) => {
                  const span = spanClass(i);
                  const wide = span.includes("col-span-2") || span.includes("col-span-3");
                  return (
                    <div key={project.name} className={span}>
                      <ProjectCard project={project} wide={wide} />
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        ))}

        <div className="mt-16 flex justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:shadow-lg hover:shadow-white/20 transition-all flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FavProjs;
