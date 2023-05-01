import { Columns } from "../Columns"
const service = "СЕРВИС";
const company = "О КОМПАНИИ";
const help = "ПОМОЩЬ";

export const Footer = () => {
    return (
        <>
        <footer className=" text-red-500">
        <Columns src={service}/>
        <Columns src={company}/>
        <Columns src={help}/>
        </footer>
        </>
    )
}

export default Footer;