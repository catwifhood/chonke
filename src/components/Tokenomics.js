import React from 'react'

export default function Tokenomics() {
  return (
    <div className='w-full mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1280px] py-20 mx-auto items-center px-5 md:px-0">
        <div className='col-span-1 md:col-span-3 flex justify-center mb-10'>
          <h1 className='text-4xl md:text-8xl font-black font-katana'>TOKENOMICS</h1>
        </div>
        <div className='bg-white p-4 rounded-xl flex flex-col items-center'>
          <img src='/image 9.png' alt='image' className='rounded-xl w-full' />
          <p className='text-4xl text-[#FFB400] text-center mt-4'>LP BURNT</p>
        </div>
        <div className='bg-white p-4 rounded-xl flex flex-col items-center'>
          <img src='/image 5 (1).png' alt='image' className='rounded-xl w-full' />
          <p className='text-4xl text-[#FFB400] text-center mt-4'>MINT REVOKED</p>
        </div>
        <div className='bg-white p-4 rounded-xl flex flex-col items-center'>
          <img src='/image 6.png' alt='image' className='rounded-xl w-full max-h-[368px]' />
          <p className='text-4xl text-[#FFB400] text-center mt-4'>NO TAX</p>
        </div>
      </div>
    </div>
  )
}
