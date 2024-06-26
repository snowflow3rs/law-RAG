import React from 'react'
import InputPrompt from './input-promting'
import TestResult from './test'
import { AiOutlineUser } from 'react-icons/ai'

const MainPrompt = () => {
  return (

    <div className=' relative w-full min-h-screen'>


      <div className=' flex flex-col'>
        <div className=' sticky right-0 top-0 z-2 w-full bg-[#212121] h-14  p-2'>
        <div className='flex items-center justify-between px-4'>
        <div className=' font-mono text-2xl text-white font-semibold'>RAG</div>
          <div className=' bg-red-500 h-10 w-10 rounded-full flex items-center justify-center'>
        <AiOutlineUser className='  text-white'/>
            
          </div>
        </div>
        </div>

        <div>
          <TestResult />
        </div>
        <div className=' sticky right-0 bottom-0 z-2 w-full   ' >
          <InputPrompt />
        </div>
      </div>
    </div>
  )
}

export default MainPrompt
