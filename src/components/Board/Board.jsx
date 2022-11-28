import React from "react";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";

const subTasks = [
  {
    task: "Tjena",
  },
  {
    task: "Tjabba",
  },
];

const testTicket = {
  title: "Firstone",
  description: "description",
  tasks: subTasks,
};

export default function Board() {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Todo"></div>
          <h4 className="heading-s">Todo</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Doing"></div>
          <h4 className="heading-s">Doing</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon Done"></div>
          <h4 className="heading-s">Done</h4>
        </div>
        <Ticket data={testTicket} />
      </div>
    </div>
  );
}
