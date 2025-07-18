import NotFound from "@/NotFound";
import HomePage from "@/pages/HomePage";
import TodoDetailPage from "@/pages/TodoDetailPage";
import TodoPage from "@/pages/TodoPage";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/todo">
        <Route index element={<TodoPage />} />
        <Route path="/todo:id" element={<TodoDetailPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
