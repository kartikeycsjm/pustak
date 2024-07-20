import React from 'react'

const Books = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=' w-full h-[430px] justify-center flex-col'>
      <h3 className='ml-10 text-[30px] text-blue-600 font-bold'>Novel</h3>
      <div id='category' className=' mx-[5%] flex w-[90%] p-2 overflow-x-scroll'>
        <div className='flex flex-col'>
          <div className='flex'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Books