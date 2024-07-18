import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <div className='w-full h-[70px] bg-[#000640] flex
    items-center justify-between'>
            <h1 className='ml-5 text-[30px] text-gray-100 font-bold'>Pustak</h1>
            <div id='icons' className='w-[100px] flex justify-around items-center'>
                <Image src={'/icons/house.png'} width={30} height={20}></Image>
                <Image src={'/icons/trolley.png'} width={30} height={20}></Image>
            </div>
        </div>
    )
}

export default Header