import CollecItem from "@/components/collecItems";
import { ReactNode } from "react";

const LayoutProductPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[85%] mx-auto mt-10">
      <ul className="w-full h-fit gap-2 grid grid-rows-2 grid-cols-2">
        <CollecItem
          className="row-span-2 !h-[454px]"
          img={"/collec/headphone.svg"}
          title={"Headphones"}
          link={""}
        />
        <CollecItem
          className=""
          img={"/collec/earbuds.svg"}
          title={"Earbuds"}
          link={""}
        />
        <CollecItem
          className=""
          img={"/collec/accessories.svg"}
          title={"Accessories"}
          link={""}
        />
      </ul>
      <main className="flex mt-10 justify-between items-center gap-6 flex-wrap">{children}</main>
    </div>
  );
};

export default LayoutProductPage;
