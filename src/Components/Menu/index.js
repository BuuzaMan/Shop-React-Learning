import React, { useState } from "react";
import { ReactComponent as Burger } from "../../Components/SVG/Burger.svg";
import Modal from "../Modal";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
     <div className="flex">
      <button onClick={() => setIsOpen(true)} className="flex pt-[46px] desktop:ml-[84.9px] tablet:ml-[30px] mobile:ml-[15px] cursor-pointer">
        <Burger />
      </button>
        <Modal open={isOpen} onClose={()=>setIsOpen(false)}></Modal>
      
      <div className="desktop:block tablet:block mobile:hidden font-NotoSans font-bold pt-[50px] desktop:ml-[16.8px] tablet:ml-[17px] text-3xs w-[39px] h-[17px]">МЕНЮ</div>
     </div>
  );
};
export default Menu;
