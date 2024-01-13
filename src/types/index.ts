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
  useFull?:string;
  information?:string
};

export type RegisterType = {
  username: string;
  email: string;
  password: string;
};

export type JoinType = {
  email: string;
};

export type ConatactType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  massage:string
};

export type TInput = {
  register?: any;
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
