"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { projectsData } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {

    const {ref}= useSectionInView('Projects');

    /**const { ref,inView} = useInView({
        threshold:0.5,
    })
    const {setActiveSection,timeOfLastClick}= useActiveSectionContext();
    useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection("Projects");
        }
    },[inView,setActiveSection,timeOfLastClick]);**/

    
    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading > My Project

            </SectionHeading>
            <br/>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index} >

                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>

        </section>

    )
}

