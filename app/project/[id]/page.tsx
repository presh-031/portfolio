import React from "react";
import ProjectLayout from "./layout";

const Project = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  return (
    <ProjectLayout>
      <div>Project</div>
    </ProjectLayout>
  );
};

export default Project;
