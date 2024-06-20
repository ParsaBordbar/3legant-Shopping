import { TButton } from "@/types";
import React from "react";
const MainButton = (props: TButton) => {
  return (
    <button
      {...props}
      className={`${props.className} hover:text-[var(--primary-color)] hover:bg-white transition-all duration-150 ease-in-out  third-font text-white bg-[var(--primary-color)] rounded-lg flex justify-center items-center `}
    >
      {props.imgLink && (
        <picture className="mr-1 inline-block w-6 h-6">
          <img src={props.imgLink} className=" w-full h-full" alt={props.value} />
        </picture>
      )}
      {props.value}
    </button>
  );
};

export default MainButton;
