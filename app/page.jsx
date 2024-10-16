"use client"

import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className='h-full w-full md:px-32'>
          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay:1.3
          }} className='h-full w-full flex flex-col gap-5 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <div className=" w-24 h-24 flex justify-center items-center relative rounded-full border-2 border-white p-1">
                <div className="inset-0 opacity-100 absolute w-[100%] h-[105%] bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-orange-500 to-yellow-300 rounded-full blur"></div>
                <img src='/title.png' width={70} height={70} className="rounded-full w-full relative hover:opacity-75 duration-200"/>
              </div>
              <p className='pt-2 text-3xl'>Tharun Rajeev</p>
              <h1 className='text-2xl'>
                <Typewriter
                  options={{
                    strings: ["Software Engineer", 'Full-Stack Developer', 'Data Analyst', 'Cinematographer'],
                    autoStart: true,
                    loop: true,
                    delaySpeed: 2000
                  }}
                />
              </h1>
              <div className='mt-10'>
                <a href="/THARUNRAJEEV.pdf" className='bg-dark p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark duration-300 border-2 border-solid
                border-transparent hover:border-dark text-light dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light' download='THARUNRAJEEV-RESUME.pdf'>Resume</a>
              </div>
            </div>
            
          </motion.div>
      </div>
    </>
  );
}
