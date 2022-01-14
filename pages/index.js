import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  return(
    <div className='flex items-center justify-center bg-gradient-to-t from-rose-300 to-cyan-300 h-[100vh] w-[100vw] font-light '>
      <div className='bg-white/10 w-[300px] h-[450px] shadow-xl rounded-xl backdrop-blur-lg animate-animation1 relative'>
      <div className='bg-white/10 w-[60px] h-[60px] shadow-xl rounded-xl backdrop-blur-lg top-0 absolute -translate-x-1/2 -translate-y-1/2 animate-animation2'></div>
      <div className='bg-white/10 w-[75px] h-[75px] shadow-xl rounded-xl backdrop-blur-lg right-0 absolute translate-x-2/3 -translate-y-1/2 animate-animation3'></div>
      <div className='bg-white/20 w-[80px] h-[80px] shadow-2xl rounded-xl backdrop-blur-lg left-0 bottom-0 absolute -translate-x-2/3 translate-y-3/4 animate-animation3'></div>
      <div className='bg-white/20 w-[50px] h-[50px] shadow-xl rounded-xl backdrop-blur-lg right-0 bottom-0 absolute translate-x-2/3 translate-y-2/3 animate-animation3'></div>
        <div className='text-center text-3xl font-light mt-10'>Sign in</div>
        <input className='mt-16 mb-10 ml-12 rounded-full bg-white/20 shadow-md backdrop-blur-md px-2 h-[30px]' placeholder='Email...'/>
        <input className='ml-12 rounded-full bg-white/20 shadow-md backdrop-blur-md px-2 mb-12 h-[30px]' placeholder='Password...'/>
        <div className='text-center mb-4'>
          <a href='#'>Forgot password ?</a>
        </div>
        <button className='text-center h-[30px] w-[120px] mx-20 backdrop-blur-md bg-white/20 ease-in hover:bg-white/40 hover:shadow-xl transition-all shadow-lg rounded-full animate-fade-in-down'>Sign in</button>
      </div>  
    </div>
  )
}
