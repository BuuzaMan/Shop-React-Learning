import { ReactComponent as Mail1 } from "../../Components/FooterImage/mail.svg";
import { ReactComponent as Icon } from "../../Components/FooterImage/mailIcon.svg";
import { ReactComponent as Geoposition } from "../../Components/FooterImage/geoposition.svg";


const Mail = () => {
    return (

        <div className="leading-7">
            <div className="flex">
                <Icon />  &nbsp;  <Mail1 />
            </div>

            <div className="flex">
                <Geoposition /> &nbsp; Г.МИНСК, <br/> УЛ.НИКОЛЬСКАЯ, 2А
            </div>

        </div>

    )
}

export default Mail;