import React from 'react'

function EmojiPicker() {

    const Emojis = [
        {
            name: "Positve",
            unicode: "😍",
            value: 1
        },
        {
            name: "Neutral",
            unicode: "🙂",
            value: 2
        },
        {
            name: "Negative",
            unicode: "🙁",
            value: 3
        },
    ]


  return (
    <div className="flex gap-10 justify-evenly">
        {
            Emojis.map((emoji, index) => (
                <div key={index} className='bg-[#3d924a52] rounded-[10px]  w-[100px] flex-4 p-2 py-4 text-center text-white'>
                    <div className="text-6xl md:py-2 py-1">{emoji.unicode}</div>
                </div>
            ))
        }
    </div>
  )
}

export default EmojiPicker