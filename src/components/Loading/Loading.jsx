import React from 'react'
import { CgSpinner } from 'react-icons/cg'

function Loading() {
  return (
    <div className="w-full h-full relative top-0 left-0 flex items-center justify-center flex-col ">
        <CgSpinner size={70} className="animate-spin" />
        <div className="animate-pulse text-2xl">Loading...</div>
    </div>
  )
}

export default Loading