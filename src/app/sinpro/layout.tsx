import RaitingComments from "@/components/RaitingComments";
import { ReactNode } from "react";

const LayoutSingleProduct = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <RaitingComments />
    </>
  );
};

export default LayoutSingleProduct;
