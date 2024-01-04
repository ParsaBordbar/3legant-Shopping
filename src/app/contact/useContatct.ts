import { useCallback, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ConatactType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const handelValueInputs = useCallback((data: ConatactType) => {
  
    console.log(data);
  }, []);

  return {
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default ContactForm;
