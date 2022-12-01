import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import Ticket from "../Ticket/Ticket";
import "./Board.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject, changeCurrentBoard } = useContext(BoardContext);

  function dragEnd(result) {
    //safety fro dragging out of column
    if (!result.destination) return;

    const { destination, source } = result;

    if (source.droppableId !== destination.droppableId) {
      //columns
      const sourceColumn = currentProject.board[source.droppableId];
      const destinationColumn = currentProject.board[destination.droppableId];
      //Items in each column
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];
      //removing item and adding item to destination
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);
      //change data to new context information
      changeCurrentBoard({
        ...currentProject.board,
        [destination.droppableId]: {
          ...destinationColumn,
          items: [...destinationItems],
        },
        [source.droppableId]: {
          ...sourceColumn,
          items: [...sourceItems],
        },
      });
    } else {
      const sourceColumn = currentProject.board[source.droppableId];
      const copiedItems = [...sourceColumn.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      changeCurrentBoard({
        board: {
          ...changeCurrentBoard.board,
          [source.droppableId]: {
            ...sourceColumn,
            items: [copiedItems],
          },
        },
      });
    }
  }

  return (
    <div className="board">
      <DragDropContext onDragEnd={(res) => dragEnd(res)}>
        {Object.entries(currentProject.board).map(([id, column], idx) => {
          return (
            <div id={idx}>
              <Droppable key={id} droppableId={id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      active={snapshot.isDraggingOver.toString()}
                      ref={provided.innerRef}
                      className="board-column"
                    >
                      <div className="board-title">
                        <div
                          className={`board-title-icon ${column.name}`}
                        ></div>
                        <h4 className="heading-s">{column.name}</h4>
                      </div>
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            index={index}
                            key={item.id}
                            draggableId={item.id}
                          >
                            {(provided, snapshot) => {
                              return (
                                <Ticket
                                  provided={provided}
                                  snapshot={snapshot}
                                  data={item}
                                />
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
