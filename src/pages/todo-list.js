import Calendar from "@/components/TodoList/Calendar";
import TodoCategory from "@/components/TodoList/TodoCategory";
import TodoList from "@/components/TodoList/TodoList";
import TodoCreate from "@/components/TodoList/TodoCreate";

const ToDoList = () => {
  return (
    <div className="global-container">
      <Calendar />
      <TodoCategory />
      <TodoList />
      <TodoCreate />
    </div>
  );
};

export default ToDoList;
