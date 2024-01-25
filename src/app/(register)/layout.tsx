import { ReactNode } from "react";

const LayoutRegister = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex h-screen justify-center md:w-auto md:mx-0 min-[400px]:w-[85%] min-[400px]:mx-auto items-center ">
      <picture className="min-[400px]:hidden md:inline-block w-1/2 h-full ">
        <img
          className="w-full object-cover h-full"
          src="/contact/Image.svg"
          alt=""
        />
      </picture>
      {children}
    </section>
  );
};

export default LayoutRegister;
