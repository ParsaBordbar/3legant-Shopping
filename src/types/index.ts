import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type TButton = {
  id?: string;
  value?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type TProduct = {
  id: string;
  img: string;
  name: string;
  cato: string;
  price: number;
  pos: string;
};

export type RegisterType = {
  username: string;
  email: string;
  password: string;
};

export type TInput = {
  register?: UseFormRegister<FieldValues> | undefined;
  className: string;
  submode?: boolean;
  firsticon?: string;
  endicon?: string;
  endicontwo?: string;
} & InputHTMLAttributes<HTMLDivElement>;

export type TCollec = {
  img: string;
  title: string;
  className?: string;
  link: string;
};
