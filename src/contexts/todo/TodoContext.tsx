import type { Todo } from "@/types/todo";
import { createContext } from "react";

type TodoContextType = {
  isLoading: boolean;
  error: string | null;
  todos: Todo[];

  onAddTodo: (todo: Todo) => void;
};

export const TodoContext = createContext<TodoContextType>({
  isLoading: false,
  error: null,
  todos: [],
  onAddTodo: () => {},
});
