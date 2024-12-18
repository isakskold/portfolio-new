import { Project } from "../components/sections/projectSection/ProjectSection.types";

/* Boilerplate object

  title: "",
  status: "",
  images: [{ src: "", alt: "Project Image" }],
  description: [],
  skills: [],
  link: "",
  gitHub: "", 
*/

export const projects: Project[] = [
  {
    title: "Vegaway",
    status: "Completed",
    images: [{ src: "/vegawayhome.PNG", alt: "Project Image" }],
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
  {
    title: "Portfolio",
    status: "Archived",
    images: [{ src: "/portfolio.PNG", alt: "Project Image" }],
    description: [
      "My first portfolio website. I decided to stop working on this and focus on my new portfolio instead.",
    ],
    skills: ["React", "Javascript"],
    link: "https://isakskold.github.io/portfolio/",
    gitHub: "https://github.com/isakskold/portfolio",
  },
];
