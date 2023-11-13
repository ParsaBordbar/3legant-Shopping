import Newsletter from "@/components/Newsletter";
import { ReactNode } from "react";

const LayoutSortProducts = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-10 px-40">
      {children}
      <section>
        
      </section>
    </div>
  );
};

export default LayoutSortProducts