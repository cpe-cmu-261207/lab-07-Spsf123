import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [Ismouseover, setImouseOver] = useState(false);
  const handlemover = () => {
    setImouseOver(true);
  };
  const handlemout = () => {
    setImouseOver(false);
  };
  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={handlemover}
      onMouseOut={handlemout}
    >
      <span
        style={
          props.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "" }
        }
        className="me-auto"
      >
        {props.title}
      </span>
      {Ismouseover && (
        <>
          <button className="btn btn-success" onClick={() => props.onMark()}>
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveup()}
          >
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMovedown()}
          >
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.onDelete()}>
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
