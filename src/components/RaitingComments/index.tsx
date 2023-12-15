"use client";

import { DataComment } from "@/data";
import { useMemo, useState } from "react";
import DefaultRating from "../Rating";
import MainButton from "../MainButton";

const RaitingComments = () => {
  const [show, setShow] = useState<boolean>(false);

  const RenderComment = useMemo(() => {
    return DataComment.map((items) => {
      if (!show) {
        if (items.id >= "7") return;
      }
      return (
        <div className="py-7 flex flex-col h-[270px] justify-between w-[49%] px-8 rounded-2xl bg-[var(--neutral-02)]">
          <div className="flex flex-col gap-3">
            <DefaultRating />
            <h1 className="third-font font-semibold text-2xl">{items.ID}</h1>
            <p className="sec-font text-base">{items.desc}</p>
          </div>
          <p className="sec-font text-sm">{items.date}</p>
        </div>
      );
    });
  }, [show]);
  return (
    <section className="min-[500px]:px-16 md:px-40 flex flex-col gap-5">
      <h1 className="sec-font font-bold text-5xl">Rating & Reviews</h1>
      <div className="flex flex-col gap-5">
        <h1 className="third-font text-xl ">
          All Reviews - ({DataComment.length})
        </h1>
        <div className="flex items-center  w-full gap-5 justify-center flex-wrap">
          {RenderComment}

          <MainButton
            onClick={() => setShow(!show)}
            className="w-1/4 p-3"
            value={show ? "Show Less" : "Show More"}
          />
        </div>
      </div>
    </section>
  );
};

export default RaitingComments;
