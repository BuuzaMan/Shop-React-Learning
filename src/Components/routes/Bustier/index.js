import React from 'react'
import Wrapper from '../../Wrapper';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../SVG/Arrow.svg';
import BustierItems from '../../BustierItems';
import Navbar from '../../Navbar';






let  Bustier = () => {
 
  return (
    <div className='h-[1600px]'>
      <Wrapper>
        <div className='flex relative mt-[20px] right-[30px] desktop:ml-[666px] tablet:ml-[485px] mobile:ml-[131px]'>
         <Link to='/'><button className='flex text-[#2F2F2F] hover:text-[#706E5D] font-NotoSans text-[12px] font-normal hover:text-light leading-[1.05srem] tracking-[.015em]'>ГЛАВНАЯ/</button></Link>
         <Link to='/catalog'><button className='flex text-[#2F2F2F] hover:text-[#706E5D] font-NotoSans text-[12px] font-normal hover:text-light leading-[1.05rem] tracking-[.015em]'>КАТАЛОГ/</button></Link>
         <div className='flex text-[#2F2F2F] hover:text-[#706E5D] font-NotoSans text-[12px] font-normal hover:text-light leading-[1.05rem] tracking-[.015em]'>БЮСТЬЕ</div>
        </div>
        <Link to='/catalog'>
         <button className='flex relative w-[68px] h-[17px] leading-4 mt-[23px] ml-[120px]'>
          <Arrow />
          <div className='absolute font-NotoSans font-semibold text-[12px] leading-[1.05rem] tracking-[.022em] uppercase bottom-[3px] left-[15px]'>НАЗАД</div>
         </button>
        </Link>
        <div className='mt-[20px] ml-[655px] font-NotoSans text-[34px] font-light leading-[2.975rem] tracking-[.043em]'>БЮСТЬЕ</div>
        <Navbar />
        <div className='ml-[120px] mr-[120px]'><BustierItems /></div>
      </Wrapper>
    </div>
  )
  
}

export default Bustier;