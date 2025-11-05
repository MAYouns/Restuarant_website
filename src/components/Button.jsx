"use client";
import React from 'react';
import Link from "next/link";

const defualtStyle = "border-2 border-black rounded-4xl hover:bg-[var(--light-graylish-color)]";
const Button = ({ children, href, className, onClick, disabled }) => {
    console.log(className)
    return (
        <div>
            {href ?
                <button type='button' disabled={disabled} onClick={onClick} className={`${defualtStyle} ${className}`} ><Link href={href} className='px-3 py-2 block'>{children}</Link></button> :
                <button type='button' disabled={disabled} onClick={onClick} className={`${defualtStyle} ${className} px-3 py-2`} >{children}</button>}

        </div>
    );
}

export default Button;
