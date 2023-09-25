import React from 'react'
import Wrapper from '../../Wrapper';
import { Link } from 'react-router-dom';

export const Catalog = () => {
  return (
    <div className='desktop:h-[1600px] tablet:h-[1550px] mobile:h-[1000px]'>
    <Wrapper>
      <div className='flex relative mt-[20px] desktop:ml-[666px] tablet:ml-[485px] mobile:ml-[131px]'>
       <Link to='/'><button className='flex text-[#2F2F2F] hover:text-[#706E5D] font-NotoSans text-[12px] font-normal hover:text-light leading-[1.05srem] tracking-[.015em]'>ГЛАВНАЯ/</button></Link>
       <button className='text-[#2F2F2F] hover:text-[#706E5D] font-NotoSans text-[12px] font-normal hover:text-light leading-[1.05rem] tracking-[.015em]'>КАТАЛОГ</button>
      </div>
      <div className='flex absolute mt-[80px] desktop:ml-[651px] tablet:ml-[473px] mobile:ml-[131px] font-NotoSans desktop:text-[34px] tablet:text-[34px] mobile:text-[28px] text-[#2F2F2F] font-light desktop:leading-[2.975rem] tablet:leading-[2.975rem] mobile:leading-[2.45rem] desktop:tracking-[.043em] tablet:tracking-[.043em] mobile:tracking-[.035em]'>КАТАЛОГ</div>
      <div className='absolute grid grid-cols-2 desktop:mt-[200px] tablet:mt-[200px] mobile:mt-[170px] desktop:ml-[120px] tablet:ml-[25px] mobile:ml-[15px] gap-x-10 w-[1200px] font-NotoSans font-light desktop:text-[23px] tablet:text-[23px] desktop:leading-[2.013rem] tablet:leading-[2.013rem] mobile:leading-[1.4rem] desktop:tracking-[.015em] tablet:tracking-[.015em] mobile:tracking-[.020em] text-[#2F2F2F]'>
        <div className='flex flex-col desktop:gap-y-9 desktop:gap-x-9 tablet:gap-y-9 tablet:gap-x-9 mobile:gap-y-5 w-[500px]'>
         <Link to="/catalog/bustier"><button className='desktop:w-[669px] desktop:h-[311px] tablet:w-[568px] tablet:h-[311px] mobile:w-[163px] mobile:h-[178px]  bg-[#C2C1B1]'>БЮСТЬЕ</button></Link>
         <button className='desktop:w-[491px] desktop:h-[311px] tablet:w-[366px] tablet:h-[311px] mobile:w-[163px] mobile:h-[178px] bg-[#E5E1D7]'>БОДИ</button>
         <button className='desktop:w-[669px] desktop:h-[311px] tablet:w-[568px] tablet:h-[311px] mobile:w-[163px] mobile:h-[178px] bg-[#BBC3B9]'>ОДЕЖДА ДЛЯ СНА</button>
        </div>
        <div className='flex flex-col absolute desktop:gap-y-9 desktop:gap-x-9 tablet:gap-y-9 tablet:gap-x-9 mobile:gap-y-5 desktop:ml-[400px] tablet:ml-[400px] mobile:ml-[180px]'>
         <button className='desktop:w-[491px] desktop:h-[311px] tablet:w-[366px] tablet:h-[311px] mobile:w-[163px] mobile:h-[178px] bg-[#BBC3B9] desktop:ml-[310px] tablet:ml-[200px]'>ТРУСЫ</button>
         <button className='desktop:w-[669px] desktop:h-[311px] tablet:w-[568px] tablet:h-[311px] mobile:w-[163px] mobile:h-[178px] bg-[#CBCBCB] desktop:ml-[132px]'>КОМПЛЕКТЫ</button>
         <button className='desktop:w-[491px] desktop:h-[311px] tablet:w-[366px] tablet:h-[311px] mobile:w-[163px] mobile:h-[178px] bg-[#B0A38A] desktop:ml-[310px] tablet:ml-[200px]'>МАЙКИ</button>
         </div>
      </div>
    </Wrapper>
    </div>
  )
};

export default Catalog;
