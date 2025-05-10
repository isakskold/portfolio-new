export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: {
    url: string;
    alt: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio CMS",
    description:
      "A content management system built for managing portfolio data. Features include user authentication with AWS Cognito, secure API endpoints, and a modern Next.js frontend. The system allows users to manage their portfolio projects, skills, and other content through a centralized dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AWS",
      "DynamoDB",
      "Cognito",
      "Vercel",
      "Zustand",
    ],
    images: [
      {
        url: "/cms/dashboard.png",
        alt: "CMS Dashboard interface",
      },
      {
        url: "/cms/editPage.png",
        alt: "Edit page interface",
      },
      {
        url: "/cms/settings.png",
        alt: "Settings page interface",
      },
      {
        url: "/cms/guide.png",
        alt: "Guide page interface",
      },
    ],
    githubUrl: "https://github.com/isakskold/cms",
    liveUrl: "https://cms-ten-snowy.vercel.app",
  },
  {
    title: "Gz000 Content Creator Website (Work in progress)",
    description:
      "A modern website for a content creator friend of mine, built with Next.js and TypeScript. Features a clean, responsive design with a focus on showcasing content and engaging with the audience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    images: [
      {
        url: "/gz000/landingPage.png",
        alt: "GZ000 website homepage",
      },
    ],
    githubUrl: "https://github.com/isakskold/gz000",
    liveUrl: "https://gz000.vercel.app",
  },
  {
    title: "Vegaway Restaurant App",
    description:
      "A full-stack restaurant application built as a school project. I led the backend development, implementing AWS Lambda functions, DynamoDB integration, and secure API endpoints. The app features order management with status updates, staff dashboard for order processing, and customer ordering system.",
    technologies: ["TypeScript", "AWS", "DynamoDB", "Cognito", "React", "CSS"],
    images: [
      {
        url: "/vegaway/landingPage.png",
        alt: "Vegaway landing page screenshot",
      },
      {
        url: "/vegaway/staffDash.png",
        alt: "Vegaway staff dashboard screenshot",
      },
      {
        url: "/vegaway/orderConfirmation.png",
        alt: "Vegaway order confirmation page screenshot",
      },
      {
        url: "/vegaway/editOrder.png",
        alt: "Vegaway edit order page screenshot",
      },
      {
        url: "/vegaway/orderHistory.png",
        alt: "Vegaway order history page screenshot",
      },
      {
        url: "/vegaway/orders.png",
        alt: "Vegaway orders page screenshot",
      },
    ],
    githubUrl: "https://github.com/isakskold/vegaway-app",
    liveUrl: "https://www.veg-away.com",
  },
];
