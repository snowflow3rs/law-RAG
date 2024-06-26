"use client";
import React, { useState } from "react";
import DataChunked from "./data-chunked";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
// import {  } from "@react-pdf-viewer/search";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import UploadForm from "./upload/upload-form";
const Parent = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [sharedState, setSharedState] = useState();
  const [dataFile, setDataFile] = useState<string>("");
  const handleDataFromChild = (data: any) => {
    setSharedState(data);
  };
  const handelFileFromChild = (data: string) => {
    setDataFile(data);
  };
  return (
    <div className="  ">
      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-main-grey  sticky left-0 top-0 z-20  max-h-screen">
          <p className="m-4 text-[4rem] font-bold font-mono"> RAGA </p>
          <p className="ml-4 text-[1.5rem] font-normal font-mono">
            Explore chunking
          </p>
          <UploadForm
            handelFileFromChild={handelFileFromChild}
            handleDataFromChild={handleDataFromChild}
          />
        </div>

        <div className="  min-h-screen col-span-2 bg-gradient-to-br from-main-pink ">


          <div className="grid grid-cols-3 border-2 border-black mt-14 ml-12 mr-12 rounded-md p-4 bg-white/30 backdrop-blur-md">
            <div className=" col-span-3 py-2 ml-4  ">
              <p className="font-mono font-bold text-2xl    mb-2"> Preview... </p>
              {dataFile && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                  <div className=" h-[640px]  ">
                    <Viewer
                      fileUrl={dataFile}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
              )}
            </div>

          </div>
          {/* <div className="   border-2 border-black mt-16 ml-12 mr-8 rounded-md p-4 bg-white/30 backdrop-blur-md ">
            <div className="  col-span-3">
              <p className="font-mono font-bold text-2xl  mt-6 "> Resulting... </p>

              <DataChunked sharedState={sharedState} />
              <div className=" h-[300px]"></div>
            </div>
          </div> */}
          <div className=" mx-12 mt-8 ">
            <p className="font-mono font-bold text-2xl "> Where the result comes from </p>
            <DataChunked sharedState={sharedState} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Parent;

