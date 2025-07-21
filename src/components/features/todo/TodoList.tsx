import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";
import TodoListLoading from "./TodoListLoading";
import { Skeleton } from "@/components/ui/skeleton";
import { useTodo } from "@/contexts/todo/useTodo";

type Props = {
  isLoading: boolean;
  todos: Todo[];
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function TodoList() {
  const { isLoading, todos } = useTodo();
  return (
    <div className="flex flex-col gap-2">
      {isLoading ? (
        <div>
          {/* <Skeleton className="size-[48px] rounded-full" /> */}
          <TodoListLoading />
        </div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
