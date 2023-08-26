import { FooterMenu } from "../FooterMenu"
import Mail from "../FooterMail";
import Telephone from "../FooterTelephone";
import Items1 from "../FooterMenu/items1";
import Items2 from "../FooterMenu/items2";
import Items3 from "../FooterMenu/items3";
import FooterSearch from "../FooterSearch";
import FooterLogo from "../FooterLogo";
import Position from "../Footer Geoposition";

const service = "СЕРВИС";
const company = "О КОМПАНИИ";
const help = "ПОМОЩЬ";

export const Footer = () => {
    return (
        <>
            <footer className="absolute bottom-0 left-0 grid grid-cols-6 bg-[#626153] text-[#F6F6F6] desktop:w-[1440px] desktop:h-[274px] tablet:w-[1024px] tablet:h-[254px] mobile:w-[375px] mobile:h-[192px]">
                <div className="flex absolute desktop:mt-[40px] desktop:ml-[120px] tablet:mt-[30px] tablet:ml-[25px] tablet:mt-[30px] mobile:ml-[15px] mobile:mt-[40px]"><FooterLogo /> </div>
                <div className="flex leading-6 desktop:block tablet:block mobile:hidden desktop:ml-[330px] desktop:w-[100px] desktop:mt-[40px] tablet:ml-[170px] tablet:mt-[30px]">
                    <FooterMenu title={service} />
                    <br/>
                    <p><Items1 /></p>
                </div>
                <div className="flex desktop:mt-[40px] desktop:ml-[290px] desktop:w-[109px] tablet:ml-[145px] tablet:w-[109px] tablet:mt-[30px] m-4 desktop:block tablet:block mobile:hidden">
                    <FooterMenu title={company} />
                    <br/>
                    <p><Items2 /></p>
                </div>
                <div className="flex desktop:mt-[40px] desktop:ml-[260px] tablet:mt-[30px] tablet:ml-[110px] m-4 desktop:block tablet:block mobile:hidden ">
                    <FooterMenu title={help} />
                    <br/>
                    <p><Items3 /></p>
                </div>

                <div className="flex flex-col font-NotoSans font-light m-4 col-start-5 col-span-2" >
                    <div className="absolute desktop:right-[105px] desktop:w-[380px] tablet:w-[358px] mb-[20px] tablet:right-[25px] tablet:block mobile:hidden"><FooterSearch /></div>
                    <div className="absolute desktop:w-[400px] tablet:w-[358px] grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:flex-col desktop:gap-y-[18px] desktop:gap-x-[1px] desktop:left-[955px] desktop:top-[120px] desktop:w-[480px] tablet:w-[358px] tablet:left-[640px] tablet:gap-y-[18px] tablet:gap-x-[55px] tablet:top-[120px] mobile:left-[170px] mobile:w-[200px] mobile:gap-y-[18px] mobile:top-[40px] ">
                        <div><Mail /></div>
                        <div><Telephone /></div>
                        <div><Position /></div>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;