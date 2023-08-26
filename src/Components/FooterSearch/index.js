import styles from "../Footer/Footer.module.css"
import { ReactComponent as Search } from "../FooterImage/search.svg";

export const FooterSearch = () => {
    return (
        <div> 
            <div>
                <form className={"flex font-NotoSans text-[12px] font-light uppercase tracking-wide"}>
                    <input className={"" + styles.searchForm}
                    placeholder="ПОИСК ПО САЙТУ"/>
                    <button className={"" + styles.searchButton} > 

                <Search/>
                        </button>
                </form>
            </div>
        </div>
    )
}

export default FooterSearch;