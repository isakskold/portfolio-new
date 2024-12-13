interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  status: "Completed" | "In-progress" | "Archived";
  images: ProjectImage[];
  description: string[];
  skills: string[];
  link: string;
  gitHub: string;
}
