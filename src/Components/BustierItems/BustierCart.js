import { ReactComponent as Tick } from "../SVG/Approve(Tick).svg";

let BustierCart = ({ items }) => {
    return (
        <div className="w-[270px] h-[px]">
            <div className="w-[270px] h-[310px] overflow-hidden"><img src={items.image} alt='фото бюстье'/></div>
            <ul className="font-NotoSans text-[18px] font-light leading-[1.575rem] tracking-[.022em] text-[#515040] mt-[15px]">{items.title}</ul>
            <div className="flex flex-wrap gap-x-[8px] mt-[12px]">
              <div className="font-NotoSans font-light text-[#6D6D6D] text-[12px] leading-[1.05rem] tracking-[.015em]">В наличии</div>
              <Tick />
            </div>
            <div className="flex flex-nowrap gap-x-[px] w-[270px]">
              <ul className="font-NotoSans text-[13px] text-[#515040] font-semibold leading-[1.138rem] tracking-[.016em] mt-[24px]">{items.price}</ul>
              <button className="w-[100px] h-[42px] rounded bg-[#515040] text-[#FFFFFF] font-NotoSans font-semibold text-[12px] leading-[1.05rem] tracking-[.022em] mt-[13px] ml-[106px]">В КОРЗИНУ</button>
            </div>
        </div>
    )
}

export default BustierCart;