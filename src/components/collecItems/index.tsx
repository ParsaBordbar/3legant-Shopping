import { TCollec } from "@/types";
import Link from "next/link";

const CollecItem = (props: TCollec) => {
  return (
    <Link
      href={props.link ?? "/"}
      className={`relative group min-[500px]:h-[223px] md:w-auto min-[500px]:w-[25rem] transition-all ease-in-out duration-300 hover:border-zinc-300 border-2 cursor-pointer border-transparent ${props.className}`}
    >
      <picture className="inline-block w-full h-full">
        <img className=" h-full object-cover w-full" src={props.img} alt="" />
      </picture>

      <div className="flex absolute bottom-12 left-12 flex-col gap-3">
        <p className="sec-font group-hover:text-5xl transition-all ease-in-out duration-300 text-4xl font-semibold">
          {props.title}
        </p>
        <section className="flex items-center gap-1">
          <span className="third-font">Collection</span>
          <picture>
            <img src="/collec/arrow-right.svg" alt="" />
          </picture>
        </section>
      </div>
    </Link>
  );
};

export default CollecItem;
