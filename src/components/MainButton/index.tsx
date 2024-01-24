import { TButton } from "@/types";
import React from "react";
const MainButton = (props: TButton) => {
  return (
    <button
      {...props}
      className={`${props.className} third-font bg-[var(--bg-btn)] text-white rounded-lg flex justify-center items-center `}
    >
      {props.imgLink && (
        <img src={props.imgLink} className="mr-1" alt={props.value} />
      )}
      {props.value}
    </button>
  );
};

export default MainButton;
