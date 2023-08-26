import React from "react";
import LogoIcon from "../SVG/LogoIcon";
import Menu from "../Menu";
import Contacts from "../Contacts";
import Line from "../Line";
import CartIcon from "../CartIcon";
import { Link } from "react-router-dom";



const Header = () => {
    return (
      
    <header className="flex h-[116px] desktop:w-[1440px] tablet:w-[1024px] mobile:w-[375px]">
       <Link to="/"><button><LogoIcon /></button></Link>
       <Menu />
       <Contacts />
       <Line />
       <CartIcon />
    </header>
      
    );
  };

export default Header;