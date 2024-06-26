"use client";

import React from "react";
import TestFile from "./test";
import Image from "next/image";

interface DataChunkedProps {
  sharedState?: {
    chunks: [text: String, id: Number, type: String];
  };
}
//raw data
const data =[

  {'id': 18, 'text': "Our guidance assumes no change to the value of the Company's strategic investment portfolio as it is not possible to forecast future gains and losses. In addition, the guidance below is based on estimated GAAP tax rates that reflect the Company’s currently available information, and excludes forecasted discrete tax items such as excess tax benefits from stock-based compensation. The GAAP tax rates may fluctuate due to discrete tax items and related effects in conjunction with certain provisions in the Tax Cuts and Jobs Act, future acquisitions or other transactions.", 'type': 'NarrativeText'},
  {'id': 19, 'text': '<table><thead><th>Revenue</th><th>$8.99999 - $8.72 Billion</th><th>$34.7 - $34.8 Billion</th></thead><tr><td>Y/Y Growth</td><td>~11%</td><td>~11%</td></tr><tr><td>FX Impact?)</td><td>$100M Y/Y FX</td><td>no impact</td></tr><tr><td>GAAP Operating Margin</td><td></td><td>~13.3%</td></tr><tr><td>Non-GAAP Operating Margin?)</td><td></td><td>~30.0%</td></tr><tr><td>GAAP Diluted Earnings per Share®)</td><td>$1.02 - $1.03</td><td>$3.50 - $3.52</td></tr><tr><td>Non-GAAP Diluted Earnings per Share?)</td><td>$2.05 - $2.06</td><td>$8.04 - $8.06</td></tr><tr><td>Operating Cash Flow Growth (Y/Y)®)</td><td></td><td>22% - 23%</td></tr><tr><td>Current Remaining Performance Obligation Growth (Y/Y)</td><td>Slightly above 11%</td><td></td></tr></table>', 'type': 'Table'},
  {"id":20,"text":"https://i.pinimg.com/236x/a7/ba/71/a7ba71196dac3d4f463957ca9d7aff11.jpg","type":"image"}
 
]
//
//  raw data 1
// const data = [

//   { "ID": 0, "text": "\u0110\u00e2y l\u00e0 d\u00f2ng ch\u1eef \u0111\u1ec3 th\u1eed nghi\u1ec7m. H\u00f4m ", "type": "text" },
//   { "ID": 1, "text": "\u00f4m nay tr\u1eddi th\u1eadt \u0111\u1eb9p!", "type": "text" }]

const DataChunked: React.FC<DataChunkedProps> = ({ sharedState }) => {
  return (
    <div className="mt-4 w-full ">
      {/* <TestFile/> */}
      {data.map((item: any, i: number) => (
        <div
          key={i}
          className=" my-6 flex mr-16 flex-col items-start  bg-gradient-to-br from-main-pink  border-2 border-black p-2 rounded-md w-[100%] shadow-[0_4px_1px_1px_rgba(0,0,0,0.3)]"
        >
          {item.type === "Table" && (
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          ) }
          {item.type ==="NarrativeText"&&(

<div>
<p className="  ml-2 font-semibold text-[1.25rem]">{item.text}</p>
<p className="  ml-2 font-semibold text-[1.25rem]">{item.text}</p>
</div>
          )}
          {item.type === "image" && (
              <div className="w-full h-64 bg-gray-200 relative">
              <Image  
                src={item.text}
                alt="Description"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          ) }
        </div>
      ))}
    </div>
  );
};

export default DataChunked;
