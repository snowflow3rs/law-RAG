
"use client"
import {
  Create,
  useForm,
  getValueFromEvent,

} from "@refinedev/antd";
import { Button, Divider, Form, Select, Upload, } from "antd";
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, } from 'antd';
import {
  file2Base64,

} from "@refinedev/core";
import { toast } from 'react-hot-toast';
import { dataChunking } from "../../../constant/constant";
import { useCallback, useState } from "react";
import { useModal } from "@refinedev/antd";
import axios from "axios";


export interface UploadFileProps {

  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>
}

const UploadFile: React.FC = () => {
  const [text, setText] = useState("");
  const [valueChunkSize, setValueChunkSize] = useState<number>(1);
  const [valueChunkOverlap, setValueChunkOverlap] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { formProps, saveButtonProps, onFinish } = useForm();
  const [file, setFile] = useState<File | undefined>();


  const MAX_TEXT_LENGTH = 100000;

  const handleTextChange = (event: any) => {

    let newText = event.target.value;
    if (newText.length > MAX_TEXT_LENGTH) {
      alert(`Error: Text cannot be longer than ${MAX_TEXT_LENGTH} characters. It will be trimmed to fit the limit.`);
      newText = newText.substring(0, MAX_TEXT_LENGTH);
    }
    setText(newText);

  };

  // handle  value range
  const onChangeChunkSize: InputNumberProps["onChange"] = (newValue) => {
    setValueChunkSize(newValue as number);
  };

  const onChangeChunkOverlap: InputNumberProps["onChange"] = (newValue) => {
    setValueChunkOverlap(newValue as number); // Update ChunkOverlap state
  };
  // handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0]
    setFile(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e: any) {
        setText(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  //handle submit
  const handleOnFinish = async (values: any) => {
    try {


      const base64Files = [];
      const { uploadthing } = values;
      for (const file of uploadthing) {
        if (file.originFileObj) {
          const base64String = await file2Base64(file);

          base64Files.push({
            ...file,
            base64String,
          });
        } else {
          base64Files.push(file);
        }
      }
      // const data = {
      //   ...values,
      //   selectedOption,
      //   text: text,
      //   file: base64Files,
      //   valueChunkSize: valueChunkSize,
      //   valueChunkOverlap: valueChunkOverlap
      // }
      // console.log(data)
//  const data ={
//   uploadthing:base64Files,
//     selected_optio:selectedOption,
//     chunk_overlap:valueChunkOverlap,
//     chunk_size:valueChunkSize

//  }
//  console.log(data)
      // CALLL API
      // const res = await fetch("http://localhost:5000/chunk", {

      //     method: "POST",
      //   body:data
      //   })
      //   console.log(res)

      const res = await fetch("http://localhost:5000/chunk", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({'file':base64Files,
                              'selected_option':selectedOption,
                              'chunk_overlap':100,
                              'chunk_size':500
        })
      })

const data = await res.json();
if (data.error) {
  alert(data.error);
} else {
  console.log(data.chunks)
}
      // const data = await res.json();
        
      toast.success("Chunking Successfully")
    } catch (error: any) {
      console.log("Fail to upload file", error)
      toast.error("Chunking Error")
    }

  };

  //test result


  return (
    <div className=" flex flex-col   w-full ml-4     ">
      <Create saveButtonProps={saveButtonProps} title={<p className=" font-mono font-light">Enter your file...</p>} goBack={null} 
      // footerButtons={({ }) => (

      //   <div className=" w-[420px] ">
          
      //     <button  className=" w-full m-4 p-2 rounded-lg border-2 bg-main-grey  border-black">Submit</button>

      //   </div>
      // )} 
      >
        <Form {...formProps} onFinish={handleOnFinish} layout="vertical" className=" " >



          {/* <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">TXT, DOCX, PDF </p>
              </div>
              <input id="dropzone-file" accept=".pdf,.docx" type="file" className=" hidden" onChange={handleFileUpload} />
            </label>
          </div> */}

          <Form.Item
            name="uploadthing"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload.Dragger
              listType="picture"
              multiple
              beforeUpload={() => false}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item label="Text" className="mt-3">

            
          </Form.Item>
          <Form.Item label="Select Option" required>
            <Select
              placeholder="Select an option"
              value={selectedOption}
              onChange={setSelectedOption}
            >
              {dataChunking.map((option: any) => (
                <Select.Option key={option.name} value={option.name}>
                  {option.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Select Chunk Size">
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={1000}
                  onChange={onChangeChunkSize}
                  value={typeof valueChunkSize === 'number' ? valueChunkSize : 0}
                // disabled={
                //   selectedOption === 'Document Specific Chunking' ||
                //   selectedOption === 'Semantic Chunking'
                // }

                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={1000}
                  style={{ margin: '0 16px' }}
                  value={valueChunkSize}
                  onChange={onChangeChunkSize}
                  disabled={
                    selectedOption === 'Document Specific Chunking'
                  }
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Select Chunk Overlap">
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={1000}
                  onChange={onChangeChunkOverlap}
                  value={typeof valueChunkOverlap === 'number' ? valueChunkOverlap : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={1000}
                  style={{ margin: '0 16px' }}
                  value={valueChunkOverlap}
                  onChange={onChangeChunkOverlap}
                />
              </Col>
            </Row>
          </Form.Item>



        </Form>

      </Create>

    </div>
  )
}

export default UploadFile