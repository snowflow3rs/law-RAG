
"use client"
import {
  Create,
  useForm,
  getValueFromEvent,
} from "@refinedev/antd";
import { Form, Select, Upload, } from "antd";
import {
  file2Base64,
} from "@refinedev/core";
import { toast } from 'react-hot-toast';
import { dataChunking } from "../../../constant/constant";
import { useState } from "react";
interface UploadProps {


}
const UploadFile: React.FC<UploadProps> = (props) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { formProps, saveButtonProps, onFinish } = useForm();

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
      const data = {
        ...values,
        selectedOption,
        uploadthing: base64Files
      }

      console.log(data)
      // CALLL API
      toast.success("Chunking Successfully")
    } catch (error: any) {
      console.log("Fail to upload file", error)
      toast.error("Chunking Error")
    }

  };

  return (
    <div className=" flex flex-col w-1/2">
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} onFinish={handleOnFinish} layout="vertical">

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
          <Form.Item label="Uploadthing">
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
          </Form.Item>
        </Form>
      </Create>
    </div>
  )
}

export default UploadFile