"use client";

import React from "react";
import TestFile from "./test";

interface DataChunkedProps {
  sharedState?: {
    chunks: [text: String, id: Number, type: String];
  };
}
//raw data
const data =[

  {'id': 18, 'text': "Our guidance assumes no change to the value of the Company's strategic investment portfolio as it is not possible to forecast future gains and losses. In addition, the guidance below is based on estimated GAAP tax rates that reflect the Company’s currently available information, and excludes forecasted discrete tax items such as excess tax benefits from stock-based compensation. The GAAP tax rates may fluctuate due to discrete tax items and related effects in conjunction with certain provisions in the Tax Cuts and Jobs Act, future acquisitions or other transactions.", 'type': 'NarrativeText'},
  {'id': 19, 'text': '<table><thead><th>Revenue</th><th>$8.99999 - $8.72 Billion</th><th>$34.7 - $34.8 Billion</th></thead><tr><td>Y/Y Growth</td><td>~11%</td><td>~11%</td></tr><tr><td>FX Impact?)</td><td>$100M Y/Y FX</td><td>no impact</td></tr><tr><td>GAAP Operating Margin</td><td></td><td>~13.3%</td></tr><tr><td>Non-GAAP Operating Margin?)</td><td></td><td>~30.0%</td></tr><tr><td>GAAP Diluted Earnings per Share®)</td><td>$1.02 - $1.03</td><td>$3.50 - $3.52</td></tr><tr><td>Non-GAAP Diluted Earnings per Share?)</td><td>$2.05 - $2.06</td><td>$8.04 - $8.06</td></tr><tr><td>Operating Cash Flow Growth (Y/Y)®)</td><td></td><td>22% - 23%</td></tr><tr><td>Current Remaining Performance Obligation Growth (Y/Y)</td><td>Slightly above 11%</td><td></td></tr></table>', 'type': 'Table'}

]
//
const DataChunked: React.FC<DataChunkedProps> = ({ sharedState }) => {
  return (
    <div className="mt-4 w-full">
      {/* <TestFile/> */}
      {sharedState?.chunks.map((item: any, i: number) => (
        <div
          key={i}
          className=" my-6 flex flex-col items-start  bg-gradient-to-br from-main-pink  border-2 border-black p-2 rounded-md w-[100%] shadow-[0_4px_1px_1px_rgba(0,0,0,0.3)]"
        >
          {item.type === "Table" ? (
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          ) : (
            <div>
              <p className="  ml-2 font-semibold text-[1.25rem]">{item.text}</p>
              <p className="  ml-2 font-semibold text-[1.25rem]">{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataChunked;
