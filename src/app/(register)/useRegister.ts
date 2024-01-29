import { useCallback, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { RegisterType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const RegisterSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const AuthSignUpAndLoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterSchema),
  });

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const regexUsername = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  const handelValueInputs = useCallback((data: RegisterType) => {
    console.log(errors.password, "noting");
    if (
      regex.test(data.email) &&
      regexPass.test(data.password) &&
      regexUsername.test(data.username)
    ) {
      const randomValue = Math.random().toString(36).substring(2);
      toast.success("your sign up  proccess was successfull");
      Cookies.set("token", randomValue, { expires: 7, path: "" });
      router.push("/");
      console.log(data);
    } else {
      toast.error("something goes wrong!");
    }
  }, []);

  return {
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default AuthSignUpAndLoginForm;
