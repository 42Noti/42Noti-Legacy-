import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

const TodoListBlock = styled.div`
  height: 40%;
  overflow: auto;
`;

function TodoList() {
  const todos = useSelector((state) => state.toDo);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isDone={todo.isDone}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
