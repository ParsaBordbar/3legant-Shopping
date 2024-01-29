"use client";

import CartProduct from "@/components/cardProducts";
import { DataProduct } from "@/data";
import { TProduct } from "@/types";
import { useEffect, useState } from "react";

const SortingProducts = ({ params }: { params: { cato: string } }) => {
  console.log(params.cato);
  const [res, setRes] = useState<TProduct[]>([]);
  var findingProuct: TProduct[] = [];
  console.log(DataProduct);
  useEffect(() => {
    DataProduct.map((items: TProduct) => {
      const seprate = items.cato.split("-")[0];
      if (items.pos == params.cato || seprate == params.cato) {
        findingProuct.push(items);
      }
    });
    setRes(findingProuct);
  }, []);

  return (
      <div className="w-full flex items-center justify-between flex-wrap gap-6 ">
        {res.map((items: TProduct) => {
          return (
            <CartProduct
              cato={items.cato}
              name={items.name}
              id={items.id}
              img={items.img}
              pos={items.pos}
              price={items.price}
              key={items.id}
            />
          );
        })}
      </div>
  );
};

export default SortingProducts;
