import { combineReducers, createStore } from "redux";

const idReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_ID":
      return state + 1;
    default:
      return state;
  }
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      //   throw new Error(`Unhandled action type: ${action.type}`);
      return state;
  }
};

const rootReducer = combineReducers({
  id: idReducer,
  toDo: todoReducer,
});

const store = createStore(rootReducer);

export default store;
