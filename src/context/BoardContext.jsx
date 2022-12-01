import React, { createContext, useState } from "react";
import { projectsData } from "./data";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const BoardContext = createContext();

export default function BoardContextProvider({ children }) {
  const [projects, setProjects] = useLocalStorage("projects", projectsData);
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = projects[projectIndex];

  const changeBoard = (index) => {
    setProjectIndex(index);
  };

  const changeCurrentBoard = (board) => {
    projects[projectIndex].board = board;
    setProjects([...projects]);
  };

  const addNewProject = (title) => {
    if (!title) return;

    const project = {
      title: title,
      id: uuidv4(),
      board: [
        {
          name: "Todo",
          items: [],
        },
        {
          name: "Doing",
          items: [],
        },
        {
          name: "Done",
          items: [],
        },
      ],
    };
    setProjects([...projects, project]);
    setProjectIndex(projects.length);
  };

  const createTicket = (ticket) => {
    projects[projectIndex].board.stage1.items.push(ticket);
    setProjects([...projects]);
  };

  const value = {
    projects,
    currentProject,
    changeCurrentBoard,
    changeBoard,
    addNewProject,
    createTicket,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
}
