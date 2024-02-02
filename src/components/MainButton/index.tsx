import { TButton } from "@/types";
import React from "react";
const MainButton = (props: TButton) => {
  return (
    <button
      {...props}
      className={`${props.className} hover:bg-white border-transparent border-2 transition-all duration-150 ease-in-out hover:border-black hover:text-black third-font bg-[var(--bg-btn)] text-white rounded-lg flex justify-center items-center `}
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
