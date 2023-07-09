import { FooterMenu } from "../FooterMenu"
import Mail from "../FooterMail";
import Telephone from "../FooterTelephone";
import Items1 from "../FooterMenu/items1";
import Items2 from "../FooterMenu/items2";
import Items3 from "../FooterMenu/items3";
import FooterSearch from "../FooterSearch";
import FooterLogo from "../FooterLogo";

const service = "СЕРВИС";
const company = "О КОМПАНИИ";
const help = "ПОМОЩЬ";

export const Footer = () => {
    return (
        <>
            <footer className="grid desktop:grid-cols-6 bg-[#626153] text-[#F6F6F6] ">
                <div className=""><FooterLogo /> </div>
                <div className="m-4 leading-6 tablet:block mobile:hidden">
                    <FooterMenu title={service} />
                    <p><Items1 /></p>
                </div>
                <div className="m-4 tablet:block mobile:hidden">
                    <FooterMenu title={company} />
                    <p><Items2 /></p>
                </div>
                <div className="m-4 tablet:block mobile:hidden "><FooterMenu title={help} />
                    <p><Items3 /></p>
                </div>

                <div className="font-NotoSans font-light m-4 col-start-5 col-span-2 " >
                    <div className="mb-4 tablet:block mobile:hidden"><FooterSearch /></div>
                    <div className="grid tablet:grid-cols-2 mobile:grid-cols-1">
                        <div><Mail /></div>
                        <div> <Telephone /></div>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;