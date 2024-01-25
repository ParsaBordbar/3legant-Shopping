"use client";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import Link from "next/link";
import { useEffect } from "react";
import ErrorsValidItems from "@/components/ErrorsValidItems";
import AuthSignUpAndLoginForm from "../useRegister";

const SignUpAndLoginPage = ({ params }: { params: { acc: string } }) => {
  const { errors, handleSubmit, handelValueInputs, register } =
    AuthSignUpAndLoginForm();
  useEffect(() => {
    console.log(errors);
  }, []);
  console.log(errors);

  return (
    <div className="md:w-1/2 min-[400px]:w-full pl-20 h-[92%] flex flex-col justify-start py-7 items-start gap-8">
      <div className="w-full flex flex-col gap-6">
        <h1 className="capitalize sec-font text-5xl font-medium leading-10 text-[var(--neutral-07)]">
          {params.acc}
        </h1>
        {params.acc == "signup" ? (
          <p className="third-font text-base">
            Already have an account?
            <Link
              href={`/register/signin`}
              className="bg-transparent ml-1 font-bold leading-7 text-[var(--green)]"
            >
              Sign in
            </Link>
          </p>
        ) : (
          <p className="third-font text-base">
            Don’t have an accout yet?
            <Link
              href={`/register/signup`}
              className="bg-transparent ml-1 font-bold leading-7 text-[var(--green)]"
            >
              Sign Up
            </Link>
          </p>
        )}
      </div>
      <form
        onSubmit={handleSubmit(handelValueInputs)}
        action=""
        className="flex flex-grow flex-col items-start w-full gap-4"
      >
        {params.acc == "signup" && (
          <MainInput
            firsticon="/icons/signature.svg"
            placeholder="Your Name"
            register={register("name")}
            className={" w-4/5"}
          />
        )}
        <div className="flex flex-col flex-grow items-start w-full gap-4">
          <MainInput
            placeholder="Username"
            id="username"
            firsticon="/headers/user-circle.svg"
            register={register("username")}
            className={" w-4/5"}
          />
          <MainInput
            register={register("email")}
            id="email"
            firsticon="/social/mail.svg"
            placeholder="Email Address"
            className={" w-4/5"}
          />
          <MainInput
            placeholder="Password"
            id="pass"
            endicontwo="/icons/hide-private-hidden-icon.svg"
            firsticon="/icons/vpn_key.svg"
            register={register("password")}
            endicon="/icons/eye-look-icon.svg"
            className={" w-4/5"}
          />
          <section className={`relative w-full`}>
            {errors.name?.ref?.value && (
              <ErrorsValidItems
                title="your name is a required field"
                erros={errors.name?.ref?.value}
              />
            )}
            <ErrorsValidItems
              className="top-[2rem]"
              title="username is a required field"
              erros={errors.username?.message}
            />
            <ErrorsValidItems
              className="top-[4rem]"
              title="email is a required field"
              erros={errors.email?.message}
            />
            <ErrorsValidItems
              className="top-[6rem]"
              title="password is a required field"
              erros={errors.password?.message}
            />
          </section>
        </div>

        {/* <input {...register("username")} id="" />
        <input type="email" {...register("email")} id="" />
        <input type="password" {...register("password")} id="" /> */}
        <MainButton
          type="submit"
          imgLink="/icons/login-white.svg"
          className="p-2 cursor-pointer w-4/5"
          value={params.acc == "signup" ? "Sign UP" : "Login"}
        />
      </form>
    </div>
  );
};

export default SignUpAndLoginPage;
