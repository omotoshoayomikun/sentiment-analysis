import dynamic from 'next/dynamic';
import React from 'react'
import SentimentLineChart from './SentimentLineChart'

function SentimentOverview(props) {

    // const SentimentLineChart = dynamic(
    //     () => import("./SentimentLineChart"),
    //     { ssr: false }
    //   );


  return (
    <>
    <SentimentLineChart data={props.data} />
    </>
  )
}

export default SentimentOverview