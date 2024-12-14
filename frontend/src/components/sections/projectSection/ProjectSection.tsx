import ProjectDetails from "./projectDetails/ProjectDetails";
import ProjectCard from "./projectCard/ProjectCard";
import { projects } from "../../../data/projects"; // Projects data
import useActiveProjectStore from "../../../stores/useActiveProjectStore";

const ProjectSection = () => {
  const { activeProject } = useActiveProjectStore();

  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="mb-8">Projects</h2>

      {/* Render Project Cards. Horizontal slider for responsiveness */}
      <div className="ove rflow-x-auto flex w-screen px-12 py-2">
        <div className="ml-auto mr-auto flex w-max gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Project details */}
      {activeProject && <ProjectDetails project={activeProject} />}
    </section>
  );
};

export default ProjectSection;
