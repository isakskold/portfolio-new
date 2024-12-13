import ProjectDetails from "./projectDetails/ProjectDetails";
import ProjectCard from "./projectCard/ProjectCard";
import { projects } from "../../../data/projects"; // Projects data

const ProjectSection = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-8">Projects</h2>

      {/* Render Project Cards */}
      <div className="flex justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Render project details here */}
    </section>
  );
};

export default ProjectSection;
