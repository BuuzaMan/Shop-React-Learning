import React, { useState } from 'react'
import { ReactComponent as ArrowDown } from "../SVG/right arrow.svg"
import { ReactComponent as VLine } from "../SVG/VerticalShortLine.svg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex w-[534px] h-[45px] bg-[#E5E1D7] font-NotoSans text-[#7C7B69] text-[12px] font-semibold leading-[1.05rem] tracking-[.022em] mt-[40px] mb-[112px] ml-[453px]'>
      <div className='flex'
        onClick={() => setIsOpen(true)}>
        <button className='flex ml-[30px] mt-[14px]'>ЦЕНА</button>
        <button><ArrowDown className='ml-[12px]'/></button>
        {isOpen && 
        <div className='absolute bg-red mt-[50px]'>ЦЕНА</div>}
        <VLine className='mt-[13px] ml-[30px]'/>
       </div>
       <div className='flex ml-[30px]'>
         <button className='flex mt-[14px]'>ЦВЕТ</button>
         <button><ArrowDown className='ml-[12px]'/></button>
         <VLine className='mt-[13px] ml-[30px]'/>
       </div>
       <div className='flex ml-[30px]'>
         <button className='flex mt-[14px]'>РАЗМЕР</button>
         <button><ArrowDown className='ml-[12px]'/></button>
         <VLine className='mt-[13px] ml-[30px]'/>
       </div>
       <div className='flex ml-[30px]'>
         <button className='flex mt-[14px]'>КОЛЛЕКЦИЯ</button>
         <button><ArrowDown className='ml-[12px]'/></button>
       </div>
    </div>
  )
}

export default Navbar;
