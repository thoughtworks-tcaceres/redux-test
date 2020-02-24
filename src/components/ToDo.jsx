import React, { useState } from "react";

const ToDo = ({ text, id, deleteHandler, updateHandler }) => {
  const [details, setDetails] = useState(text);
  return (
    <div style={{ border: "1px solid red" }}>
      <button onClick={() => deleteHandler(id)}>DELETE</button>
      <button onClick={() => updateHandler(id, details)}>UPDATE</button>
      <input value={details} onChange={e => setDetails(e.target.value)} />
    </div>
  );
};

export default ToDo;
