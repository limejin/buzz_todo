import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useTodo } from "../useTodo";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateTodoModal({ isOpen, onClose }: Props) {
  const { todos, onAddTodo } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState("");
  const handleCreateTodo = () => {
    if (inputRef.current) {
      onAddTodo({
        id: todos.length + 1,
        title: inputRef.current?.value,
        completed: false,
      });

      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>할일 추가</DialogTitle>
        </DialogHeader>
        <div>
          <Input ref={inputRef} placeholder="할일을 입력해주세요." />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleCreateTodo}>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
