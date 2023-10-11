"use client";

import image from 'next/image'

import { CustomButtonProps } from '@/types';


const CustomButton = ({tittle, containerStyles, handleClick,btnType}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType ||"button"}
        className={'custom-btn ${containerStyles}'}
        onClick={handleClick}>

            <span className="text-black rounded-full bg-white min-w-[130px]">
             {tittle}
            </span>
  
            
    </button>
  )
}

export default CustomButton