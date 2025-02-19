"use client";

import React from 'react'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail} from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { useFormStatus } from 'react-dom';

export default function contact() {
  const { ref } = useSectionInView("Contact");
 
  return (
    <motion.section ref={ref} id="contact" 

    className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}    
    >

      <SectionHeading>Contact me</SectionHeading><br/>
      <p className="text-gray-700 -mt-4">Please Contact me directly at  {" "}<a className="underline" href="mailto:swastikapradhan51@gmail.com"> swastikapradhan51@gmail.com</a> {" "} on through this form.</p>

      <form className ="mt-10 flex flex-col items-center"
      action={async (formData)=>{
        console.log(formData.get("senderEmail"));
        console.log(formData.get("message"));
        await sendEmail(formData);
      }}>
        <input className="h-14 w-full rounded-lg border border-black/10 px-4 text-black"
          placeholder="Your Email"
          name="senderEmail"
          type="email"        
          required 
          maxLength={500}
        />

        <textarea
          className="h-52 w-full my-3 rounded-lg border border-black/10 p-4 text-black"
          placeholder="Your message"
          name="message"
          required
          maxLength={1000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>


      </form>
    </motion.section>
  )
}
