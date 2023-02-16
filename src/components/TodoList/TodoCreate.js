import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const InsertFormPositioner = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  // padding-top: 5px;
  padding-right: 32px;
  // padding-bottom: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  height: 70%;
  outline: none;
  font-size: 16px;
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
        content: value,
        isDone: false,
      },
    });
    setValue("");
    dispatch({ type: "INCREMENT_ID" });
  };

  return (
    <>
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
    </>
  );
}

export default React.memo(TodoCreate);
