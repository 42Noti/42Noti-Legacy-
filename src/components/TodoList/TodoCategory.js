import React from "react";
import styled from "styled-components";
import TodoCatItem from "./TodoCatItem";

const TodoCatBlock = styled.div`
  padding: 1px 1px;
  padding-bottom: 1px;
  overflow-y: auto;
`;

function TodoCategory() {
  return (
    <TodoCatBlock>
      <TodoCatItem name="42" />
      <TodoCatItem name="공부계획" />
      <TodoCatItem name="건강관리" />
    </TodoCatBlock>
  );
}

export default TodoCategory;
