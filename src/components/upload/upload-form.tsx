"use client";
import { useState } from "react";

import axios from "axios";
import { Create, useForm, getValueFromEvent, SaveButton } from "@refinedev/antd";
import { Button, Form, Select, Upload, message } from "antd";
import type { InputNumberProps } from "antd";
import { Col, InputNumber, Row, Slider } from "antd";
import { file2Base64 } from "@refinedev/core";
import { toast } from "react-hot-toast";
import { dataChunking, specificData } from "../../../constant/constant";


import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { AiOutlineArrowRight } from "react-icons/ai";

interface UploadFormProps {
  handleDataFromChild?: any;
  handelFileFromChild?: any;
}

const UploadForm: React.FC<UploadFormProps> = ({
  handelFileFromChild,
  handleDataFromChild,
}) => {
  const [valueChunkSize, setValueChunkSize] = useState<number>(1);
  const [valueChunkOverlap, setValueChunkOverlap] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSpecific, setSelectedSpecific] = useState<string | null>(null);
  const { formProps, saveButtonProps, onFinish } = useForm();
  const [loading, setLoading] = useState(false);

  const MAX_TEXT_LENGTH = 100000;

  // handle  value range
  const onChangeChunkSize: InputNumberProps["onChange"] = (newValue) => {
    setValueChunkSize(newValue as number);
  };

  const onChangeChunkOverlap: InputNumberProps["onChange"] = (newValue) => {
    setValueChunkOverlap(newValue as number); // Update ChunkOverlap state
  };

  //handle submit
  const handleOnFinish = async (values: any) => {
    try {
      setLoading(true);

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

      const datas = {
        ...values,
        selected_option: selectedOption,
        specific_chunk:
          selectedOption === "Document Specific Chunking"
            ? selectedSpecific
            : "",
        file: base64Files,
        chunk_size: valueChunkSize,
        chunk_overlap: valueChunkOverlap,
      };

       console.log(datas);
      const res = await axios.post("http://localhost:5000/chunk", datas);
 console.log(res)
      handleDataFromChild(res.data);

      toast.success("Chunking Successfully");
    } catch (error: any) {
      setLoading(false);
      console.log("Fail to upload file", error);
      toast.error("Chunking Error");
    }
  };

  const handleUpload = (info: any) => {
    const file = info.file.originFileObj;
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);

      handelFileFromChild(url);
    }
  };

 

  return (
    <div className=" flex flex-col   w-full ml-4     ">
      <Create
      isLoading={loading}
        saveButtonProps={saveButtonProps}
        title={<p className=" font-mono font-light">Enter your file...</p>}
        goBack={null}
        footerButtons={({saveButtonProps }) => (
        <>
          <Button className=" w-[120px] h-10 bg-white shadow-[4px_4px_#323232] text-[17px] font-semibold text-[#323232] cursor-pointer rounded-[5px] border-2 border-solid border-[#323232)] active:shadow-[0px_0px_#323232] active:translate-x-[3px] active:translate-y-[3px]"  {...saveButtonProps}>
            Let`s go  <AiOutlineArrowRight/></Button>
          </>
        )}
      >




        <Form
          {...formProps}
          onFinish={handleOnFinish}
          layout="vertical"
          className=" "
        >
          <Form.Item
            name="uploadthing"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            rules={[{ required: true, message: "Please upload a file!" }]}
          >
            <Upload.Dragger
              listType="picture"
              
              onChange={handleUpload}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item className="mt-4" label="Select method RAG" required>
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
          {selectedOption === "Document Specific Chunking" && ( // Conditionally render specific options
            <Form.Item label="Select Chunking Type" required>
              <Select
                placeholder="Select an option"
                value={selectedSpecific}
                onChange={setSelectedSpecific}
                // disabled={selectedOption === 'Document Specific Chunking'} // Disable when specific chunking
              >
                {specificData.map((option) => (
                  <Select.Option key={option.name} value={option.name}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
          <Form.Item label="Select Chunk Size">
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={2000}
                  onChange={onChangeChunkSize}
                  value={
                    typeof valueChunkSize === "number" ? valueChunkSize : 0
                  }
                  // disabled={
                  //   selectedOption === 'Document Specific Chunking' ||
                  //   selectedOption === 'Semantic Chunking'
                  // }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={2000}
                  style={{ margin: "0 16px" }}
                  value={valueChunkSize}
                  onChange={onChangeChunkSize}
                  // disabled={
                  //   selectedOption === 'Document Specific Chunking'
                  // }
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Select Chunk Overlap">
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={2000}
                  onChange={onChangeChunkOverlap}
                  value={
                    typeof valueChunkOverlap === "number"
                      ? valueChunkOverlap
                      : 0
                  }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={2000}
                  style={{ margin: "0 16px" }}
                  value={valueChunkOverlap}
                  onChange={onChangeChunkOverlap}
                />
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Create>
    </div>
  );
};

export default UploadForm;

// handle file upload
// const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

//   const file = e.target.files?.[0]
//   setFile(file)
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e: any) {
//       setText(e.target.result);
//     };
//     reader.readAsText(file);
//   }
// };

// const handleTextChange = (event: any) => {

//   let newText = event.target.value;
//   if (newText.length > MAX_TEXT_LENGTH) {
//     alert(`Error: Text cannot be longer than ${MAX_TEXT_LENGTH} characters. It will be trimmed to fit the limit.`);
//     newText = newText.substring(0, MAX_TEXT_LENGTH);
//   }
//   setText(newText);

// };
