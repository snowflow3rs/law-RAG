"use client"
import { AiOutlineProfile, AiOutlineUser } from 'react-icons/ai';
import InputPrompt from './input-promting';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "@refinedev/antd";
import { Divider, Form, message } from "antd";
import { AiOutlineArrowUp } from "react-icons/ai";

import axios from 'axios';
import { Empty } from './empty';
import Typist from 'react-typist';
const MainPrompt: React.FC = () => {

  const { formProps, } = useForm();
  const [messages, setMessages] = useState<any>([])
  const [text, setText] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  //  const messages = [
  //   { role: "user", text: "Hello babe can u marry me Hello babe can u marry meHello babe can u marry meHello babe can u marry me" },
  //   { role: "bot", text: "Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?" },
  //   { role: "user", text: "Hello babe can u marry me" },
  //   { role: "bot", text: "Of coursAdventure, fantike to hear? Adventd of se, fantasy, mystery, or something Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?"},
  //  ]



  const handleFocus = () => {
    setIsInputFocused(true);
  }



  // handle resize auto text area
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value)
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;


    if (textarea.scrollHeight > 5 * 24) {
      textarea.style.height = `${5 * 24}px`;
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  };
// handle key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit(event);
    }
  };
  //  handle submmit
  const handleSubmit = async (e: any) => {
    try {

      e.preventDefault()
      setLoading(true)

      const userMessages = {

        text: text,
        role: "user",
        refer: []
      }

      // const newMessage = [...messages, userMessages]
    
      const res = await axios.post("http://127.0.0.1:8000/api", userMessages);
     

      setMessages((curr: []) => [...curr, userMessages, res.data,])
      setText("");
      setLoading(false)
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.overflowY = 'hidden';
      }
    } catch (error) {
      console.log("Fail to upload data")
      setLoading(false)

    }
  }


  return (
    <div className='relative text-white flex flex-col  h-full'>
      <div className='sticky  top-0 z-2  bg-[#212121] h-14 p-2'>
        <div className='flex items-center justify-between px-4'>
          <div className='font-mono text-2xl  text-gray-400 font-semibold'>RAG</div>
          <div className='bg-red-500 h-10 w-10 rounded-full flex items-center justify-center'>
            <AiOutlineUser className='text-white' />
          </div>
        </div>
      </div>

      <div className=' flex-1 overflow-y-auto bg-[#212121] '>
      <div className='w-[48rem]  mx-auto '>
       {messages.length === 0 ? (
         <div className="flex   flex-col">
           <Empty label="No conversation started." />

         </div>
       ) : (
         <div className=" ">
           {messages.map((message: any, index: number) => (
             <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'items-start'} py-[20px] gap-5`}>
               {message.role === 'bot' && (
                 <div className='bg-red-500 p-2 rounded-full flex items-center justify-center'>
                   <AiOutlineUser className='h-4 w-4 text-white' />
                 </div>
               )}
               <div className={`text-white leading-8  ${message.role === 'user' ? ' max-w-[70%] break-words  ml-auto bg-[#2F2F2F]  px-5 py-2.5 rounded-3xl' : ""}`}>
                 {message.role === "bot" ? <Typist cursor={{ show: false }} avgTypingDelay={30}>{message.text}</Typist> : <p>{message.text}</p>}

               </div>
             </div>
           ))}

         </div>
       )}
     </div>
          
      </div>


      {/*  input */}
      <div className='sticky    bottom-0 '>
       <div className='sticky bottom-0 z-2  bg-[#212121]'>
   <div className="text-white w-full  ">
     <Form {...formProps} layout="vertical" className="flex flex-1 mx-auto w-[70%] bg-[#2F2F2F]   rounded-3xl   items-end py-1 justify-center">
       <div className=' text-white pr-2 pl-3 pb-[14px]' >

         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z" clipRule="evenodd"></path></svg>
       </div>
       <textarea
       value={text}
       onKeyDown={handleKeyDown}
         onFocus={handleFocus}
         ref={textareaRef}
         rows={1}
         className="relative text-white block w-full py-4   text-sm rounded-lg resize-none overflow-y-hidden border-0 bg-[#2F2F2F] focus:outline-none focus:ring-0 focus-visible:ring-0"
         placeholder="Your message..."
         onChange={handleInput}
         style={{ maxHeight: `${5 * 24}px` }}
       />
       <div className='p-2'>
         <button   disabled={!isInputFocused || text.trim().length === 0} onClick={handleSubmit} className='rounded-full h-10 w-10  flex items-center justify-center p-2"hover:bg-slate-300 '>{
           !loading ? <AiOutlineArrowUp className='text-black' /> : <div className=' bg-black w-2 h-2' />}</button>
       </div>
     </Form>
     <div className='font-sans text-gray-400 flex justify-center items-center py-1 text-sm'>Power base on RAG</div>
   </div>
      </div>


    </div>
    </div>
  );
};

export default MainPrompt;









