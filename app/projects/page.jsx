"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import Image from 'next/image'
import SocialCop from '../../public/SocialCop.JPEG'
import summaraii from '../../public/summaraii.png'
import path from '../../public/cropped-path.gif'
import Sorting from '../../public/Sorting.png'
import realTime from '../../public/Real-time-streaming.png'
import WQMS from '../../public/project-2.jpeg'
import Saleskrita from '../../public/SK.png'
import Spline from '@splinetool/react-spline/next';

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article className='w-full min-w-screen-lg p-12 flex flex-col md:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
      <Link className='md:w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
        <Image src={img} alt={title} className='w-full h-full'/>
      </Link>

      <div className='md:w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-orange-500 dark:text-blue-500 font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>{summary}</p>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className='flex justify-center items-center'> 
          <SocialIcon url={github}
            bgColor='transparent'
            fgColor='black'
            
            />
          <Link className='ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg hover:bg-light hover:text-dark duration-500' href="https://github.com/TharunRajeev/kafka-spark-real-time-streaming/blob/main/README.md">Visit Project</Link>
        </motion.div>
      </div>
    </article>
  )
}

const NormalProject = ({title, img, link, github,summary}) => {
  return(
    <article className='w-full min-w-screen-lg p-1 flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
      <Link className='md:w-1/2 cursor-pointer overflow-hidden rounded-lg mt-10' href={link} target="_blank">
        <Image src={img} alt={title} className='w-full'/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between pl-6 mb-10'>

        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>{summary}</p>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6, duration: 0.4, ease: "easeInOut"}}} className='flex justify-center items-center'> 
          <SocialIcon url={github}
            bgColor='transparent'
            fgColor='black'
            
            />
          <Link className='ml-4 rounded-lg bg-dark text-light p-2  px-6 text-lg hover:bg-light hover:text-dark duration-500' href={link}>Visit Project</Link>
        </motion.div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
        <div className='w-full mb-6 p-4'>
          <div className='w-full h-full flex flex-col items-center'>
            <div className='md:text-7xl text-4xl mt-16 font-bold flex '>
              Learn By Doing
            </div>
            <div className='w-full h-full mt-10'>
              <Spline
                className='w-full h-full'
                scene="https://prod.spline.design/j6yO3T4Ikxm6P5m9/scene.splinecode" 
              />
            </div>
            <div className='grid mt-20 w-[80vw] gap-24'>
              <div className=''>
                <FeaturedProject title="Real-time Streaming Analytics Application" type="Featured Project" link="https://github.com/TharunRajeev/kafka-spark-real-time-streaming/blob/main/README.md" summary="Real-time streaming analytics platform using Kafka and Spark Structured Streaming, processing
                over 1 million taxi trip records per day, reducing data processing time by 40% and enabling real-time decision-making on fleet
                allocation and pricing strategies." github="https://github.com/TharunRajeev/kafka-spark-real-time-streaming" img={realTime}/>
              </div>
            </div>
            <div className='w-[80vw] mt-10 grid md:grid-cols-2 md:gap-10 gap-10 mb-10'>
              <NormalProject title="Sorting Algorithm Visualizer" type="" link="https://tharunrajeev.github.io/sorting-algorithm-visualizer/" github="https://github.com/TharunRajeev/sorting-algorithm-visualizer" img={Sorting} summary="React.js app to visualize and compare 9 sorting algorithms (e.g., Bubble Sort, Merge Sort, Quick Sort), enhancing
              understanding of algorithm efficiency and performance."/>
              <NormalProject title="SummarAI" type="" link= "https://summaraii.netlify.app/" github="https://github.com/TharunRajeev/SummarAi" img={summaraii} summary="React application with Flask-API as backend to summarize youtube videos using OpeAI using youtube transcripts."/>
              <NormalProject title="Visualize search algorithms" type="" link="https://visualize-search-algorithms.netlify.app/" github="https://github.com/TharunRajeev/Visualize-Search-Algorithms" img={path} summary="ReactJS application to visualize how search algorithms like Dijsktra, A*, BFS and DFS works with a fun approach creating a maze."/>
              <NormalProject title="Social Cop" type="" link= "https://docs.google.com/document/d/1GgG4aTtlismmI-FEGG2YZJE3OgykV-Ql/edit?usp=drive_link&ouid=101611029946851717729&rtpof=true&sd=true" github="https://github.com/TharunRajeev/socialcopapp" img={SocialCop} summary="An Android app developed using Android Studio, Java, NodeJS, MongoDB, AWS S3, SMTP to ensure road safety by allowing the user to capture images, and location and upload them in a common portal that could be addressed by the respective authorities."/>
              <NormalProject title="SalesKrita Consulting Landing page" type="" link= "https://Saleskrita.com" github="https://github.com/TharunRajeev/SalesKrita" img={Saleskrita} summary="HTML, Vanilla Css, Javascript, EmailJS, CI/CD"/>
              <NormalProject title="Water Quality Monitoring System" type="" link="https://drive.google.com/file/d/1DucGUZ4IDxfcAsEI1ALtBWxfft6YD_-w/view?usp=drive_link" github="https://github.com/TharunRajeev/ML-Based-Water-Quality-Monitoring" img={WQMS} summary="NodeMCU, Azure Storage Cloud, Azure Stream Analytics, CloudMQTT, PowerBI, LM35, DS18B20"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects