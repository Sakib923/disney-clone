import React from 'react'

function HeaderItem({ Icon, title }) {
  return (
        <div className="text-white flex items-center gap-3 text-[15px] 
        font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
        <Icon />
        <h2 className=" ">{title}</h2>
    </div>
  )
}

export default HeaderItem