import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  // &:hover {
  //   ${Remove} {
  //     display: initial;
  //   }
  // }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.isDone &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Content = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.isDone &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, isDone, content }) {
  const dispatch = useDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <TodoItemBlock>
      <CheckCircle isDone={isDone} onClick={onToggle}>
        {isDone && <MdDone />}
      </CheckCircle>
      <Content isDone={isDone}>{content}</Content>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
