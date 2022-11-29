import React, { createContext, useState } from "react";
import { projectsData } from "./data";

export const BoardContext = createContext();

export default function BoardContextProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const value = {
    projects,
    currentProject,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
