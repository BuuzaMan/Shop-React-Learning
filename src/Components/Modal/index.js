import React from 'react'
import ReactDom from 'react-dom'
import { ReactComponent as Close } from '../SVG/Close.svg';
import { ReactComponent as Horizon } from '../SVG/HorizonLine.svg';
import modalImage from '../SVG/modalImage.png';
import Items from '../ModalItem';
import Social from '../SN';
import ModalIcon from '../ModalIcon';



function Modal({ open, onClose }) {
  if (!open) return null
  return ReactDom.createPortal (
     <div className="flex fixed bg-black bg-opacity-30 items-center w-full h-full inset-0 justify-center"> 
       <div className="flex fixed relative w-[1440px] h-[900px] translate-y-[130px] bg-white desktop:w-[1440px] desktop:h-[900px] tablet:w-[1024px] tablet:h-[900px] mobile:w-[375px] mobile:h-[1031px]">
         <div className="flex w-[1440px] h-[116px]">
          <ModalIcon />
          <button onClick={onClose} className="flex cursor-pointer desktop:order-2 desktop:mt-[50px] desktop:ml-[1068px] desktop:scale-100 tablet:order-2 tablet:ml-[845px] tablet:mt-[50px] tablet:scale-100 mobile:order-1 mobile:mt-[50px] mobile: mobile:ml-[15px] mobile:mt-[50px] mobile:scale-50"><Close /></button>
          <Horizon className="flex absolute desktop:mt-[116px] desktop:w-[1440px] desktop:block tablet:w-[974px] desktop:ml-0 tablet:block tablet:ml-[25px] tablet:mt-[116px] mobile:hidden" />
         </div>
         <div className='grid desktop:grid-cols-2 desktop:w-full desktop:my-[186px] tablet:grid-cols-2 mobile:grid-cols-0 mobile:w-full '>
           <div className="flex absolute desktop:h-[589px] desktop:w-[491px] desktop:left-[120px] desktop:mt-[0px] tablet:w-[491px] tablet:h-[589px] tablet:mt-[186px] tablet:left-[25px] mobile:mt-[581px] mobile:w-[375px] mobile:h-[450px] mobile:right-0">
               <img src={modalImage} alt='modal' />
           </div>
           <div>
             <div className="flex absolute desktop:w-[193px] desktop:h-[364px] desktop:left-[829px] desktop:inset-0 tablet:w-[193px] tablet:h-[364px] tablet:left-[633px] tablet:mt-[175px] mobile:mt-[156px] mobile:left-[15px] mobile:w-[111px] mobile:h-[244px]">
               <p><Items /></p>
             </div>
             <div className="flex flex-col absolute desktop:w-[137px] desktop:h-[81px] desktop:left-[829px] desktop:bottom-[115px] desktop:gap-y-4 tablet:left-[633px] tablet:bottom-[130px] tablet:gap-y-4 mobile:mt-[450px] mobile:left-[15px] mobile:gap-y-4">
               <div className='flex flex-col'>
                 <div className="font-NotoSans text-2xs text-[#706E5D] h-[17px]">Мы на связи с вами</div>
                 <div className="font-NotoSans text-1xs text-[#515040] h-[18px] font-bold">+375 (29)875-98-46</div>
               </div>
               <Social />
             </div>
           </div>   
        </div>
       </div>    
     </div>,
    document.getElementById('portal')
    
  )
};

export default Modal;
