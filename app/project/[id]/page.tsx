"use client";
import React from "react";
import ProjectLayout from "./layout";

import { useRouter } from "next/navigation";
import { projects } from "@/app/data";

const Project = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const project = projects.filter((project) => {
    return project.id === params.id;
  });

  if (project.length === 0) {
    router.push("/");
  }
  return (
    // should params be passed as a prop in next 13 ??
    <ProjectLayout params={params.id}>
      <div className="min-h-screen bg-black px-6 uppercase text-white">
        <button
          type="button"
          onClick={() => router.back()}
          className=" mt-16 text-3xl underline"
        >
          Back
        </button>
        <h1 className="mt-12 text-center text-6xl">Audiophile</h1>
      </div>
    </ProjectLayout>
  );
};

export default Project;
