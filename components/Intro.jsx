"use client";

import React from 'react'
import ProfilePic from '../public/ProfilePicture.jpg';
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Link from 'next/link';
import { FlipWords } from "./ui/flip-words";
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  //const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const {ref}=useSectionInView('Home',0.5);

 /**  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const { setActiveSection,timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection,timeOfLastClick]);**/

  const words = ["Full Stack Developer", "Software Engineer", "NextJS Frontend Developer"];
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">

      <div className='flex items-center justify-center '>
        <div className="relative ">
          <motion.div

            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}

            transition={{
              type: "tween",
              duration: 0.2,
            }}


          >

            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white " />

          </motion.div>
          <motion.span

            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}

            className="wave absolute bottom-0 right-0 text-4xl">
            👋

          </motion.span>
        </div>

      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Swastika.</span> I&apos;m a
        <span
          className="font-bold inline-flex"
          style={{
            width: "auto", // Let it resize automatically based on word length
            whiteSpace: "nowrap", // Prevent line breaks
            textAlign: "left", // Align the text to the left
            justifyContent: "flex-start",
          }}
        >
          <FlipWords
            className="!text-white"
            duration={2000}
            words={words} // Assuming words = ["Full Stack Developer", "Software Engineer", "Designer"]
            style={{ transition: "transform 0.5s ease", whiteSpace: "nowrap" }} // Prevent word breaking during flip
          />
        </span>{" "}
        based in India. I enjoy building{" "}
        <span className="italic">websites</span> {" "}
        and also love contributing to <span className="italic">open source</span> to give back to the community.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >Contact Me Here {" "} <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> </Link>

        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border border-black/10"
          href="/SwastikaPradhan2024Resume.pdf"
          download

        >
          Download CV{" "}
          <HiDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/swastika-pradhan-1a0532252/"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/SwastikaPradhan?tab=overview&from=2024-04-01&to=2024-04-30"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-200 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>

      </motion.div>
    </section>
  )
}
