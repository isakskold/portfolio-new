"use client";

import React, { useState } from "react";

const skills = [
  {
    category: "Frontend Development",
    items: [
      {
        title: "Next.js & React",
        description:
          "Expertise in building modern, scalable web applications using Next.js and React. Implementing efficient server and client components for optimal rendering strategies, leveraging React Server Components for improved performance. Creating reusable components, managing complex state, and maintaining a modular codebase.",
      },
      {
        title: "Tailwind CSS",
        description:
          "Creating beautiful, responsive UIs using Tailwind CSS, implementing custom designs with utility-first approach and maintaining consistent design systems.",
      },
      {
        title: "State Management",
        description:
          "Implementing efficient state management solutions using Zustand and custom hooks for complex application state handling.",
      },
      {
        title: "Design and Figma",
        description:
          "Although I do not specialize in UI/UX, I have experience working with designers and using Figma myself. I mostly use Figma for creating flow charts to explain code logic and synchronize teams.",
      },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      {
        title: "Cloud Platforms",
        description:
          "Building serverless applications using AWS Amplify and Firebase, implementing authentication with Cognito and Firebase Auth, creating RESTful APIs with API Gateway, and managing data with DynamoDB and Firestore for scalable solutions.",
      },
      {
        title: "NoSQL Databases",
        description:
          "Working with DynamoDB for scalable, flexible database solutions, implementing efficient data models and optimizing query performance.",
      },
      {
        title: "API Development",
        description:
          "Designing and implementing RESTful APIs, handling authentication, rate limiting, and ensuring secure data exchange between services.",
      },
      {
        title: "CI/CD & Deployment",
        description:
          "Setting up continuous integration and deployment pipelines, automating testing and deployment processes for reliable software delivery.",
      },
    ],
  },
];

type SkillCategory = "Frontend Development" | "Backend & Cloud";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(
    "Frontend Development"
  );
  const [underlineStyle, setUnderlineStyle] = useState({
    left: "0%",
    width: "50%",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCategoryClick = (category: SkillCategory, index: number) => {
    setSelectedCategory(category);
    const sectionWidth = 50; // Width of each section
    const underlineWidth = 50; // Width of the underline
    const left = `${index * sectionWidth}%`;
    setUnderlineStyle({ left, width: `${underlineWidth}%` });
    setOpenIndex(null); // Close all dropdowns when switching category
  };

  const handleDropdownClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const selectedSkills = skills.find(
    (skill) => skill.category === selectedCategory
  );

  return (
    <div className="flex flex-col items-center mt-8 w-full px-2">
      <span className="text-2xl font-bold tracking-wider text-neutral-300 mb-6">
        Technical Expertise
      </span>

      <div className="relative w-full max-w-xl mb-4">
        <nav className="flex justify-center items-center mb-2">
          {skills.map((skill, index) => (
            <button
              key={skill.category}
              onClick={() =>
                handleCategoryClick(skill.category as SkillCategory, index)
              }
              className={`w-1/2 px-2 py-1 text-base font-semibold transition-all transform ${
                selectedCategory === skill.category
                  ? "text-cyan-400 scale-105"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {skill.category}
            </button>
          ))}
        </nav>
        <div
          className="absolute bottom-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ease-in-out"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="flex flex-col gap-1">
          {selectedSkills?.items.map((skill, skillIndex) => {
            const isOpen = openIndex === skillIndex;
            return (
              <div key={skillIndex} className="w-full">
                <button
                  className={`flex items-center justify-between w-full py-2 px-3 focus:outline-none border border-slate-700 rounded-lg transition-colors
                    ${
                      isOpen
                        ? "bg-slate-900"
                        : "bg-slate-800/80 hover:bg-slate-800/90"
                    }
                  `}
                  onClick={() => handleDropdownClick(skillIndex)}
                  aria-expanded={isOpen}
                  aria-controls={`dropdown-content-${skillIndex}`}
                  style={{ minHeight: 40 }}
                >
                  <span className="text-base font-medium text-neutral-200 text-left">
                    {skill.title}
                  </span>
                  <span
                    className={`ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 8L10 12L14 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-neutral-400"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`dropdown-content-${skillIndex}`}
                  className={`px-3 text-neutral-400 text-sm leading-relaxed transition-all duration-200 ease-in-out overflow-hidden rounded-b-lg border-x border-b border-slate-700
                    bg-slate-900/90
                    ${isOpen ? "opacity-100 py-2" : "max-h-0 opacity-0 py-0"}
                  `}
                  style={{
                    transitionProperty: "opacity, padding",
                  }}
                >
                  {skill.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
