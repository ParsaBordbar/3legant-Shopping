import { InputHTMLAttributes } from "react";

type TInput = {
  className: string;
  selle: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const MainInput = (props: TInput) => {
  return (
    <div className={`flex ${props.className} focus-within:border-[var(--neutral-07)] transition-all ease-in-out duration-100 focus-within:border-b-2 parent-input  border-b  py-3.5 border-[var(--neutral-04)] border-opacity-50 items-center`}>
      <section className="flex f border flex-grow gap-2 items-center">
        <picture className="w-6 h-6">
          <img className="w-full h-full" src="/social/mail.svg" alt="" />
        </picture>
        <input
          {...props}
          className="placeholder:third-font placeholder:text-base placeholder:leading-7 placeholder:text-[var(--neutral-04)] bg-transparent  child-input  w-full placeholder:font-semibold outline-none font-semibold"
          type="text"
        />
      </section>
      {props.selle && (
        <button className="third-font text-base font-semibold leading-7 text-[var(--neutral-04)] text-opacity-10">SignUp</button>
      )}
    </div>
  );
};

export default MainInput;
