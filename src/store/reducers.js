const initialState = [];

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          text: payload
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== payload);
    case "UPDATE_TODO":
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    default:
      return state;
  }
};
