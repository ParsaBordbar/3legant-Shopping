'use client'
import { Rating } from "@material-tailwind/react";
 
const DefaultRating = (props:{className?:string}) => {
  return (

        <Rating className={`flex ${props.className} rete gap-0.5`} value={3} />

  );
}

export default DefaultRating