"use client"

import React from 'react'
import {delay, motion} from 'framer-motion'
import Image from 'next/image'
import Hero from '../../public/hero.jpg'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

const About = () => {
  return (
    <>
      <div className='h-full w-full bg-light dark:bg-dark dark:text-white flex flex-col items-center mb-6 p-4'>
        <div className='text-4xl md:text-7xl mt-16 font-bold flex justify-center self-center p-4'>
          Passion Fuels Purpose!
        </div>

        {/* Biography */}
        <div className='mt-20 p-8 flex flex-col gap-5 md:flex-row self-start'>

          {/* Text Container */}
          <div className='md:w-1/2'>
            <h1 className='md:text-xl text-lg font-semibold mb-10'>BIOGRAPHY</h1>
            <p>
            Hello, I&apos;m Tharun, I am a creative problem solver with the passion of solutioning and architecting web and desktop applications.
            </p>
            <p className='mt-4'>
              I focus on building scalable, reliable systems using my expertise in cloud technologies like AWS and Azure to tackle big data challenges.
            </p>
            <p className='mt-4'>
              In my free time, I love tackling problems on LeetCode and diving into tech articles to stay sharp. I’m also passionate about exploring research papers by leading computer scientists, which keeps me informed about the latest innovations and breakthroughs in the tech industry.
            </p>
            <p className='mt-4'>
              I'm a lifelong learner who believes that knowledge has no limits. To me, any concept in the world is just a book or a quick search away, and I’m always eager to dive in and explore something new.
            </p>
            <p className='mt-4'>
              As an ESL tutor at California State University Long Beach, I developed strong communication and articulation skills, which have been instrumental in both my personal and professional growth as a software developer. I have helped students refine their speaking abilities and confidently present themselves in front of others. Additionally, I’ve supported them with thesis work and documentation, honing my ability to convey complex ideas clearly—a skill that translates directly to writing clean, understandable code and documentation in the software development field.  
            </p>
            <p className='mt-4'>
            I have a natural affinity for science and engineering, and I see computer technologies as one of the key tools I've been mastering to express my passion for both fields. Whether it's building, fixing, or deploying solutions—on a computer, in the cloud, or in the real world—I'm always captivated by the process of creation. To me, the ability to create is nothing short of a superpower.
            </p>
          </div>
          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className='md:w-1/2 md:ml-8 relative flex justify-center h-max rounded-2xl border-2 border-solid border-dark'>
            <img src={"/tharun1.JPG"} alt='hero' className='w-full h-auto rounded-2xl'/>     
          </motion.div>
          
        </div>

        {/* Skills */}
        <div className='w-full'>
          <Skills/>
        </div>
          
        <div className='w-full'>
          <Experience/>
        </div>
      </div>
    </>
  )
}

export default About
