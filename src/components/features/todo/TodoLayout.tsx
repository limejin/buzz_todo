import { TodoProvider } from "@/contexts/todo/TodoProvider";
import { Outlet } from "react-router-dom";

export default function TodoLayout() {
  return (
    <TodoProvider>
      <Outlet />
      {/* TodoPage, TodoDetailPage */}
    </TodoProvider>
  );
}
