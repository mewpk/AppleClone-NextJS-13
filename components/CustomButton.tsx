"use client";

import Image from "next/image"

import { CustomButtonProps } from "@/types";

const CustomButton = ({title,containerStyle,handleClick ,customBtn} : CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={"button"}
    className={`${customBtn}`}
    onClick={()=>{handleClick}}
    >
    <span className={`flex-1 ${containerStyle}`}>
        {title}
    </span>
    </button>
  )
}

export default CustomButton