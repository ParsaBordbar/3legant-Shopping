"use client";
import ContactForm from "@/app/contact/useContatct";
import MainInput from "../MainInput";
import MainButton from "../MainButton";

const ContactFormComponent = () => {
  const { register, handelValueInputs, handleSubmit } = ContactForm();
  return (
    <section className="w-2/3 h-[78vh] self-start">
      <form
        onSubmit={handleSubmit(handelValueInputs)}
        className="flex h-full justify-between flex-col px-[3.125rem] "
      >
        <div className="flex-wrap gap-y-4 flex justify-between w-full">
          <MainInput
            register={register("firstName")}
            placeholder="First Name"
            className={"w-72"}
          />
          <MainInput
            register={register("lastName")}
            placeholder="Last Name"
            className={"w-72"}
          />
          <MainInput
            register={register("email")}
            placeholder="Email"
            className={"w-72"}
          />
          <MainInput
            register={register("phoneNumber")}
            placeholder="Phone Number"
            className={"w-72"}
          />
          <MainInput
            register={register("massage")}
            placeholder="Write your massage"
            className={"w-full"}
          />
        </div>

        <MainButton className="w-56 self-end p-2" value={"Send Massage"} />
      </form>
    </section>
  );
};

export default ContactFormComponent;
