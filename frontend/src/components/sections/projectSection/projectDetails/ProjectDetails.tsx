import { Project } from "../ProjectSection.types";

interface ProjectDetailsProps {
  project: Project; // Define the type of the prop as Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <article className="bg-gray-400">
      {/* Title */}
      <h3>{project.title}</h3>

      {/* Status */}
      <p>Status: {project.status}</p>

      {/* Images */}
      {project.images.map((image, imageIndex) => (
        <img key={imageIndex} src={image.src} alt={image.alt} />
      ))}

      {/* Description */}
      {project.description.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex} className="my-5">
          {paragraph}
        </p>
      ))}

      {/* Skills */}
      <ul className="flex justify-evenly gap-6">
        {project.skills.map((skill, skillIndex) => (
          <li key={skillIndex}>{skill}</li>
        ))}
      </ul>

      {/* Links */}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </article>
  );
};

export default ProjectDetails;
