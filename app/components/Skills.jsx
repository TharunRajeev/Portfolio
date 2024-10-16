"use client"
import {motion} from 'framer-motion'

const skills = [
  {
    name: "CSS",
    x:"-5vw",
    y:"-10vw"
  },
  {
    name: "WiseJ Technology",
    x:"-5vw",
    y:"-18vw"
  },
  {
    name: "HTML",
    x:"-20vw",
    y:"-2vw"
  },
  {
    name: "Android studio",
    x:"-30vw",
    y:"-10vw"
  },
  {
    name: "JavaScript",
    x:"20vw",
    y:"6vw"
  },
  {
    name: "ReactJs",
    x:"-10vw",
    y:"20vw"
  },
  {
    name: "Jenkins",
    x:"-10vw",
    y:"10vw"
  },
  {
    name: "Java",
    x:"-25vw",
    y:"10vw"
  },
  {
    name: "NextJS",
    x:"-20vw",
    y:"-15vw"
  },
  {
    name: "NodeJS",
    x:"-20vw",
    y:"-25vw"
  },
  {
    name: "Python",
    x:"12vw",
    y:"-5vw"
  },
  {
    name: "Microsoft Azure",
    x:"30vw",
    y:"-2vw"
  },
  {
    name: "SQL",
    x:"10vw",
    y:"-15vw"
  },
  {
    name: "Docker",
    x:"20vw",
    y:"-20vw"
  },
  {
    name: "Amazon Web Services",
    x:"5vw",
    y:"12vw"
  },
  {
    name: "Dotnet Framework",
    x:"25vw",
    y:"15vw"
  }

]

const Skill = ({name, x, y}) => {
  return (
    <motion.div
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y, transition: {duration:1.5}}}
    whileHover={{scale:1.05}}
    className='flex items-center justify-center bg-none text-white md:dark:bg-light md:dark:text-dark md:border-[2px] md:border-light bg-dark rounded-full font-semibold py-1.5 px-3 text-sm md:py-2 md:px-4 lg:py-3 lg:px-6 shadow-dark cursor-pointer absolute'>
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className='w-full '>
      <h2 className='font-bold text-4xl md:text-6xl mt-56 flex self-center mb-10 p-4'>Skills</h2>
      <div className='w-full lg:h-screen relative flex items-center justify-center rounded-full h-[60vh] md:h-[80vh] bg-circularLightSm md:bg-circularLight dark:md:bg-circularDark dark:bg-circularDarkSm'>
        <motion.div
        whileHover={{scale:1.05}}
        className='flex items-center justify-center bg-none text-white md:dark:bg-light md:dark:text-dark rounded-full font-semibold p-4 md:p-6 lg:p8 shadow-dark md:border-light bg-dark cursor-pointer'>
          Software Development
        </motion.div>
        {skills.map((skill) =>(
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y}/>
        ))}
      </div>
    </div>
  )
}

export default Skills
