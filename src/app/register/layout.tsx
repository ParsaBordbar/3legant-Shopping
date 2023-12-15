import { ReactNode } from "react";

const LayoutRegister = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex h-screen ">
      <picture className="inline-block w-1/2 h-full ">
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
