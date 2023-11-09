import { ButtonHTMLAttributes } from "react";

export type TButton = {
  id?:string
  value: string;
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
