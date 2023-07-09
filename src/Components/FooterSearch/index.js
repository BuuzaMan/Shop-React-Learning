import styles from "../Footer/Footer.module.css"
import { ReactComponent as Search } from "../FooterImage/search.svg";

export const FooterSearch = () => {
    return (
        <div> 
            <div className="">
                <form className={"flex flex-1"}>
                    <input className={"" + styles.searchForm}
                    placeholder="Поиск по сайту"/>
                    <button className={"" + styles.searchButton} > 

                <Search/>
                        </button>
                </form>
            </div>
        </div>
    )
}

export default FooterSearch;