import { create } from "zustand";
import { Project } from "../components/sections/projectSection/ProjectSection.types";

interface ActiveProjectState {
  activeProject: Project | null; // State can either be a Project object or null
  setActiveProject: (project: Project | null) => void; // Setter function to update the state
}

const useActiveProjectStore = create<ActiveProjectState>((set) => ({
  activeProject: null, // Initial state is null
  setActiveProject: (project) => set({ activeProject: project }), // Update the activeProject state
}));

export default useActiveProjectStore;
