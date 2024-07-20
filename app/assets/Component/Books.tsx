import React from 'react'

const Books = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='border-blue-900 w-full h-[430px] flex item-center justify-center flex-col'>
      <h3 className='ml-8 mt-9 text-[30px] text-blue-600 font-bold'>Novel</h3>
      <div id='category' className='flex w-[90%] p-2 overflow-x-scroll'>
        <div className='flex flex-col'>
          <div className='flex'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Books