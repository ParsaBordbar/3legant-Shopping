"use client";
import useAuth from "@/Hooks/useAuth";
import CartProduct from "@/components/cardProducts";
import { DataProduct } from "@/data";
import { useCallback } from "react";

const MainRoute = () => {
  useAuth()
  const GetAllData = useCallback(() => {
    return DataProduct.map((items) => {
      return (
        <CartProduct
          id={items.id}
          img={items.img}
          name={items.name}
          cato={items.cato}
          price={items.price}
          pos={items.pos}
          key={items.id}
          information={items.information}
          useFull={items.useFull}
        />
      );
    });
  }, []);
  return GetAllData();
};

export default MainRoute;
