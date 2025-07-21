import { fetchTodos } from "@/api/todo";
import TodoHeader from "@/components/features/todo/TodoHeader";
import TodoList from "@/components/features/todo/TodoList";
import { useTodo } from "@/contexts/todo/useTodo";
import { useEffect } from "react";

export default function TodoPage() {
  const { error, todos } = useTodo();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       fetchTodos().then((data) => console.log(data));
  //     };

  //     fetchData();
  //   }, []);
  return (
    <div className="flex flex-col gap-4 p-4 overflow-auto">
      {!error && <div className="text-red-500">{error}</div>}
      <TodoHeader></TodoHeader>
      <TodoList />
    </div>
  );
}
