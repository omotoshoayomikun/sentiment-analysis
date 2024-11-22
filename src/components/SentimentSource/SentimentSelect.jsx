import React from 'react'
import { Checkbox } from '../Form/Input'

function SentimentSelect(props) {


  const handleCheckbox = (e, name) => {
    props.setChecked({...props.checked, [name]: !props.checked[name]});

    if(!e.target.checked) {
      const filterData = props.data.filter((content) => (content.analyzed  !== name))
      props.setData(filterData)
    } else {
      const filterData = props.keepData.filter((content) => (content.analyzed  == name))

      props.setData([...props.data, ...filterData])
    }

  };
  

  return (
    <>
    <h3 className="font-bold text-[18px] mt-6 mb-2">Sentiment</h3>
    <div className="flex justify-between">
        <div className="">
            <Checkbox handleCheckbox={handleCheckbox} checked={props.checked.positive} name="positive" /> <span className='text-green-700 font-bold'>Postive</span>
        </div>
        <div className="">
            <Checkbox handleCheckbox={handleCheckbox} checked={props.checked.neutral} name="neutral" /> <span className='text-grey-700 font-bold'>Neutral</span>
        </div>
        <div className="">
            <Checkbox handleCheckbox={handleCheckbox} checked={props.checked.negative} name="negative" /> <span className='text-red-700 font-bold'>Negative</span>
        </div>
    </div>
    </>
  )
}

export default SentimentSelect