import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Logo = () => {

  const MotionLink = motion(Link);
   
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink 
      whileHover={
        {backgroundColor:["#3b82f6", "#f97316"],
        transition:{duration:1, repeat:Infinity}
      }
        
      }
      className='w-20 h-20 bg-light text-light border-[1px] border-solid border-transparent dark:border-light flex items-center justify-center rounded-full text-2xl font-bold hover:bg-blue-950 duration-300' href="/">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/home.png" alt="home"/>
      </MotionLink>
    </div>
  )
}

export default Logo
