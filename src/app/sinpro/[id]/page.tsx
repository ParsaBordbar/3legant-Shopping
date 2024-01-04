"use client";

import MainButton from "@/components/MainButton";
import DefaultRating from "@/components/Rating";
import { DataProduct } from "@/data";
import { TProduct } from "@/types";
import { useEffect, useState } from "react";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const [items, setItems] = useState<TProduct>();
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    console.log(params)
    DataProduct.map((items: TProduct) => {
      if (items.id == params.id) {
        setItems(items);
      }
    });
  }, []);
  return (
    items && (
      <div className="my-10 min-[500px]:px-16 md:px-40">
        <section className="flex items-start gap-16">
          <picture className="w-1/2 h-[496px] inline-block rounded-2xl border-2 border-[var(--neutral-03)] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={items.img}
              alt=""
            />
          </picture>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold third-font text-3xl">
              {items.name}
              <mark className="bg-transparent ml-1 third-font text-xl font-light uppercase text-[var(--neutral-04)]">
                {items.cato}
              </mark>
            </h1>
            <p className="third-font text-2xl font-semibold">${items.price}</p>
            <DefaultRating />
            <section className="flex flex-col gap-3">
              <h1 className="third-font font-bold">
                Information From{" "}
                <mark className="bg-transparent text-[var(--neutral-04)] font-light">
                  {items.name}
                </mark>
              </h1>
              <ul className="flex flex-col">
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                  Ethylene Vinyl Acetate in ear puds
                </li>
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">{`a mixture of polypropylee and EPDM , a so-called thermoplastic elastomer , in an ear hook`}</li>
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                  soft doam , manufactured from chloroprene rubber for a
                  stabilization spring band
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-3">
              <h1 className="third-font font-bold">Useful For</h1>
              <ul className="flex flex-col">
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                  Audio and Video editing
                </li>
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                  Listening to music
                </li>
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                  Working out
                </li>
                <li className="list-none capitalize ml-8 font-medium sec-font text-sm">
                  Talking
                </li>
              </ul>
            </section>
            <div className="flex gap-4">
              <section className="flex items-center bg-[var(--neutral-03)] w-fit p-4 rounded-2xl">
                <picture
                  onClick={() => setCount(count - 1)}
                  className="cursor-pointer inline-block w-6 h-6 mx-4"
                >
                  <img
                    className="w-full h-full"
                    src="/icons/mathMinusIcon.svg"
                    alt=""
                  />
                </picture>
                <p className="border-l border-r text-2xl border-[var(--neutral-04)] px-4">
                  {count}
                </p>
                <picture
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer inline-block w-6 h-6 mx-4"
                >
                  <img
                    className="w-full h-full"
                    src="/icons/plusLineIcon.svg"
                    alt=""
                  />
                </picture>
              </section>
              <MainButton className="py-4 px-10 w-full" value={"Add To Cart"} />
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default SingleProduct;
