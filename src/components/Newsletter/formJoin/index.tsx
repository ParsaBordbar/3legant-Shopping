"use client";
import MainInput from "@/components/MainInput";
import ValidJoiningData from "../useValid";

const FormJoin = () => {
  const { errors, handelValueInputs, handleSubmit, register } =
    ValidJoiningData();
  return (
    <form
      onSubmit={handleSubmit(handelValueInputs)}
      className="min-[500px]:w-3/5 md:w-4/12"
      action=""
    >
      <MainInput
        firsticon="/social/mail.svg"
        className={"w-full"}
        type="email"
        register={register("email")}
        submode={true}
        placeholder="Email address"
      />
    </form>
  );
};

export default FormJoin;
