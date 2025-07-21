import { LuPlus as PlusIcon } from "react-icons/lu";
import { Button } from "../../ui/button";
import { useTodo } from "@/contexts/todo/useTodo";
import { useMemo, useState } from "react";
import CreateTodoModal from "@/contexts/todo/modal/CreateTodoModal";

// type Props = {
//   todoCount: number;

//   onClickAdd: () => void;
// };

export default function TodoHeader() {
  const { todos } = useTodo();
  const [isOpenCreateTodoModal, setIsOpenCreateTodoModal] = useState(false);

  useMemo(() => {
    return todos.length;
  }, [todos]);
  const todoCount = todos.length;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">할일 목록</h1>
        <Button size="sm" onClick={() => setIsOpenCreateTodoModal(true)}>
          <PlusIcon />
          추가
        </Button>
      </div>

      <p className="text-gray-600">총 {todoCount}개의 할일이 있습니다.</p>
      {isOpenCreateTodoModal && (
        <CreateTodoModal
          isOpen={isOpenCreateTodoModal}
          onClose={() => setIsOpenCreateTodoModal(false)}
        />
      )}
    </div>
  );
}
