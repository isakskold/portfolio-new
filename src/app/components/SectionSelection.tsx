"use client";
import React, { useState } from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import NavButton from "./NavButton";

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
    <section className=" flex flex-col items-center">
      <div className="relative bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-800 rounded-xl px-8 py-3 mb-6 before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-cyan-400/20 before:via-cyan-400/10 before:to-cyan-400/20 before:-z-10 before:blur-[1px]">
        <h2 className="text-2xl font-bold tracking-wider text-cyan-400 relative z-10">
          Portfolio
        </h2>
      </div>
      <div className="relative w-full max-w-2xl mb-8">
        <nav className="flex justify-center items-center mb-4">
          {sections.map((section, index) => (
            <NavButton
              key={section}
              onClick={() => handleSectionClick(section, index)}
              active={selectedSection === section}
              className="w-1/3"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NavButton>
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
