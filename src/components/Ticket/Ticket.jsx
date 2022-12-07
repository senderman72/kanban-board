import React, { useState } from "react";
import "./Ticket.scss";

export default function Ticket({ item, provided, snapshot }) {
  const [showSubTasks, setshowSubTasks] = useState(false);

  function toggleShow() {
    setshowSubTasks(!showSubTasks);
  }

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{ ...provided.draggableProps.style }}
      active={snapshot.isDragging.toString()}
      onClick={toggleShow}
      className="ticket"
    >
      <h3 className="heading-m">{item.title}</h3>
      <p className="body-m">{item.description}</p>
      <p className="body-m">{item.task?.length} subtasks</p>
      <ul>
        {showSubTasks &&
          item.tasks.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </div>
  );
}
