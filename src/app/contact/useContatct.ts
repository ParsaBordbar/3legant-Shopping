import { useCallback, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ConatactType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { css } from "glamor";
const RegisterSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  massage: yup.string().required(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConatactType>({
    resolver: yupResolver(RegisterSchema),
  });

  const regexPhoneNumber =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,6}$/im;
  const regexName = /^[A-Za-z]+[a-zA-Z]+$/;

  const handelValueInputs = useCallback((data: ConatactType) => {
    if (
      regexPhoneNumber.test(data.phoneNumber) &&
      regexName.test(data.firstName) &&
      regexName.test(data.lastName)
    ) {
      console.log(data);
      toast.success("your massage send");
    }else{
      toast.error("something wrong!");

    }
  }, []);

  return {
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default ContactForm;
