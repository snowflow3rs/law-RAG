"use client"
import React, { useState } from 'react'
import UploadForm from './upload/upload-form'
import DataChunked from './data-chunked'

const Parent = () => {
    const [sharedState, setSharedState] = useState();

    const handleDataFromChild= (data:any)=>{

setSharedState(data)
    }
  return (
    
    <div className='  '>
        <div className="grid grid-cols-3 gap-4">
    <div className="bg-main-grey min-h-screen">
      <p className="m-4 text-[4rem] font-bold font-mono"> RAGA </p>
      <p className="ml-4 text-[1.5rem] font-normal font-mono">
        Explore chunking
      </p>
      <UploadForm handleDataFromChild={handleDataFromChild}/>
    </div>
    
    

    <div className="min-h-screen col-span-2 bg-gradient-to-br from-main-pink ">
    <p className="font-mono font-bold text-2xl  mt-6 "> Resulting... </p>

      <div>
      <div className="grid grid-cols-3 border-2 border-black mt-16 ml-12 mr-24 rounded-md p-4 bg-white/30 backdrop-blur-md ">
        <div className="col-span-3">
          <DataChunked  sharedState={sharedState}/>
        </div>

      </div>
      </div>

    </div>
  </div>
    </div>
  )
}

export default Parent