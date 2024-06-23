"use client";
import { useState } from "react";

import axios from "axios";
import { Create, useForm, getValueFromEvent } from "@refinedev/antd";
import { Form, Select, Upload, message } from "antd";
import type { InputNumberProps } from "antd";
import { Col, InputNumber, Row, Slider } from "antd";
import { file2Base64 } from "@refinedev/core";
import { toast } from "react-hot-toast";

// ////
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { dataChunking, specificData } from "../../constant/constant";
interface TestProps {
    handleDataFromChild?: any;
    handelFileFromChild?: any;
  }

const TestFile:React.FC<TestProps> = ({
    handelFileFromChild,
    handleDataFromChild,
  }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [valueChunkSize, setValueChunkSize] = useState<number>(1);
  const [valueChunkOverlap, setValueChunkOverlap] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSpecific, setSelectedSpecific] = useState<string | null>(null);
  const { formProps, saveButtonProps, onFinish } = useForm();
  const [loading, setLoading] = useState(false);


  const handleUpload = (info: any) => {
    if (info.file.status === 'done') {
      const file = info.file.originFileObj;
      if (file && file.type === 'application/pdf') {
        const url = URL.createObjectURL(file);
        handelFileFromChild(url);
      } else {
        message.error('Please upload a PDF file.');
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
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

      const res = await axios.post("http://localhost:5000/chunk", datas);

      handleDataFromChild(res.data);

      toast.success("Chunking Successfully");
    } catch (error: any) {
      setLoading(false);
      console.log("Fail to upload file", error);
      toast.error("Chunking Error");
    }
  };
  
  return (
    <Create saveButtonProps={saveButtonProps}
    title={<p className=" font-mono font-light">Enter your file...</p>}
    goBack={null} >

<Form
 {...formProps}
 onFinish={handleOnFinish}
 layout="vertical"
   
     
    >
     
      <Form.Item
        name="uploadthing"
        valuePropName="fileList"
        getValueFromEvent={getValueFromEvent}
        rules={[{ required: true, message: 'Please upload a file!' }]}
      >
        <Upload.Dragger
           listType="picture"
           
         
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess && onSuccess("ok");
            }, 0);
          }}
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
            <Form.Item label="Select Document" required>
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
      {/* {fileUrl && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div style={{ height: '750px', marginTop: '20px' }}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
      )} */}
    
    </Form>
    </Create>
  );
};

export default TestFile;
