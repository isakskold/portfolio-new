import { Project } from "../ProjectSection.types";
import StatusBadge from "../../../utils/StatusBadge";

interface ProjectDetailsProps {
  project: Project; // Define the type of the prop as Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <article className="mt-8 flex w-screen flex-col rounded-2xl bg-greyCustom sm:w-auto">
      {/* Details Header */}
      <div className="flex flex-wrap items-center justify-between p-3">
        {/* Title Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {/* Additional title description if needed */}
        </div>

        {/* Status Section */}
        <StatusBadge status={project.status} />
      </div>

      {/* Skills Section */}
      <ul className="m-3 flex w-fit flex-wrap justify-evenly gap-x-6 self-center rounded-[3.75rem] border-2 border-solid border-black p-3">
        {project.skills.map((skill, index) => (
          <li className="font-semibold" key={index}>
            {skill}
          </li>
        ))}
      </ul>

      {/* Links Section */}
      <div className="mb-3 flex flex-wrap justify-between gap-x-6 px-3">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img className="w-8" src="/linkIcon.svg" alt="Link" />
        </a>
        <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
          <img className="w-8" src="/githubIcon.svg" alt="GitHub" />
        </a>
      </div>

      {/* Main image */}
      <img
        className="rounded-lg"
        src={project.images[0].src}
        alt={project.images[0].alt}
      />

      {/* Description */}
      {project.description.map((paragraph, paragraphIndex) => (
        <p
          key={paragraphIndex}
          className="my-5 px-3 text-sm font-medium sm:text-base"
        >
          {paragraph}
        </p>
      ))}
    </article>
  );
};

export default ProjectDetails;
