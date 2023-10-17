
import styles from "../Main.module.css"

export const BannerTop = () => {
    return (
        <div className={"desktop:w-[1441px] desktop:h-[774px] tablet:w-[1024px] tablet:[774px] mobile:w-[375px] mobile:h-[774px] " + styles.bodyBannerTop}>
            <div className="grid grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
                <div></div>
                <div className="desktop:text-lef tablet:text-left mobile:text-center mobile:">
                    <h1 className="font-NotoSans font-[300] leading-[53.2px] desktop:mt-[238px] desktop:text-[#2F2F2F] desktop:text-[38px] tablet:ml-[-30px] tablet:mt-[238px] tablet:text-[#2F2F2F] tablet:text-[32px] mobile:mt-[195px] mobile:text-[#FFFFFF] mobile:text-[34px] "> ПРИКОСНИСЬ К УНИКАЛЬНОМУ <br /> НИЖНЕМУ БЕЛЬЮ С ДУШОЙ </h1>
                    <button className={" mt-[40px] text-[18px] font-NotoSans desktop:text-[#515040] border desktop:border-[#515040] tablet:ml-[-30px] tablet:text-[#515040] tablet:border-[#515040] mobile:text-[#FFFFFF] mobile:border-[#FFFFFF] " + styles.directoryButton}>ПЕРЕЙТИ В КАТАЛОГ</button>
                </div>
            </div>
        </div>

    )
}

export default BannerTop;

