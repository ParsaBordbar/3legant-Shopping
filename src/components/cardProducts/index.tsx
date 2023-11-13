"use client";
import { useState } from "react";
import MainButton from "../MainButton";
import DefaultRating from "../Rating";
import { TProduct } from "@/types";
import Link from "next/link";

const CartProduct = (props: TProduct) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="flex gap-3 w-[262px] flex-col"
    >
      {/* <section className="flex w-full h-[349px] flex-col bg-[#F3F5F7] p-4 relative">
        <div className=" flex items-center justify-between  ">
          <p className="uppercase font-bold rounded bg-white py-1 px-[14px] third-font">
            {props.pos}
          </p>
          {show && (
            <picture className="inline-block cursor-pointer rounded-full p-1.5 bg-white shadow-[var(--box-shadow)]">
              <img
                className="overflow-hidden"
                src="/productsIcon/heart.svg"
                alt=""
              />
            </picture>
          )}
        </div>
        <div className="w-full">
          <picture className=" inline-block">
            <img src={props.img} alt="" />
          </picture>
          {show && (
            <MainButton
              className="w-[230px] absolute bottom-[16px] py-2 px-6"
              value={"Add To Cart"}
            />
          )}
        </div>
      </section>
      <div className="flex flex-col w-full gap-1">
        <DefaultRating />
        <h1 className="third-font font-semibold leading-6 text-base">
          {props.name}
        </h1>
        <h1 className="third-font leading-6 text-base">
          {props.cato}
        </h1>
        <p className="third-font font-semibold text-sm">${props.price}</p>
      </div> */}

      <section className="h-[349px] relative">
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <p className=" uppercase cursor-default px-[14px] font-bold py-1 rounded bg-white text-base third-font">
            {props.pos}
          </p>
          {show && (
            <picture className="inline-block drop-shadow top-4 left-4 cursor-pointer rounded-full p-1.5 bg-white shadow-[var(--box-shadow)]">
              <img
                className="overflow-hidden"
                src="/productsIcon/heart.svg"
                alt=""
              />
            </picture>
          )}
        </div>
        <picture className="w-[262px] h-full">
          <img className="w-full h-full" src={props.img} alt="" />
        </picture>
        {show && (
          <Link href={`/sinpro/${props.id}`}>
            <MainButton
              className="w-[230px]  absolute bottom-4 left-4 py-2 px-6"
              value={"Add To Cart"}
            />
          </Link>
        )}
      </section>

      <div className="flex flex-col w-full gap-1">
        <section>
          <DefaultRating />
          <h1 className="third-font  overflow-hidden text-ellipsis whitespace-nowrap w-[266px] font-semibold leading-6 text-base">
            {props.name}
          </h1>
          <p className="third-font font-semibold text-sm">${props.price}</p>
        </section>
      </div>
    </div>
  );
};

export default CartProduct;
