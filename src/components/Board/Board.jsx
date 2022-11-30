import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

export default function Board() {
  const { currentProject } = useContext(BoardContext);

  return (
    <div className="board">
      {currentProject.board.map((column, index) => {
        return (
          <div className="board-column" key={index}>
            <div className="board-title">
              <div className={`board-title-icon ${column.name}`}></div>
              <h4 className="heading-s">{column.name}</h4>
            </div>
            {column.tickets.map((ticket, index) => {
              return <Ticket data={ticket} key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
