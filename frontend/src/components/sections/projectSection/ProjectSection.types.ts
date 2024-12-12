interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  status: "completed" | "in-progress" | "archived";
  images: ProjectImage[];
  description: string[];
  skills: string[];
  link: string;
  gitHub: string;
}
