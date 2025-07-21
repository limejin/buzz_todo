import { Skeleton } from "@/components/ui/skeleton";

export default function TodoListLoading() {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="flex justify-between items-center h-[60px] p-4 border rounded-md shadow-md gap-4"
    >
      <Skeleton className="h-[20px] w-full" />

      <div className="flex items-center gap-1">
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="size-7 rounded-full" />
      </div>
    </div>
  ));
}
