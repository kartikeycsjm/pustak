'use client'
import React from 'react'
import Books from '@/app/assets/Component/Books'
import Book from '@/app/assets/Component/Book'
import { UseCont } from './assets/Context/page'
const page = () => {
  const { dark } = UseCont()
  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} 
    w-full min-h-screen
     flex justify-center items-center flex-col`}>
      <Books>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </Books>
      <Books>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </Books>
    </div >
  )
}

export default page