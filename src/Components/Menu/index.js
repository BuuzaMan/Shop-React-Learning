import { ReactComponent as Burger } from "../../Components/SVG/Burger.svg";

const Menu = () => {
  return (
     <div className="flex">
      <button className="flex pt-[52px] ml-[84.9px] cursor-pointer">
        <Burger />
      </button>
      <div className="flex NotoSans600 pt-[55px] ml-[16px] text-3xs font-bold w-[39px] h-[17px]">МЕНЮ</div>
     </div>
  );
};
export default Menu;
