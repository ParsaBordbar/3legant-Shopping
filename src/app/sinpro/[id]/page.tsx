"use client";

import MainButton from "@/components/MainButton";
import DefaultRating from "@/components/Rating";
import { DataProduct } from "@/data";
import { TProduct } from "@/types";
import { useEffect, useState } from "react";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const [items, setItems] = useState<TProduct>();
  const [info, setInfo] = useState<string[]>();
  const [use, setUse] = useState<string[]>();
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    console.log(params);
    DataProduct.map((items: TProduct) => {
      if (items.id == params.id) {
        setItems(items);
        const splitInformation = items.information?.split(",");
        const splitUse = items.useFull?.split(",");
        console.log(splitInformation);
        setInfo(splitInformation);
        setUse(splitUse);
      }
    });
  }, []);
  return (
    items && (
      <div className="my-10  ">
        <section className="grid sm:grid-cols-1 min-[940px]:grid-cols-5 gap-10">
          <picture className="w-full min-[940px]:col-span-2 h-[496px] inline-block rounded-2xl border-2 border-[var(--neutral-03)] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={items.img}
              alt=""
            />
          </picture>
          <div className="flex min-[940px]:col-span-3 w-full  h-[496px] flex-col gap-4">
            <h1 className="font-bold third-font text-3xl">
              {items.name}
              <mark className="bg-transparent ml-1 third-font text-xl font-light uppercase text-[var(--neutral-04)]">
                {items.cato}
              </mark>
            </h1>
            <div className="flex items-center gap-3">
              <p className="third-font text-2xl font-semibold">
                ${items.price}
              </p>
              <DefaultRating />
            </div>
            <section
              className={`flex  flex-col ${
                !items.useFull && "flex-grow"
              } gap-3`}
            >
              <h1 className="third-font font-bold">Information</h1>
              <ul className="flex  flex-col flex-wrap">
                {info?.map((items: string) => {
                  return (
                    <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                      {items}
                    </li>
                  );
                })}
              </ul>
            </section>
            {items.useFull && (
              <section className="flex flex-grow flex-col gap-3">
                <h1 className="third-font font-bold">Useful For</h1>
                <ul className="flex flex-col">
                  {use?.map((items: string) => {
                    return (
                      <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                        {items}
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
            <div className="flex gap-4">
              <MainButton imgLink="/icons/heart-black.svg" className="py-4 bg-white border-2 border-black !text-black px-10 w-full" value={"Wishlist"} />
              <MainButton imgLink="/icons/shopping-bag-white.svg" className="py-4 px-10 w-full" value={"Add To Cart"} />
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default SingleProduct;
