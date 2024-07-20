import Image from 'next/image'
import React from 'react'

const Book = () => {
  return (
    <div className='w-[250px] flex-col h-[300px] shadow-lg m-3 flex justify-center items-center'>
      <Image alt='Anand Math' width={140} height={100} src={'/books/anandmath.jpg'}></Image>
      <div className='w-full h-[100px] flex justify-around items-center flex-row-reverse'>
        <button className='w-[40px] h-[40px] rounded-[100%] font-bold text-[25px] bg-green-700 text-white flex justify-center items-center'>+</button>
        <div className='w-[20%] text-[16px]'>&#8377;200</div>
        <div className='w-[50%] flex justify-center items-center text-left pl-2'>
          <h3 className='text-[14px]'>Bankim Chandra Chatarjee</h3>
        </div>
      </div>
    </div>
  )
}

export default Book