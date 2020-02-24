export const deleteToDo = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const addToDo = text => {
  return {
    type: "ADD_TODO",
    payload: text
  };
};

export const updateToDo = (id, text) => {
  return {
    type: "UPDATE_TODO",
    payload: { id, text }
  };
};
