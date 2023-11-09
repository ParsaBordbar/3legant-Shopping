import { TButton } from "@/types";
import React from "react";
const MainButton = (props: TButton) => {

  return (
    <button
      className={`${props.className} third-font bg-[var(--bg-btn)] text-white rounded-lg flex justify-center items-center `}
    >
      {props.value}
    </button>
  );
};

export default MainButton;
