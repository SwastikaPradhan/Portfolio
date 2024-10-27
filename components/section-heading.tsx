import React from "react";

type SectionHeadingProps = {
    children:React.ReactNode;

};

export default function SectionHeading({children}: SectionHeadingProps){
    return <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center">{children}</h2> 
}