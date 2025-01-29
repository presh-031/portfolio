"use client";

import "../../globals.css";

import { BiArrowBack, BiCodeAlt } from "react-icons/bi";
import { league_Gothic, space_Grotesk } from "@/app/fonts";

import Gallery from "@/components/Gallery";
import Image from "next/image";
import React from "react";
import { projects } from "@/app/data";
import { useRouter } from "next/navigation";

const Project = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const project = projects.filter((project) => {
    return project.id === params.id;
  });

  if (!project.length) {
    router.push("/");
    return;
  }

  console.log(project);

  return (
    <div
      className={`${space_Grotesk.className} min-h-screen bg-black  py-16 text-white  `}
    >
      <div className="mx-auto max-w-[1050px] ">
        <div className=" px-6 sm:px-12 lg:mb-12 lg:flex lg:items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center py-4 pr-4 text-3xl"
          >
            <BiArrowBack />
            <span>Back</span>
          </button>
          <h1 className=" hidden text-center text-6xl uppercase lg:block lg:flex-1">
            {project[0].id}
          </h1>
        </div>

        <div className="container flex flex-col  lg:flex-row lg:gap-12">
          <div className="parent  flex h-fit  flex-col lg:flex-1 ">
            {/* about section */}
            <section className="px-6 sm:px-12 lg:flex-1">
              <h1 className="mt-12 text-center text-6xl uppercase lg:hidden">
                {project[0].id}
              </h1>
              <div>
                <p
                  className={` ${league_Gothic.className} mt-12 text-3xl uppercase text-[#ebebeb]`}
                >
                  About
                </p>
                <p className=" mt-6 text-2xl text-[#d6d6d6]">
                  {project[0].about}
                </p>
              </div>
            </section>

            {/* screenshots section for mobile */}
            <section className="min-[540px]:px-6 sm:px-12 lg:hidden lg:flex-1">
              <p
                className={`${league_Gothic.className} mb-6 mt-12 px-6 text-3xl uppercase text-[#ebebeb] sm:px-12`}
              >
                Screenshots
              </p>
              <Gallery route={params.id} screenshots={project[0].screenshots} />
            </section>

            {/* links section */}
            <section className="px-6 sm:px-12 lg:flex-1">
              {" "}
              <p
                className={` ${league_Gothic.className} mt-12 text-3xl uppercase text-[#ebebeb]`}
              >
                Links
              </p>
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
            </section>

            {/* tech stack section */}
            <section className="px-6 sm:px-12">
              <p
                className={` ${league_Gothic.className} mt-12 text-3xl uppercase text-[#ebebeb]`}
              >
                Built with
              </p>
              <div className="mt-6 grid grid-cols-3 gap-8  text-xl text-[#d6d6d6]">
                {project[0].techStack.map((tech) => {
                  return (
                    <div
                      key={tech}
                      className="flex h-[8rem] flex-col items-center justify-between "
                    >
                      <Image
                        className="object-cover"
                        src={`/${tech}.png`}
                        alt={tech}
                        width={50}
                        height={50}
                        loading="eager"
                      />
                      <p className="text-center capitalize">{tech}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* screenshots section */}
          <div className=" hidden  lg:block lg:flex-1">
            <p className="mb-6 mt-12 text-3xl uppercase text-[#ebebeb]">
              Screenshots
            </p>
            <Gallery route={params.id} screenshots={project[0].screenshots} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
