"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { projects } from "@/app/data";
import Image from "next/image";
import { BiCodeAlt } from "react-icons/bi";

const Project = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const project = projects.filter((project) => {
    return project.id === params.id;
  });

  if (project.length === 0) {
    router.push("/");
    return;
  }

  return (
    // should params be passed as a prop in next 13 ??

    <div className="min-h-screen bg-black px-6  text-white">
      <button
        type="button"
        onClick={() => router.push("/")}
        className=" mt-16 p-2 text-3xl underline"
      >
        Back
      </button>
      <h1 className="mt-12 text-center text-6xl uppercase">{project[0].id}</h1>

      <p className="mt-12 text-3xl uppercase text-[#ebebeb]">About</p>
      <p className=" mt-6 text-2xl text-[#d6d6d6]">{project[0].about}</p>

      <p className="mt-12 text-3xl uppercase text-[#ebebeb]">Built with</p>
      <div className="mt-6 grid grid-cols-3 gap-8 text-xl text-[#d6d6d6]">
        {project[0].techStack.map((tech) => {
          return (
            <div
              key={tech}
              className="flex h-[8rem] flex-col items-center justify-between"
            >
              <Image
                className="object-cover"
                src={`/${tech}.png`}
                alt={tech}
                width={50}
                height={50}
              />
              <p className="capitalize">{tech}</p>
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-3xl uppercase text-[#ebebeb]">Links</p>
      <div className="mt-8 flex gap-8">
        <a
          className="flex w-[10rem] items-center justify-center gap-2 rounded bg-gray-200 py-6   text-3xl text-gray-700"
          href={project[0].github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code <BiCodeAlt />
        </a>
        <a
          className="inline-block w-[10rem] rounded bg-[#634eec] py-6 text-center  text-3xl text-white"
          href={project[0].live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </div>

      <p className="mt-12 text-3xl uppercase text-[#ebebeb]">Screeshots</p>
    </div>
  );
};

export default Project;
