import React from 'react'
import { AiFillMessage, AiOutlineMessage, AiOutlineUser, } from 'react-icons/ai'
import ListChat from './list-chat'
import { CiChat1 } from "react-icons/ci";
const SideBar = () => {
    return (
        <div className=" font-mono w-[260px] text-[#ECECEC] flex flex-col h-full ">

            <div className='px-3  flex-1'>
                <div className=' px-2 h-14 text-[#ECECEC] flex justify-between items-center'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-xl-heavy"><path fill="currentColor" fillRule="evenodd" d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clipRule="evenodd"></path></svg></div>                    <div>

                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="icon-xl-heavy"><path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path></svg>
                    </div>
                </div>
                <div className='max-h-[400px] cursor-pointer  overflow-y-auto '>
                    <div className=' flex items-center py-2 px-3  text-sm  gap-2 hover:bg-[#212121] rounded-lg '>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className=" w-5"><path fill="currentColor" fillRule="evenodd" d="M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M6.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0" clipRule="evenodd"></path></svg>
                        </div>
                        <p className=' text-[16px] font-mono ml-1'> Explore RAG</p>

                    </div>
                    <div className=' font-mono font font-light pl-3 my-4'>Recent </div>
                    <div className=' flex items-center py-2 px-3  text-sm  gap-2 hover:bg-[#212121] rounded-lg '>
                        <CiChat1 className=' text-white' />                      
                        <p className=' text-[16px] font-mono ml-1'> Conversation 1</p>
                     </div>
                    <div className=' flex items-center py-2 px-3  text-sm  gap-2 hover:bg-[#212121] rounded-lg '>
                        <CiChat1 className=' text-white' />                      
                        <p className=' text-[16px] font-mono ml-1'> Conversation 2</p>
                    </div>
                    <div className=' flex items-center py-2 px-3  text-sm  gap-2 hover:bg-[#212121] rounded-lg '>
                        <CiChat1 className=' text-white' />                      
                        <p className=' text-[16px] font-mono ml-1'> Conversation 3</p>
                     </div>
                    <div className=' flex items-center py-2 px-3  text-sm  gap-2 hover:bg-[#212121] rounded-lg '>
                        <CiChat1 className=' text-white' />                      
                        <p className=' text-[16px] font-mono ml-1'> Conversation 4</p>
                    </div>
                    
                    


                </div>


            </div>
            <div className=' cursor-pointer px-3 h-[80px]'>
                <div className='flex items-center gap-2 py-1  hover:bg-[#212121] rounded-lg'>
                    <div className=' flex h-7 w-7 items-center justify-center rounded-full border border-gray-500'><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="none" viewBox="0 0 24 24"
                        className="icon-sm shrink-0">
                        <path fill="currentColor"
                            d="M6.394 4.444c.188-.592 1.024-.592 1.212 0C8.4 8.9 9.1 9.6 13.556 10.394c.592.188.592 1.024 0 1.212C9.1 12.4 8.4 13.1 7.606 17.556c-.188.592-1.024.592-1.212 0C5.6 13.1 4.9 12.4.444 11.606c-.592-.188-.592-1.024 0-1.212C4.9 9.6 5.6 8.9 6.394 4.444m8.716 9.841a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317">
                        </path>
                    </svg></div>
                    <div className=' ml-1'>
                        <p className='  font-mono  text-[16px]'>Upgrade plan</p>
                        <p className=' text-[12px] text-gray-500 '> Get GPT-4, DALL-E, and more</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SideBar

{/* <div className=' text-[#ECECEC]  flex-1  w-[260px]  cursor-pointer space-y-4 py-4 flex flex-col h-full  '>
            <div className='  min-h-0  px-3'>

                <div className='  h-14 text-white flex justify-between items-center'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-xl-heavy"><path fill="currentColor" fillRule="evenodd" d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clipRule="evenodd"></path></svg></div>                    <div>

                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="icon-xl-heavy"><path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path></svg>
                    </div>
                </div>

                <div className=' space-y-1 mr-2 pr-2  overflow-y-auto'>
                    <div className='   my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg '>Hello World!</div>
                    <div className='  my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg'> Hello World!</div>
                    <div className='  my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg'> Hello World!</div>
                    <div className='  my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg'> Hello World!</div>
                    <div className='   my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg '>Hello World!</div>
                   


                </div>
                {/* <ListChat/>  */}
//         <div className='  h-[84px] '>
//             Upgrade
//         </div>
//     </div>


// </div> 

{/* <div className='   my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg '>
<CiChat1 className=' text-white' />
Hello World!1</div>
<div className='  my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg'> Hello World!</div>
<div className='  my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg'> Hello World!</div>
<div className='   my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg '>Hello World!1</div>
<div className='  my-1 text-sm p-2 gap-2 hover:bg-[#212121] rounded-lg'> Hello World!</div> */}
