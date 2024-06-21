

import axios from "axios"
import { getDataChunkType } from "../type"

const url = "http://localhost:5000"
export const getDataChunk = async ({base64Files,selectedOption,valueChunkOverlap,valueChunkSize}:any)=>{

    const res = await fetch("http://localhost:5000/chunk", {
        method: "POST",
  headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            'file': base64Files,
            'selected_option': selectedOption,
            'chunk_overlap': valueChunkOverlap,
            'chunk_size': valueChunkSize
          }
        )
      })
      const data = await res.json()
      return data.chunks
}

// `${url}/chunk`