"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "@refinedev/antd";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { AiOutlineArrowUp } from "react-icons/ai";

const InputPrompt = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();
  const textareaRef = useRef(null);

  const handleInput = (event:any) => {
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

  return (
    <>
      <div className="text-white w-full h-[84px] bg-[#212121]">
        <Form {...formProps} layout="vertical" className="flex items-center py-2 justify-center">
        <textarea
            ref={textareaRef}
            rows={1}
            className="relative text-white first-line:block mx-4 p-2.5 w-[80%] px-10 py-4 text-sm rounded-lg resize-none overflow-y-hidden border-0 bg-[#2F2F2F] focus:outline-none focus:ring-0 focus-visible:ring-0"
            placeholder="Your message..."
            onInput={handleInput}
            style={{ maxHeight: `${5 * 24}px` }} 
          />
        </Form>
      </div>
    </>
  );
};

export default InputPrompt;




// <div className='w-full  h-[84px]  text-white     bg-[#212121] border-white/20  '>
// <Form {...formProps} layout="vertical" className="  flex items-center justify-center " >
//   <Form.Item name="prompt" >
//     <div className=" relative bg-red-600 flex items-center  ml-5 w-[700px]  rounded-full">


//       <div className="">
//         {/* <div className=" absolute left-4 top-4 dark:text-white  focus-visible:outline-black dark:focus-visible:outline-white " >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"><path fill="white"
//               fillRule="evenodd" d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
//               clipRule="evenodd"></path></svg></div> */}
       
//         <div>
//         <textarea className="  resize-none border-0 bg-[#212121]    focus:outline-none focus:ring-0 focus-visible:ring-0  " placeholder="Enter your prompt...." />
//         </div>
        
        
//       </div>



//     </div>
//   </Form.Item>
// </Form>
// </div>