import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import TodoCatItem from "./TodoCatItem";

const TodoCatBlock = styled.div`
  height: 7%;
  overflow: auto;
`;

function TodoCategory() {
  const todoCat = useSelector((state) => state.category);
  return (
    <TodoCatBlock>
      {todoCat.map((category) => (
        <TodoCatItem
          key={category.id}
          id={category.id}
          name={category.name}
          color={category.color}
        />
      ))}
    </TodoCatBlock>
  );
}

export default TodoCategory;
