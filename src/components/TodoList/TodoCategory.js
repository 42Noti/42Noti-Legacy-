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
      <TodoCatItem text="42" />
      <TodoCatItem text="공부계획" />
      <TodoCatItem text="건강관리" />
    </TodoCatBlock>
  );
}

export default TodoCategory;
