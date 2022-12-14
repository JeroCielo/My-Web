import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,  
  AiFillGithub
} from 'react-icons/ai';
import {SiDiscord} from 'react-icons/si';
import {GiAstronautHelmet} from 'react-icons/gi';
import Image from "next/image";
import ava from "../public/avatar.png";
import language from "../public/language.png";
import tool from "../public/tool.png";
import achievement from "../public/achievement.png";
import project from "../public/project.png";
import hobby from "../public/hobby.png";
import { useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Jero's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons dark:text-white'>jero</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className='cursor-pointer text-xl text-purple-800 dark:text-yellow-500'/>
              </li>
              <li>
                <a className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-8'>

            <div class="flex flex-wrap justify-center py-4">
              <div className="bg-gradient-to-br from-orange-700 to-blue-400 shadow-xl rounded-full mx-auto align-middle border-none">
                <Image src={ava} height={325} width={325}/>
              </div>
            </div>

            <h2 className='text-5xl py-4 text-blue-600 font-medium md:text-6xl'>
              Jero
            </h2>
            <h3 className='text-2xl py-1 md:text-3xl  dark:text-white'>
              Developer
            </h3>
            <p className='text-md py-4 leading-8 text-gray-800 mx-auto md:text-lg max-w-2xl  dark:text-gray-200'>
              Sup, I'm Jero, a high school sophomore and this is my Portfolio, providing personal projects and info. Feel free to contact me and check out that sick dark mode button!
            </p>
          </div>
          
          <div className='text-5xl flex justify-center gap-8 py-6 text-gray-600 dark:text-cyan-200'>
            <a href="https://twitter.com/JeroCi3lo">
              <AiFillTwitterCircle className='cursor-pointer'/>
            </a >
            <a href="https://discord.com/users/947803646278631435">
              <SiDiscord className='cursor-pointer'/>
            </a>
            <a href="https://github.com/JeroCielo">
              <AiFillGithub className='cursor-pointer'/>
            </a>
          </div>
          
        </section>

        <section> 
        ` <div class="md:grid gap-4 grid-cols-2">
            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={language} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Languages</h3>
              <h4 className='py-3 text-blue-600 dark:text-cyan-200'> Languages I use </h4>
              <div className='p-2'>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/C++-1F2F57.svg?style=for-the-badge&logo=c%2B%2B"/>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/Dart-0075ba?style=for-the-badge&logo=dart&logoColor=white"/>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/JavaScript-000000.svg?style=for-the-badge&logo=javascript&logoColor=F7E017"/>
              </div>
            </div>

            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={tool} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2  dark:text-white'>Tools</h3>
              <h4 className='py-3 text-blue-600  dark:text-cyan-200'> Tools I use </h4>
              <div className='p-2'>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/Flutter-54c0f4?style=for-the-badge&logo=flutter&logoColor=white"/>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/Unity-474747?style=for-the-badge&logo=unity&logoColor=white"/>
                <img className='py-1 mx-auto'src="https://img.shields.io/badge/Firebase-f5820d.svg?style=for-the-badge&logo=firebase&logoColor=white"/>
              </div>
            </div>

            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={achievement} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2  dark:text-white'>My Achievements</h3>
              <p className='py-2 dark:text-gray-200'>
                I do not have any recent achievements...????
              </p>
              <h4 className='py-3 text-blue-600  dark:text-cyan-200'> Recent Acheivements </h4>
            </div>

            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={hobby} width={150} height={150}/>
              <h3 className='text-lg font-medium pt-8 pb-2  dark:text-white'>Hobbies</h3>
              <h4 className='py-3 text-blue-600  dark:text-cyan-200'> Some of my favorite things to do are... </h4>
              <div className='p-2'>

              </div>
            </div>
          </div>

        </section>
        <div className='text-center shadow-xl p-10 pb-30 rounded-xl my-10'>
          <Image className='mx-auto' src={project} width={150} height={150}/>
          <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>My Projects</h3>
          <p className='py-2 dark:text-gray-200'>
            I have and I am working on multiple projects both small and big. Down bellow are some projects that I am currenly working on and some that I enjoyed making most
          </p>
          <h4 className='py-3 text-blue-600 dark:text-cyan-200'> Projects I am working on: </h4>
          <p className='text-gray-800 py-1 dark:text-gray-200'>Instagram Nonfollowback Detector</p>
          <p className='text-gray-800 py-1 dark:text-gray-200'>Nexus App</p>
          <p className='text-gray-800 py-1 dark:text-gray-200'>Daily Box App</p>
        </div>
      </main>

    </div>
  )
}
