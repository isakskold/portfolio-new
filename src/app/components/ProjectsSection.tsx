"use client";
import React, { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface Project {
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

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  useEffect(() => {
    const modalOpen = selectedProject !== null || selectedImageIndex !== null;
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedImageIndex]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(null);
  };

  const handleImageClick = (e: React.MouseEvent, imageUrl: string) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const idx = selectedProject.images.findIndex((img) => img.url === imageUrl);
    setSelectedImageIndex(idx !== -1 ? idx : 0);
  };

  const handleImagePreviewClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex(null);
    setSlideDirection(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? selectedProject.images.length - 1 : prev - 1;
    });
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === selectedProject.images.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="flex flex-col items-center justify-center mb-24 max-w-xl w-full mx-auto">
      <div className="relative flex flex-col items-center">
        <div
          key={currentProjectIndex}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 shadow-2xl flex flex-col gap-3 relative cursor-pointer transition-colors border border-slate-700 hover:border-cyan-300 pt-4 w-full min-w-0"
          onClick={() => handleProjectClick(projects[currentProjectIndex])}
        >
          <div className="relative flex items-center w-full mb-4 h-10">
            <button
              className="absolute left-0 text-white text-3xl bg-slate-700 bg-opacity-70 rounded-full p-2 hover:bg-slate-600 cursor-pointer z-10"
              onClick={handlePrevProject}
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>
            <span className="mx-auto text-slate-300 text-sm font-semibold">
              Project {currentProjectIndex + 1} of {projects.length}
            </span>
            <button
              className="absolute right-0 text-white text-3xl bg-slate-700 bg-opacity-70 rounded-full p-2 hover:bg-slate-600 cursor-pointer z-10"
              onClick={handleNextProject}
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>
          </div>
          <span
            className="text-lg font-bold text-cyan-400 block"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {projects[currentProjectIndex].title}
          </span>
          <span className="text-slate-300 text-sm mb-2 line-clamp-4">
            {projects[currentProjectIndex].description}
          </span>
          <div className="flex gap-2 w-full rounded-lg min-w-0">
            {projects[currentProjectIndex].images
              .slice(0, 2)
              .map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className="flex-1 w-0 h-32 object-cover rounded shadow cursor-pointer hover:opacity-90 transition-opacity aspect-video min-w-0"
                />
              ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 max-h-8 overflow-hidden">
            {projects[currentProjectIndex].technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-600 rounded-full text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <a
              href={projects[currentProjectIndex].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
            {projects[currentProjectIndex].liveUrl && (
              <a
                href={projects[currentProjectIndex].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-white text-xl bg-slate-700 bg-opacity-70 rounded-full p-2 hover:bg-slate-600 cursor-pointer"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-slate-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-slate-700 rounded-full text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow cursor-pointer transition-transform duration-200 hover:scale-105 border border-transparent hover:border-cyan-300"
                  onClick={(e) => handleImageClick(e, image.url)}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                View on GitHub
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImageIndex !== null && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleImagePreviewClose}
        >
          <div className="relative w-full h-full max-w-4xl mx-auto">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute right-4 top-4 text-white text-xl bg-slate-700 bg-opacity-70 rounded-full p-2 hover:bg-slate-600 cursor-pointer z-20"
                onClick={handleImagePreviewClose}
                aria-label="Close image preview"
              >
                <FaTimes />
              </button>
              <div
                className="flex transition-transform duration-300 ease-in-out w-full h-full"
                style={{
                  transform: `translateX(-${(selectedImageIndex ?? 0) * 100}%)`,
                }}
              >
                {selectedProject.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl bg-slate-700 bg-opacity-70 rounded-full p-2 hover:bg-slate-600 cursor-pointer"
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl bg-slate-700 bg-opacity-70 rounded-full p-2 hover:bg-slate-600 cursor-pointer"
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
