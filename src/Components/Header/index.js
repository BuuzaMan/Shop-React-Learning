import React from "react";
import LogoIcon from "../SVG/LogoIcon";
import Menu from "../Menu";
import Contacts from "../Contacts";
import Wrapper from "../Wrapper";
import Line from "../Line";
import CartIcon from "../CartIcon";


const Header = () => {
    return (
      <Wrapper>
      <header className="flex h-[116px]">
       <LogoIcon />
       <Menu />
       <Contacts />
       <Line />
       <CartIcon />
      </header>
      </Wrapper>
    );
  };

export default Header;