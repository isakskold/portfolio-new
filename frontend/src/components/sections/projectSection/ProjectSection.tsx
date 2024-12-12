import { Project } from "./ProjectSection.types";

const projects: Project[] = [
  {
    title: "Vegaway",
    status: "completed",
    images: [{ src: "", alt: "Project Image" }],
    description: [
      "Fullstack group project in school. Vegaway is a fictional vegetarian takeaway application.",
      "Users can create accounts, place orders and view their order history. Staff account can access admin panel to handle incoming orders.",
      "In this project I created the entire backend and AWS configurations. The project uses services from AWS such as API Gateway, DynamoDB, Cognito, S3, CloudFront, Route 53 and Lambda functions. The backend code is written in the serverless framework. I also focused heavily on implementing functionality in the react application.",
      "My group members focused on design, UI and UX. However, we did a lot of pair programming in the frontend code.",
      "Feel free to use the credentials defined at documentation.md in the GitHub repo for access to customer and staff accounts.",
    ],
    skills: ["React", "TypeScript", "AWS"],
    link: "https://www.veg-away.com/",
    gitHub: "https://github.com/Linuszackrisson/vegaway-app",
  },
];

const ProjectSection = () => {
  return (
    <section className="bg-white p-6">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <article key={index} className="bg-gray-400">
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
      ))}
    </section>
  );
};

export default ProjectSection;
