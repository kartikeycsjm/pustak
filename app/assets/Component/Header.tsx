'use client'
import React from 'react'
import Image from 'next/image'
import { UseCont } from '../Context/cont'
const Header = () => {
    const {dark,setDark}=UseCont();
    return (
        <div className={`${dark?'bg-[#000640] text-blue-300':'bg-slate-400 text-blue-900'} flex w-full h-[70px] 
    items-center justify-between`}>
            <h1 className='ml-5 text-[35px]  font-bold'>Pustak</h1>
            <div id='icons' className='w-[200px] flex justify-around items-center'>
                <Image className=' cursor-pointer'
                 src={'/icons/house.png'} width={35} height={30} alt='e'></Image>
                <Image className=' cursor-pointer'
                 src={'/icons/trolley.png'} width={35} height={30} alt='e'></Image>
                <Image className=' cursor-pointer'
                onClick={()=>setDark(!dark)}
                 src={dark?'/icons/dark.png':'/icons/light.png'} width={25} height={25} alt='e'></Image>
            </div>
        </div>
    )
}

export default Header