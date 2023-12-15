
import { useCallback, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { RegisterType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";


const RegisterSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const AuthSignUpAndLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema),
  });

  const handelValueInputs = useCallback((data: RegisterType) => {
    console.log(errors.password , 'noting');
    console.log(data);
  }, []);

  return {
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default AuthSignUpAndLoginForm;
