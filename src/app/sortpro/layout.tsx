import CategoriesProduct from "@/components/CateProducts";
import Newsletter from "@/components/Newsletter";
import { ReactNode } from "react";

const LayoutSortProducts = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-[84%] mx-auto mt-10">
      <CategoriesProduct />
      <main>{children}</main>
    </div>
  );
};

export default LayoutSortProducts;
