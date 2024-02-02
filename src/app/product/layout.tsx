import CategoriesProduct from "@/components/CateProducts";
import CollecItem from "@/components/collecItems";
import { ReactNode } from "react";

const LayoutProductPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[85%] mx-auto mt-10">
      <CategoriesProduct />
      <main className="flex min-[400px]:justify-center sm:justify-between items-center gap-6 flex-wrap">
        {children}
      </main>
    </div>
  );
};

export default LayoutProductPage;
