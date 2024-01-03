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
    <div>
      {/* <h1>{res && res[0].cato}</h1> */}
      <div className="w-full flex items-center flex-wrap gap-7 mt-20">
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
    </div>
  );
};

export default SortingProducts;
