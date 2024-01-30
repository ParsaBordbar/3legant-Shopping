"use client";
import { TInput } from "@/types";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const MainInput = (props: TInput) => {
  const [type, setType] = useState<boolean>(false);
  const TypeResult = useMemo(() => {
    console.log("in memo");
    if (props.id === "pass" && type) {
      return "text";
    } else if (!type && props.id === "pass") {
      return "password";
    } 
  }, [type]);
  return (
    <div
      className={`flex ${props.className} focus-within:border-[var(--neutral-07)] transition-all ease-in-out duration-100 focus-within:border-b-2 parent-input  border-b  py-3.5 border-[var(--neutral-04)] border-opacity-50 items-center`}
    >
      <section className="flex flex-grow gap-2 items-center">
        {props.firsticon && (
          <picture className="w-6 h-6">
            <img className="w-full h-full" src={props.firsticon} alt="" />
          </picture>
        )}
        <input
          {...props.register}
          {...props}
          type={TypeResult ?? props.type}
          className="placeholder:third-font placeholder:text-base placeholder:leading-7 placeholder:text-[var(--neutral-04)] bg-transparent  child-input  w-full placeholder:font-normal outline-none font-normal"
        />
        {props.endicon && (
          <picture
            onClick={() => setType(!type)}
            className="w-6 cursor-pointer h-6"
          >
            <img
              className="w-full h-full"
              src={
                props.id === "pass" && type ? props.endicontwo : props.endicon
              }
              alt=""
            />
          </picture>
        )}
      </section>
    </div>
  );
};

export default MainInput;
