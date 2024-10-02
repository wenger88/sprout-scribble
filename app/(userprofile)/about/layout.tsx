import React from "react";

export default function AboutLayout({children}: {children: React.ReactNode}){
    return(
        <div>
            <div className='h-24 w-full bg-blue-900'>
                <h1 className='text-white text-3xl text-center pt-4'>About Layout</h1>
            </div>
            {children}
        </div>
    )
}