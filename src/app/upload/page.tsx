

import DataChunked from "@components/data-chunked";
import UploadFile from "@components/upload/upload-file"



const UploadPage = async () => {



  return (

    <main className="bg-main-grey flex flex-col min-h-screen text-black">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-main-grey min-h-screen">
          <p className="m-4 text-[4rem] font-bold font-mono"> RAGA </p>
          <p className="ml-4 text-[1.5rem] font-normal font-mono">
            Explore chunking
          </p>
          <UploadFile />

          {/* <p className="ml-4 mt-2 font-bold"> By: ... </p> */}

          {/* <p className="ml-4 mt-6 text-[1.25rem]">blabla blabla</p> */}

          {/* {isLoading ? (
              <button className="m-4 p-2 rounded-lg border-2 border-black">
                <Loading />
                sad
              </button>
            ) : (
              <button
                className="m-4 p-2 rounded-lg border-2 border-black"
                type="submit"
              >
                Let's go
              </button>
            )} */}

        </div>
        <div className="min-h-screen col-span-2 bg-gradient-to-br from-main-pink">

          <div className="grid grid-cols-3 border-2 border-black mt-16 ml-12 mr-24 rounded-md p-4 bg-white/30 backdrop-blur-md">
            <div className="col-span-3">

              <DataChunked />
            </div>

          </div>
          {/*           
                    <div className="ml-12 mt-8">
                        <p className="font-mono font-bold text-2xl "> Where the result comes from </p>
                        <Comments comments={comments} result={result} />
                        return result
                    </div> */}
        </div>
      </div>
    </main>


  )
}

export default UploadPage