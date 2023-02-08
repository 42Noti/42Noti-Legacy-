import { TodoProvider } from "../components/TodoList/src/TodoContext";
import TodoTemplate from "../components/TodoList/TodoTemplate";
import TodoHead from "../components/TodoList/TodoHead";
import TodoList from "../components/TodoList/TodoList";
import TodoCreate from "../components/TodoList/TodoCreate";
import Calendar from "../components/TodoList/Calendar";
import TodoCategory from "../components/TodoList/TodoCategory";

export default function Home() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <Calendar />
        <TodoCategory />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}
