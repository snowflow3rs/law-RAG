"use client"
import { AiOutlineUser } from 'react-icons/ai';
import InputPrompt from './input-promting';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "@refinedev/antd";
import { Form, message } from "antd";
import { AiOutlineArrowUp } from "react-icons/ai";

import axios from 'axios';
import { Empty } from './empty';

const MainPrompt: React.FC = () => {

  const { formProps, } = useForm();
  const [ads, setMessages] = useState<any>([])

  const [text, setText] = useState()

  const textareaRef = useRef(null);
   const messages = [
    { role: "user", text: "Hello babe can u marry me Hello babe can u marry meHello babe can u marry meHello babe can u marry me" },
    { role: "bot", text: "Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?" },
    { role: "user", text: "Hello babe can u marry me" },
    { role: "bot", text: "Of coursAdventure, fantike to hear? Adventd of se, fantasy, mystery, or something Of course! What kind of story would you like to hear? Adventure, fantasy, mystery, or something else?"},
   ]
   







  const handleInput = (event: any) => {
    const value = event.target.value
    setText(value)
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
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const userMessages = {

        text: text,
        role: "user",
        refer: []
      }

      const newMessage = [...messages, userMessages]
      console.log(newMessage)
      const res = await axios.post("http://127.0.0.1:8000/api", userMessages);
      console.log(res)

      setMessages((curr: any) => [...curr, userMessages, res.data,])
    } catch (error) {
      throw new Error("Fail to upload data")
    }
  }


  return (
    <div className='relative w-full h-full'>
      <div className='flex-1 flex-col'>
        <div className='sticky right-0 top-0 z-2 w-full bg-[#212121] h-14 p-2'>
          <div className='flex items-center justify-between px-4'>
            <div className='font-mono text-2xl  text-gray-400 font-semibold'>RAG</div>
            <div className='bg-red-500 h-10 w-10 rounded-full flex items-center justify-center'>
              <AiOutlineUser className='text-white' />
            </div>
          </div>
        </div>

        <div className='h-full bg-[#212121]'>
          <div className='w-[48rem] mx-auto h-full'>
            {messages.length === 0 ? (
              <div className="flex flex-col">
                <Empty label="No conversation started."/>
                
              </div>
            ) : (
              <div className="min-h-screen">
                {messages.map((message: any, index: number) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'items-start'} py-[20px] gap-5`}>
                    {message.role === 'bot' && (
                      <div className='bg-red-500 p-2 rounded-full flex items-center justify-center'>
                        <AiOutlineUser className='h-4 w-4 text-white' />
                      </div>
                    )}
                    <div className={`text-white leading-8  ${message.role === 'user' ? 'ml-auto bg-[#2F2F2F]  px-5 py-2.5 rounded-3xl':"" }`}>
                      <p>{message.text}</p>

                    </div>
                  </div>
                ))}

              </div>
            )}
          </div>
        </div>
      </div>

      <div className='sticky right-0 bottom-0 z-2 w-full'>
        <div className="text-white w-full  bg-[#212121]">
          <Form {...formProps} layout="vertical" className="flex items-center py-2 justify-center">
            <textarea
              ref={textareaRef}
              rows={1}
              className="relative text-white first-line:block mx-4 p-2.5 w-[80%] px-10 py-4 text-sm rounded-lg resize-none overflow-y-hidden border-0 bg-[#2F2F2F] focus:outline-none focus:ring-0 focus-visible:ring-0"
              placeholder="Your message..."
              onInput={handleInput}
              style={{ maxHeight: `${5 * 24}px` }}
            />
            <button onClick={handleSubmit} className=' hover:bg-slate-300 rounded-full h-10 w-10  flex items-center justify-center p-2'><AiOutlineArrowUp /></button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainPrompt;
