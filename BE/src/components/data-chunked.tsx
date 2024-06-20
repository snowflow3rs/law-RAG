"use client"

import React from 'react'


const data =
  [{ 'id': 0, 'text': 'Salesforce Announces Strong Second Quarter Fiscal 2024 Results', 'type': 'Title' },
  { 'id': 1, 'text': 'SAN FRANCISCO, Calif. - August 30, 2023 - Salesforce (NYSE: CRM), the #1 AI CRM, today announced results for its second quarter fiscal 2024 ended July 31, 2023.', 'type': 'NarrativeText' },
  { 'id': 2, 'text': '• Second Quarter Revenue of $8.60 Billion, up 11% Year-Over-Year ("Y/Y"), up 11% in Constant Currency ("CC")', 'type': 'ListItem' },
  { 'id': 3, 'text': 'Second Quarter GAAP Operating Margin of 17.2% and Non-GAAP Operating Margin of 31.6% • Current Remaining Performance Obligation of $24.1 Billion, up 12% Y/Y, 11% CC • Second Quarter GAAP Diluted Earnings per Share ("EPS") of $1.28 and Non-GAAP Diluted EPS of', 'type': 'ListItem' },
  { 'id': 4, 'text': '$2.12', 'type': 'ListItem' },
  { 'id': 5, 'text': 'Returned $1.9 Billion to Stockholders in the Second Quarter in the Form of Share Repurchases Initiates Third Quarter FY24 Revenue Guidance of $8.70 Billion to $8.72 Billion, up 11% Y/Y • • Raises Full Year FY24 Revenue Guidance to $34.7 Billion to $34.8 Billion, up 11% Y/Y • Raises Full Year FY24 GAAP Operating Margin Guidance to 13.3% and Non-GAAP Operating', 'type': 'ListItem' },
  { 'id': 6, 'text': 'Margin Guidance to 30.0%', 'type': 'ListItem' },
  { 'id': 7, 'text': '• Raises Full Year FY24 Operating Cash Flow Growth Guidance to 22% to 23% Y/Y', 'type': 'Title' },
  { 'id': 8, 'text': '“Our transformation drove our strong second quarter results, delivering revenue of $8.6 billion and record GAAP and non-GAAP operating margins,” said Marc Benioff, Chair and CEO of Salesforce. “Based on our performance and what we see in the back half of the year, we’re raising our fiscal year ‘24 revenue, operating margin, and operating cash flow growth guidance. As the #1 AI CRM, with industry-leading clouds, Einstein, Data Cloud, MuleSoft, Slack and Tableau, all integrated on one trusted, unified platform, we’re leading our customers into the new AI era.”', 'type': 'NarrativeText' },
  { 'id': 9, 'text': '"We continue to execute against our profitable growth framework, delivering 17.2% GAAP operating margin and 31.6% non-GAAP operating margin — exceeding our target three quarters early,” said Amy Weaver, President and CFO of Salesforce. “We are accelerating our transformation and continue to drive strong shareholder value."', 'type': 'NarrativeText' },
  { 'id': 10, 'text': 'Salesforce delivered the following results for its fiscal second quarter:', 'type': 'NarrativeText' },
  { 'id': 11, 'text': 'Revenue: Total second quarter revenue was $8.60 billion, an increase of 11% Y/Y and 11% CC. Subscription and support revenues were $8.01 billion, an increase of 12% Y/Y. Professional services and other revenues were $0.60 billion, an increase of 3% Y/Y.', 'type': 'NarrativeText' },
  { 'id': 12, 'text': 'Operating Margin: Second quarter GAAP operating margin was 17.2%. Second quarter non-GAAP operating margin was 31.6%. Restructuring negatively impacted second quarter GAAP operating margin by (50) bps.', 'type': 'NarrativeText' },
  { 'id': 13, 'text': 'Earnings per Share: Second quarter GAAP diluted EPS was $1.28, and non-GAAP diluted EPS was $2.12. Losses on the Company’s strategic investments negatively impacted GAAP diluted EPS by $(0.02) based on a U.S. tax rate of 25% and non-GAAP diluted EPS by $(0.02) based on a non-GAAP tax rate of 23.5%. Restructuring negatively impacted second quarter GAAP diluted EPS by $(0.05).', 'type': 'NarrativeText' },
  { 'id': 14, 'text': 'Cash Flow: Cash generated from operations for the second quarter was $0.81 billion, an increase of 142% Y/Y. Free cash flow was $0.63 billion, an increase of 379% Y/Y. Restructuring negatively impacted second quarter operating cash flow growth by (16,600) bps.', 'type': 'NarrativeText' },
  { 'id': 15, 'text': 'Remaining Performance Obligation: Remaining performance obligation ended the second quarter at $46.6 billion, an increase of 12% Y/Y. Current remaining performance obligation ended at $24.1 billion, an increase of 12% Y/Y, and 11% CC.', 'type': 'NarrativeText' },
  { 'id': 16, 'text': 'Forward Looking Guidance', 'type': 'Title' },
  { 'id': 17, 'text': 'As of August 30, 2023, the Company is initiating its third quarter GAAP and non-GAAP diluted EPS guidance, current remaining performance obligation growth guidance, and revenue guidance. The Company is raising its full year FY24 revenue guidance, GAAP and non-GAAP diluted EPS guidance, GAAP and non-GAAP operating margin guidance, and operating cash flow growth guidance.', 'type': 'NarrativeText' }, { 'id': 18, 'text': "Our guidance assumes no change to the value of the Company's strategic investment portfolio as it is not possible to forecast future gains and losses. In addition, the guidance below is based on estimated GAAP tax rates that reflect the Company’s currently available information, and excludes forecasted discrete tax items such as excess tax benefits from stock-based compensation. The GAAP tax rates may fluctuate due to discrete tax items and related effects in conjunction with certain provisions in the Tax Cuts and Jobs Act, future acquisitions or other transactions.", 'type': 'NarrativeText' }, 
  { 'id': 19, 'text': '<table><thead><th>Revenue</th><th>$8.70 - $8.72 Billion</th><th>$34.7 - $34.8 Billion</th></thead><tr><td>Y/Y Growth</td><td>~11%</td><td>~11%</td></tr><tr><td>FX Impact?)</td><td>$100M Y/Y FX</td><td>no impact</td></tr><tr><td>GAAP Operating Margin</td><td></td><td>~13.3%</td></tr><tr><td>Non-GAAP Operating Margin?)</td><td></td><td>~30.0%</td></tr><tr><td>GAAP Diluted Earnings per Share®)</td><td>$1.02 - $1.03</td><td>$3.50 - $3.52</td></tr><tr><td>Non-GAAP Diluted Earnings per Share?)</td><td>$2.05 - $2.06</td><td>$8.04 - $8.06</td></tr><tr><td>Operating Cash Flow Growth (Y/Y)®)</td><td></td><td>22% - 23%</td></tr><tr><td>Current Remaining Performance Obligation Growth (Y/Y)</td><td>Slightly above 11%</td><td></td></tr></table>', 'type': 'Table' }
  ]
  ;
const DataChunked: React.FC = () => {


  return (
    <div className="content-container">
      
    
    </div>
  )
}

export default DataChunked