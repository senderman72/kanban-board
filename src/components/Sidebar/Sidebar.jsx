import React, { useContext } from "react";
import { BoardContext } from "../../context/BoardContext";
import Links from "../Links/Links";
import "./Sidebar.scss";

export default function Sidebar() {
  const { test } = useContext(BoardContext);

  return (
    <div className="sidebar">
      <p>All Board (2)</p>
      <Links />
    </div>
  );
}
