import React from 'react'

const TestResult = () => {
  return (
    <>
    {/* <div className=' h-screen bg-red-400'></div> */}
    {false ? (
  <>
    <div className='min-h-screen'></div>
  </>
) : (


  <>
    <div className='  bg-red-400 min-h-screen'>1</div>
    <div className=' bg-purple-600 min-h-screen'>2</div>
    <div className=' bg-red-400 min-h-screen'>1</div>
    <div className=' bg-purple-600 min-h-screen'>2</div>
    <div className=' bg-red-400 min-h-screen'>1</div>
    <div className=' bg-purple-600 min-h-screen'>2</div>
  </>
)

}

    </>

  )
}

export default TestResult
