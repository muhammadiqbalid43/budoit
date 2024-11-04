import Navbar from "@/app/dashboard/components/navbar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className=" flex h-screen w-full flex-col ">
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
