import type { Todo } from "@/types/todo";
import { cn } from "@/lib/utils";
import { LuPencil as UpdateIcon } from "react-icons/lu";
import { LuTrash2 as DeleteIcon } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Card from "@/components/base/Card";
import { useState } from "react";
import { useTodo } from "@/contexts/todo/useTodo";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const {} = useTodo();
  const [isChecked, setIsChecked] = useState(todo.completed);
  return (
    <Card className="flex justify-between items-center ">
      <div className="flex items-center gap-2 overflow-hidden">
        {/* <input type="checkbox"></input> */}
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => setIsChecked(!isChecked)}
        />
        <p
          className={cn(
            "text-foreground truncate",
            isChecked && "line-through text-gray-500"
          )}
        >
          {todo.title}
          {/* skfjlskjflskjflskjflskjflskjflsskdfjlskfjlskfjlskfjlskfjskdjslfkjslfkjsl;aksdjf;aksjfd;aksjf;aksfj;akjsf;aksfj;askfj */}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <Button size="icon" variant="ghost" className="size-7 rounded-full">
          <UpdateIcon className="size-3" />
        </Button>
        <Button size="icon" variant="ghost" className="size-7 rounded-full">
          <DeleteIcon className="size-3" />
        </Button>
      </div>
    </Card>
  );
}
