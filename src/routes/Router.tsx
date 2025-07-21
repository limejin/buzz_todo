import NotFound from "@/NotFound";
import TodoLayout from "@/components/features/todo/TodoLayout";
import HomePage from "@/pages/HomePage";
import TodoDetailPage from "@/pages/TodoDetailPage";
import TodoPage from "@/pages/TodoPage";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* TodoLayout.tsx */}
      <Route path="/todo" element={<TodoLayout />}>
        <Route index element={<TodoPage />} />
        <Route path="/todo:id" element={<TodoDetailPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
