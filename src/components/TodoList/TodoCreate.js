import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
// import { useTodoDispatch, useTodoNextId } from "./src/TodoContext";
import { useSelector, useDispatch } from "react-redux";

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 5px;
  padding-right: 32px;
  padding-bottom: 5px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: "CREATE",
      todo: {
        id: id + 1,
        text: value,
        done: false,
      },
    });
    setValue("");
    dispatch({ type: "INCREMENT_ID" });
  };

  return (
    <>
      {
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      }
      <MdAdd />
    </>
  );
}

export default React.memo(TodoCreate);
