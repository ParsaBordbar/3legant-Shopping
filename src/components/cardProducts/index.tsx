"use client";
import { useEffect, useMemo, useState } from "react";
import MainButton from "../MainButton";
import DefaultRating from "../Rating";
import { TProduct } from "@/types";
import Link from "next/link";

const CartProduct = (props: TProduct) => {
  return (
    <div className={`flex gap-3 group flex-col ${props.className}`}>
      <section className="h-[349px] relative">
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <p className=" uppercase cursor-default px-[14px] font-bold py-1 rounded bg-white text-base third-font">
            {props.pos}
          </p>
          <picture className="group-hover:inline-block hidden drop-shadow top-4 left-4 cursor-pointer rounded-full p-1.5 bg-white shadow-[var(--box-shadow)]">
            <img
              className="overflow-hidden"
              alt={props.name}
              src="/productsIcon/heart.svg"
            />
          </picture>
        </div>
        <picture className="w-[262px] h-full">
          <img className="w-full rounded-lg h-full" src={props.img} alt="" />
        </picture>
        
      </section>

      <div className="flex flex-col w-full gap-1">
        <section>
          <DefaultRating />
          <h1 className="third-font   overflow-hidden text-ellipsis whitespace-nowrap w-[266px] font-semibold leading-6 text-base">
            {props.name}
          </h1>
          <p className="third-font  font-semibold text-sm">${props.price}</p>
          <Link
          className="inline-block mt-2 w-full"
          href={`/sinpro/${props.id}`}
        >
          <MainButton
            className="w-full py-2 px-6"
            value={"Add To Cart"}
          />
        </Link>
        </section>
      </div>
    </div>
  );
};

export default CartProduct;
