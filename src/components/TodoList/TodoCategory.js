import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import TodoCatItem from "./TodoCatItem";

const TodoCatBlock = styled.div`
  padding: 1px 1px;
  padding-bottom: 1px;
  overflow-y: auto;
`;

function TodoCategory() {
  const todoCat = useSelector((state) => state.category);
  return (
    <TodoCatBlock>
      {todoCat.map((category) => (
        <TodoCatItem
          id={category.id}
          name={category.name}
          color={category.color}
        />
      ))}
    </TodoCatBlock>
  );
}

export default TodoCategory;
