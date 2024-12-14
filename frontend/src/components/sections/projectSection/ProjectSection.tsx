import ProjectDetails from "./projectDetails/ProjectDetails";
import ProjectCard from "./projectCard/ProjectCard";
import { projects } from "../../../data/projects"; // Projects data

const ProjectSection = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="mb-8">Projects</h2>

      {/* Render Project Cards. Horizontal slider for responsiveness */}
      <div className="flex w-screen overflow-x-auto px-12 py-2">
        <div className="ml-auto mr-auto flex w-max gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Render project details here */}
    </section>
  );
};

export default ProjectSection;
