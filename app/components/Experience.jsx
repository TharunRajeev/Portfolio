"use client"

import { useScroll, motion } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {

  const ref = useRef(null)
  return (
   <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    
    <LiIcon reference={ref}/>
    <div>
      <h3 className='capitalize font-bold md:text-2xl text-lg'>
        {position}&nbsp;
        <a href={companyLink}
        target='_blank'
        className='dark:text-blue-500 text-orange-500 animate-pulse capitalize'>
          {company}
        </a>
      </h3>
      <span className=''>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>{work}</p>
    </div>
   </li>
  )
}

const Experience = () => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className='w-full flex flex-col my-64 p-4 justify-center items-center'>
      <h1 className=' font-bold text-4xl md:text-7xl my-20'>Experience & Education</h1>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
        style={{scaleY: scrollYProgress}} className='absolute md:left-9 md:top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'/>
        <ul>
          <Details position="Bachelors in Information Technology" company="@SRM Institute of Science and Technology" 
          time="2017 - 2021" companyLink="https://www.srmist.edu.in/"/>

          <Details position="Data Analyst Intern" company="@Tata Technologies" 
          time="2019 - 2019" work=" conducted data analysis using pandas, NumPy, and Matplotlib to examine operational performance data, providing insights and visualizations for decision-making. I analyzed monthly employment performance based on tickets resolved and incident trends, storing data in Excel and graphs in .png files for internal discussions and retrospectives." companyLink="https://www.tatatechnologies.com/in/"/>

          <Details position="Data Analyst Intern" company="@JSW Steels" 
          time="2019 - 2020" work="Automated web scraping to get montly and yearly data from Ministry of Commerce and Industry, produced excel files and performed advanced data analysis and machine learning. Predicted steel and other raw material value based on yearwise trend in import/export." companyLink="https://www.jswsteel.in/"/>

          <Details position="Software Engineer" company="@One Advanced" 
          time="2021 - 2023" work="Built stand alone application in dotnet to support user authentication for a legacy software. Migrated a 15 year old legacy software to cloud using emerging technologies bridging c# and javascript frameworks. Solutioned system design for rudimentary reactJS projects and managed CI/CD Pipeline using gitflow and jenkins." companyLink="https://www.oneadvanced.com/en-us/"/>

          <Details position="Masters in Computer Science" company="@California State University of Long Beach " 
          time="2023 - present" work="Pursuing a masters degree in computer science with a focus in Sofware Development. Scored an A in subject like Advanced algorithms, Advanced software engineering, Advanced programming language. Working as an English Tutor at the Learning center to help students articulate assignments research work and gain confidence in speaking English for professional life." companyLink="https://www.csulb.edu/"/>

          <Details position="Looking for work" 
          time="present" work="Building and developing projects to hone my skills. Currently making Full-Stack landing pages for small scale firms. Looking for Full-time Software developer roles."/>
        </ul>
      </div>
      
    </div>
  )
}

export default Experience
