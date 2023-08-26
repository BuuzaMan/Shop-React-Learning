import { ReactComponent as Icon } from "../../Components/FooterImage/mailIcon.svg";


const Mail = () => {
    return (

        <div className="w-[200px] h-[18px]">
            <div className="flex absolute gap-[8px]">
                <Icon />
                <div className="font-NotoSans desktop:text-[13px] tablet:text-[13px] mobile:text-[13px] font-light leading-4 tracking-wide uppercase">SHOP@LADYS-FASHION.RU</div>
            </div>
        </div>

    )
}

export default Mail;