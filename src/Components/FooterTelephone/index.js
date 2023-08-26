import { ReactComponent as Phone } from "../FooterImage/phone.svg";

export const Telephone = () => {
    return (
        <div className="flex text-[#FFFFFF] font-NotoSans font-light text-[13px] gap-[8px] leading-4 tracking-wide">
            <Phone />
            <div>+375 (29) 875-98-46</div>
        </div>
    )
}

export default Telephone;