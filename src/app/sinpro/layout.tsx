import RaitingComments from "@/components/RaitingComments";
import { ReactNode } from "react";

const LayoutSingleProduct = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-10 flex flex-col">
      {children}
      <RaitingComments />
    </div>
  );
};

export default LayoutSingleProduct;
