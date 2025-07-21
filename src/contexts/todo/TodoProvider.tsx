import { useEffect, type PropsWithChildren, useState } from "react";
import { TodoContext } from "./TodoContext";
import { fetchTodos } from "@/api/todo";
import type { Todo } from "@/types/todo";

type Props = PropsWithChildren;
export const TodoProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };
  useEffect(() => {
    const fetchData = async () => {
      fetchTodos()
        .then(setTodos)
        .catch(setError)
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, []);
  return (
    <TodoContext.Provider
      value={{ isLoading, error, todos, onAddTodo: handleAddTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
