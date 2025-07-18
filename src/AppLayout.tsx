import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="flex flex-col w-[600px] h-full mx-auto bg-white">
        {children}
      </div>
    </div>
  );
}
