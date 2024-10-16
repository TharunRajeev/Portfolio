"use client"
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import { SocialIcon } from "react-social-icons"
import {AnimatePresence, motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, LeetCodeIcon } from "./Icons"
import { useEffect, useState } from "react"

const links = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/about',
        title: 'About'
    },
    {
        href: '/projects',
        title: 'Projects'
    }
]

const CustomMobileLink = ({href, title, toggle}) => {

    const router = usePathname();
    
    const handleClick = () => {
        toggle()
    }

    return(
        <Link onClick={handleClick} className="relative group text-light dark:text-dark" href={href}>
            {title}
            <span className={`h-[2px] inline-block absolute bg-light dark:bg-dark left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' :' w-0'}`}>
                &nbsp;</span>
        </Link>
    )
}

const CustomLink = ({href, title}) => {

    const router = usePathname();


    return(
        <Link className="relative group" href={href}>
            {title}
            <span className={`h-[1px] inline-block absolute bg-dark dark:text-dark dark:bg-light left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 ${router === href ? 'w-full' :' w-0'}`}>
                &nbsp;</span>
        </Link>
    )
}

const Navbar = () => {

    const[mode, setMode] = useThemeSwitcher();
    const[open, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <header className="w-full h-full py-8 md:px-32 px-8 dark:bg-dark dark:text-light
     font-medium flex items-center justify-between relative">

        <button className="flex-col justify-center items-center md:hidden flex" onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm -translate-y-0.5 ${ open ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm my-0.5 ${open ? "opacity-0": "opacity-100"}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm -translate-y-0.5 ${ open ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}`}></span>
        </button>

        <div className="w-full justify-center items-center flex">
            <nav
            className="md:flex hidden flex-row gap-6 w-1/3">                
                {links.map((link) => (
                    <CustomLink key={link.title} href={link.href} title={link.title}/>
                ))}
            </nav>
            <div className="w-1/3">
                <Logo/>
            </div>
            
            <nav className="md:flex hidden gap-2 w-1/3 justify-center items-center">

                <Link className="w-8 h-8 mr-4" href="https://leetcode.com/u/tharunrajeev29/">
                    <LeetCodeIcon className="w-full h-full"/>
                </Link>
                <Link className="w-8 h-8 mr-4" href="https://github.com/TharunRajeev">
                    <GithubIcon className="w-full h-full"/>
                </Link>
                
                <Link className="w-8 h-8" href="https://www.linkedin.com/in/tharun-rajeev29/">
                    <LinkedInIcon className="w-full h-full"/>
                </Link>
                

                <button className={`ml-4 flex items-center justify-center rounded-full p-[5px] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/> }
                </button>
            </nav>
        </div>

        {open && 
        <motion.div
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}} className="w-[70vw] z-30 flex-col gap-2 justify-center items-center md:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
            <nav
            className="flex flex-col justify-center items-center gap-6">
                {/* <CustomLink href='/' title={'Home'}></CustomLink>
                <CustomLink href={'/about'} title={'About'}></CustomLink>
                <CustomLink href={'/projects'} title={'Projects'}></CustomLink>
                <CustomLink href={'/contact'} title={'Contact'}></CustomLink> */}
                {links.map((link) => (
                    <CustomMobileLink key={link.title} href={link.href} title={link.title} toggle={handleClick}/>
                ))}
            </nav>
            
            <nav className="flex gap-2 justify-center mt-6 items-center">

                <Link className="w-8 h-8 mr-4" href="https://github.com">
                    <GithubIcon className="w-full dark:bg-dark bg-light h-full"/>
                </Link>
                
                <Link className="w-8 h-8" href="https://linkedin.com">
                    <LinkedInIcon className="w-full h-full"/>
                </Link>
                <button className={`ml-4 flex items-center justify-center rounded-full p-[5px] ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/> }
                </button>
            </nav>
        </motion.div>}
        
    </header>
  )
}

export default Navbar
