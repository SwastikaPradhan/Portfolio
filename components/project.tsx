"use client";
import Image from "next/image"
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];


export default function Project({ title, description, tags, imageUrl,linkToProject  }:
    ProjectProps
) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["0 1", "1.33 1"],

    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (

        <motion.div ref={sectionRef}

            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}

            className="group mb-3 sm:mb-8 last:mb-0 "

        >
            <section

                className=" bg-black max-w-[42rem] border border-white/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 hover:bg-slate-900 transition group-even:pl-8">
                <div className="pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]">

                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-white">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-white/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full" key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <a href={ linkToProject } target="_blank" style={{ cursor: "pointer" }}>

                    <Image src={imageUrl} alt="Project I worked on :)" quality={95}
                        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
                     group-hover:-translate-x-3
                     group-hover:scale-[1.04]
                     group-hover:translate-y-3
                     group-hover:-rotate-2

                     group-even:group-hover:translate-x-3             
                     group-even:group-hover:translate-y-3
                     group-even:group-hover:-rotate-2     
                    group-even:right-[initial] group-even:-left-40"

                    />



                </a>


            </section>
        </motion.div>
    )
}
