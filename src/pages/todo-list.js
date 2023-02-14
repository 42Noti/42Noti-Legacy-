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
          // total height : 700px
          // nav-bar(56px)
          // calendar(300 + 25px)
          // catergory(56px)
          // list(207px)
          // create(56px)
          .todo-container {
            height: 636px;
          }
        `}
      </style>
    </>
  );
};

export default ToDoList;
