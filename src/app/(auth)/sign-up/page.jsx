"use client"

import { Btn } from '@/components/Form/Btn'
import { Input } from '@/components/Form/Input'
import NavLink from '@/components/Nav/NavLink'
import Link from 'next/link'
import React from 'react'

function page() {

    const handlLogin = () => {

    }


  return (
    <div className="w-full h-[100vh]  bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="px-[90px]">
        <NavLink />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className={`login_card mt-[-140px]`}>
          <h3 className="mb-5 text-[22px] font-bold text-center">SIGN UP</h3>
        <div>
          <div className="mb-5">
            <Input label="Email" placeholder="Enter your email" />
          </div>
          <div className="mb-5">
            <Input label="Password" placeholder="Enter your Password" />
          </div>
          <div className="mb-5">
            <Input label="Confirm Password" placeholder="Confirm your Password" />
          </div>
          <div className="">
            <Btn title="Login" handleClick={handlLogin} />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page