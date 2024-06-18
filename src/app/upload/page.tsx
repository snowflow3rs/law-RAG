import ChunkDisclosure from "@components/upload/chunk-disclosure"
import UploadFile from "@components/upload/upload-file"


const UploadPage = async () => {

    return (

        <div className=" " >
            <h1>Upload file</h1>
            <ChunkDisclosure/>
            <UploadFile />

        </div>


    )
}

export default UploadPage