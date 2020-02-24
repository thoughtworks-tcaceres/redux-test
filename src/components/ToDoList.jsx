import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todo, deleteHandler, updateHandler }) => {
  return (
    <ul style={{ border: "1px solid green" }}>
      {todo.map(item => {
        return (
          <li key={item.id}>
            <ToDo
              text={item.text}
              id={item.id}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
