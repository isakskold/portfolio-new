"use client";
import React, { useState } from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

type Section = "about" | "projects" | "contact";

export default function SectionSelection() {
  const [selectedSection, setSelectedSection] = useState<Section>("projects");
  const [underlineStyle, setUnderlineStyle] = useState({
    left: "40%",
    width: "20%",
  });

  const sections: Section[] = ["about", "projects", "contact"];

  const handleSectionClick = (section: Section, index: number) => {
    setSelectedSection(section);
    const sectionWidth = 33.33; // Width of each section
    const underlineWidth = 20; // Width of the underline
    const left = `${
      (sectionWidth - underlineWidth) / 2 + index * sectionWidth
    }%`;
    setUnderlineStyle({ left, width: "20%" });
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <section className="mt-8 flex flex-col items-center">
      <span className="text-2xl font-bold tracking-wider text-neutral-300 mb-6">
        Portfolio
      </span>
      <div className="relative w-full max-w-2xl mb-8">
        <nav className="flex justify-center items-center mb-4">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section, index)}
              className={`w-1/3 px-4 py-2 text-lg font-semibold transition-all transform ${
                selectedSection === section
                  ? "text-cyan-400 scale-110"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        <div
          className="absolute bottom-0 h-1 bg-cyan-400 rounded-full transition-all duration-300 ease-in-out"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>

      {renderContent()}
    </section>
  );
}
