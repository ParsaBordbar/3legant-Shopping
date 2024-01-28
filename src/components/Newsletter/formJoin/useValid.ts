import { useCallback } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { JoinType } from "@/types";
import { toast } from "react-toastify";

const RegisterSchema = yup.object({
  email: yup.string().email().required(),
});

const ValidJoiningData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinType>({
    resolver: yupResolver(RegisterSchema),
  });

  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const handelValueInputs = useCallback((data: JoinType) => {
    if (regex.test(data.email)) {
      console.log(data);
      toast.success('You Joined To Our Newsletter')
    }
  }, []);

  return {
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default ValidJoiningData;