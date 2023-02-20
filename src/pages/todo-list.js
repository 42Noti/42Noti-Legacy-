import Calendar from "@/components/TodoList/Calendar";
import TodoCategory from "@/components/TodoList/TodoCategory";
import TodoList from "@/components/TodoList/TodoList";
import TodoCreate from "@/components/TodoList/TodoCreate";

const ToDoList = () => {
  return (
    <>
      <div className="todo-container">
        <Calendar />
        <TodoCategory />
        <TodoList />
        <TodoCreate />
      </div>
      <style jsx>
        {`
          .todo-container {
            // 100%가 아니라 90%, why?
            height: 90%;
            padding-top: 10px;
            position: relative;
          }

          @media screen and (min-width: 650px) {
            .todo-container {
              padding-top: 25px;
            }
          }
        `}
      </style>
    </>
  );
};

export default ToDoList;
