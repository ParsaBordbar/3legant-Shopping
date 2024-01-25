import Newsletter from "@/components/Newsletter";
import { ReactNode } from "react";

const LayoutSortProducts = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-[84%] mx-auto mt-10">
      {children}
    </div>
  );
};

export default LayoutSortProducts