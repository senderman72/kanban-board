import React, { createContext, useState } from "react";
import { projectsData } from "./data";
import { v4 as uuidv4 } from "uuid";

export const BoardContext = createContext();

export default function BoardContextProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = projects[projectIndex];

  const changeBoard = (index) => {
    setProjectIndex(index);
  };

  const addNewProject = (title) => {
    if (!title) return;

    const project = {
      title: title,
      id: uuidv4(),
      board: [
        {
          name: "Todo",
          tickets: [],
        },
        {
          name: "Doing",
          tickets: [],
        },
        {
          name: "Done",
          tickets: [],
        },
      ],
    };
    setProjects([...projects, project]);
    setProjectIndex(projects.length);
  };

  const createTicket = (ticket) => {
    projects[projectIndex].board[0].tickets.push(ticket);
    setProjects([...projects]);
  };

  const value = {
    projects,
    currentProject,
    changeBoard,
    addNewProject,
    createTicket,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
