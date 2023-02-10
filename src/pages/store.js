import { combineReducers, createStore } from "redux";

const idReducer = (state = 4, action) => {
  switch (action.type) {
    case "INCREMENT_ID":
      return state + 1;
    default:
      return state;
  }
};

const todoReducer = (
  state = [
    {
      id: 1,
      content: "서브젝트 읽기",
      isDone: true,
    },
    {
      id: 2,
      content: "파이프 개념 공부",
      isDone: true,
    },
    {
      id: 3,
      content: "동료학습",
      isDone: false,
    },
    {
      id: 4,
      content: "평가 받기",
      isDone: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
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
