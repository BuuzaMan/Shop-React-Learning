import React from "react";
import LogoIcon from "../SVG/LogoIcon";
import Menu from "../Menu";
import Contacts from "../Contacts";

export const Header = () => {
    return (
      <header className="flex space-x-5 h-[116px] w-[1440px]">
       <LogoIcon />
       <Menu />
       <Contacts className='cursor-pointer' />
      </header>
    );
  };

export default Header;