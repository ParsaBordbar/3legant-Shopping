"use client";
import { DataProduct } from "@/data";
import { TProduct } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { SwiperSlide } from "swiper/react";
import CartProduct from "../cardProducts";
import { Slider } from "../splide";

const NewProductsSlider = () => {
  const [SliderProp, setSliderProp] = useState<number>(5);
  useEffect(() => {
    if (window.innerWidth < 700) {
      return setSliderProp(1);
    }
    if (window.innerWidth > 700 && window.innerWidth < 1024) {
      return setSliderProp(3);
    }
    if (window.innerWidth > 1024 && window.innerWidth < 1400) {
      return setSliderProp(4);
    }
    if (window.innerWidth > 1400) {
      return setSliderProp(5);
    }
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <h1 className="sec-font text-5xl font-semibold text-black leading-10">
        New Arrivals
      </h1>

      <Slider anotherProp={Number(SliderProp)}>
        {DataProduct?.map((items: TProduct) => {
          return (
            items.pos == "NEW" && (
              <SwiperSlide className="!w-fit !m-0" {...items} key={items.id}>
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

export default NewProductsSlider;
