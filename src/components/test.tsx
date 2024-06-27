import { Empty } from "@components/empty"
import React from 'react'

const TestResult = () => {
  const messages = [1,2]
  return (
    <>
     
      <div className="">
        {
          messages.length === 0 ? (
            <div className="flex flex-col   ">
              {messages?.length === 0 && (
                <Empty label="No conversation started." />
                
              )}
            </div>
          ) : (
            <div>
              <div className=" min-h-screen bg-red-400"
              >1</div>
              <div className=" min-h-screen bg-yellow-400 "
              >2</div>
            </div>
          )
        }
        
      </div>

    </>

  )
}

export default TestResult


{/* {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : " bg-[#f1f5f9] ",
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <Markdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-black text-white p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-black/10 rounded-lg p-1" {...props} />
                  )
                }} className="text-sm overflow-hidden leading-7">
                  {message.content || ""}
                </Markdown>

                
              </div>
            ))} */}

        {/* {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-[#f1f5f9] ">
              <Loader />
            </div>
          )} */}