"use client";

import { DataProduct } from "@/data";
import { TProduct } from "@/types";
import { useMemo } from "react";
import { SwiperSlide } from "swiper/react";
import CartProduct from "../cardProducts";
import { Slider } from "../splide";

const NewProductsSlider = () => {
  const ProductInSlider = useMemo(() => {
    return DataProduct.map((items: TProduct) => {
      if (Number(items.id) < 3) return;
      return (
        <CartProduct
          id={items.id}
          img={items.img}
          name={items.name}
          cato={items.cato}
          price={items.price}
          pos={items.pos}
        />
      );
    });
  }, []);
  return (
    <div className="flex flex-col gap-12">
      <h1 className="sec-font text-5xl font-semibold text-black leading-10">
        New Arrivals
      </h1>

      <Slider anotherProp={5}>
        {DataProduct?.map((items: TProduct) => {
          return (
            items.pos == "NEW" && (
              <SwiperSlide className="!w-fit" {...items} key={items.id}>
                <CartProduct
                  id={items.id}
                  img={items.img}
                  name={items.name}
                  cato={items.cato}
                  price={items.price}
                  pos={items.pos}
                />
              </SwiperSlide>
            )
          );
        })}
      </Slider>
    </div>
  );
};

export default NewProductsSlider