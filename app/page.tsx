'use client'
import React from 'react'
import { UseCont } from './assets/Context/page'
const page = () => {
  const {dark}=UseCont()
  return (
    <div className={`${dark?'bg-black text-white':'bg-white text-black'} w-full h-screen
    `}>
      hello world
    </div>
  )
}

export default page