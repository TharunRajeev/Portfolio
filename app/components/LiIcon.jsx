import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'

const LiIcon = ({reference}) => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
  return (
    <figure className='absolute left-0 stroke-black dark:stroke-light'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-orange-500 stroke-1 dark:bg-blue-500 fill-none'/>
            <motion.circle cx="75" cy="50" r="20" className=' stroke-[5px] fill-light dark:fill-dark'
            style={{pathLength: scrollYProgress}}/>
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-orange-500 dark:fill-blue-500'/>
        </svg>
    </figure>
  )
}

export default LiIcon
