
"use client"
import {
  Create,
  useForm,
  getValueFromEvent,

} from "@refinedev/antd";
import { Form, Select, Upload, Modal } from "antd";
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import {
  file2Base64,

} from "@refinedev/core";
import { toast } from 'react-hot-toast';
import { dataChunking } from "../../../constant/constant";
import { useState } from "react";
import { useModal } from "@refinedev/antd";



const UploadFile: React.FC = () => {
  const [valueChunkSize, setValueChunkSize] = useState<number>(1);
  const [valueChunkOverlap, setValueChunkOverlap] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { formProps, saveButtonProps, onFinish } = useForm();
  const { show, modalProps } = useModal();
  const[file,setFile]=useState()
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
      const { uploadthing } = values;
      // const base64Files = [];
      // const { uploadthing } = values;
      // for (const file of uploadthing) {
      //   if (file.originFileObj) {
      //     const base64String = await file2Base64(file);

      //     base64Files.push({
      //       ...file,
      //       base64String,
      //     });
      //   } else {
      //     base64Files.push(file);
      //   }
      // }
      const data = {
        ...values,
        selectedOption,
        file:file,
        valueChunkSize: valueChunkSize,
        valueChunkOverlap: valueChunkOverlap
      }
      console.log(data)
      // const res = await fetch("http://localhost:5000/chunk", {

      //   method: "POST",
      //   body: data
      // })
      // console.log(res)
      // CALLL API
      toast.success("Chunking Successfully")
    } catch (error: any) {
      console.log("Fail to upload file", error)
      toast.error("Chunking Error")
    }

  };

  return (
    <div className=" flex flex-col   w-full ml-4    ">
      {/* <button onClick={show} className="w-full">Continue</button> */}
      {/* <Modal {...modalProps} footer={null}  > */}
      <Create  title={null} goBack={ null} saveButtonProps={saveButtonProps} >
      <Form {...formProps} onFinish={handleOnFinish} layout="vertical"  >
        <Form.Item label="Uploadthing">
          <input type="file"  onChange={(e:any)=>setFile(e.target?.files[0])} />
          {/* <Form.Item
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
          </Form.Item> */}
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
      {/* </Modal> */}
    </div>
  )
}

export default UploadFile