import { Project } from "../ProjectSection.types";
import useActiveProjectStore from "../../../../stores/useActiveProjectStore";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { setActiveProject } = useActiveProjectStore();

  return (
    <div className="w-52 flex-shrink-0 rounded-2xl bg-greyCustom shadow-[0_-2px_12px_rgba(255,255,255,0.4),0_3px_6px_rgba(255,255,255,0.3)] sm:w-60 md:w-72">
      {/* Card "Header" */}
      <div
        className="flex cursor-pointer items-center justify-between p-3"
        onClick={() => setActiveProject(project)}
      >
        <h3 className="text-base font-bold sm:text-lg md:text-xl">
          {project.title}
        </h3>
      </div>

      {/* Display the first image in the project object */}
      {project.images && project.images.length > 0 && (
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          className="h-40 w-full rounded-lg object-cover object-center sm:h-48 md:h-52"
        />
      )}

      {/* Card "Footer" */}
      <div className="flex items-center justify-between p-3">
        <span
          className={`rounded-[3.75rem] border-2 border-solid border-black p-2 text-xs font-semibold sm:text-base ${
            /* Conditionally set background color */
            project.status === "Completed"
              ? "bg-green-500"
              : project.status === "Archived"
                ? "bg-red-500"
                : project.status === "In-progress"
                  ? "bg-yellow-500"
                  : ""
          }`}
        >
          {project.status}
        </span>
        {/* Link icon */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-fit"
        >
          <img src="/linkIcon.svg" alt="Link" className="h-auto w-8" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
