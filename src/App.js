import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import { deleteToDo, addToDo, updateToDo } from "./store/actions";
import { toDoSelector } from "./store/selectors";
import ToDoList from "./components/ToDoList";

export default function App() {
  const todo = useSelector(toDoSelector);
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState("");

  const updateHandler = (id, isCompleted, text) =>
    dispatch(updateToDo(id, isCompleted, text));
  const addHandler = text => dispatch(addToDo(text));
  const deleteHandler = id => dispatch(deleteToDo(id));

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <button onClick={() => addHandler(newToDo)}>+</button>
      <input value={newToDo} onChange={e => setNewToDo(e.target.value)} />
      <ToDoList
        todo={todo}
        updateHandler={updateHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}
