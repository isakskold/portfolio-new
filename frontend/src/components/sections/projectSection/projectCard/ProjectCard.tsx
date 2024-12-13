import { Project } from "../ProjectSection.types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-md bg-gray-200">
      {/* Title */}
      <h3 className="text-xl font-bold">{project.title}</h3>

      {/* Display the first image */}
      {project.images && project.images.length > 0 && (
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          className="my-2 rounded"
        />
      )}

      {/* Card "Footer" */}
      <div className="flex justify-between">
        <span>{project.status}</span>

        {/* Button that sets what project should be shown in detail */}
        <button>See more</button>
      </div>
    </div>
  );
};

export default ProjectCard;
