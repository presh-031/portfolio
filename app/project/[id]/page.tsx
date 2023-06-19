"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/app/data";
import Image from "next/image";
import { BiCodeAlt, BiArrowBack } from "react-icons/bi";
import { useState } from "react";

const Project = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState("/css.png");

  const project = projects.filter((project) => {
    return project.id === params.id;
  });

  if (project.length === 0) {
    router.push("/");
    return;
  }
  const handleImageClick = (src: string) => {
    setCurrentImage(src);
  };

  return (
    // should params be passed as a prop in next 13 ??

    <div className="min-h-screen bg-black px-6 py-16  text-white">
      <button
        type="button"
        onClick={() => router.back()}
        className=" flex items-center py-4 pr-4 text-3xl"
      >
        <BiArrowBack />
        <span>Back</span>
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
              <p className="text-center capitalize">{tech}</p>
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

      {/* <p className="mt-12 text-3xl uppercase text-[#ebebeb]">Screenshots</p>
      <Image
        className="mt-8 h-[20rem] w-full"
        src={currentImage}
        alt=""
        width={100}
        height={200}
      />

      <div className="mt-8 grid grid-cols-3 gap-4">
        <Image
          onClick={() => {
            handleImageClick("/css.png");
          }}
          src={"/css.png"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          onClick={() => {
            handleImageClick("/html.png");
          }}
          src={"/html.png"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          onClick={() => {
            handleImageClick("/javascript.png");
          }}
          src={"/javascript.png"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          onClick={() => {
            handleImageClick("/react.png");
          }}
          src={"/react.png"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          onClick={() => {
            handleImageClick("/tailwind.png");
          }}
          src={"/tailwind.png"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          onClick={() => {
            handleImageClick("/sass.png");
          }}
          src={"/sass.png"}
          alt=""
          width={100}
          height={100}
        />
      </div> */}
    </div>
  );
};

export default Project;
