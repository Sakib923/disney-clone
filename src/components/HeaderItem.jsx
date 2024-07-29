import React from 'react'

function HeaderItem({ Icon, title }) {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer'>
        <Icon />
        <h2>{title}</h2>
    </div>
  )
}

export default HeaderItem