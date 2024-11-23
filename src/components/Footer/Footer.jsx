"use client"

import React, { useState } from 'react'

function Footer() {

    const [date, setdate] = useState(new Date().getFullYear())


  return (
    <div className="sidePadding bg-[#22272A] flex justify-center pt-12 text-white">
        <div className="border-t-2 border-white w-full text-center py-3">
           @ {date} - John Emmanuel
        </div>
    </div>
  )
}

export default Footer