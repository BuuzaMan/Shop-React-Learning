import styles from "../Main.module.css"

export const BannerBottom = () => {
    return (
        <>
            <div className={"desktop:w-[1440px] desktop:h-[682px] tablet:w-[1024px] tablet:h-[606px] mobile:w-[375px] mobile:h-[606px] " + styles.bodyBannerBottom}>
                <div className="flex ">
                    <div className={"desktop:w-[530px] desktop:h-[273px] desktop:ml-[122px] desktop:mt-[215px] tablet:w-[530px] tablet:h-[273px] tablet:ml-[25px] tablet:mt-[176px] mobile:w-[345px] mobile:h-[381px] mobile:ml-[15px] mobile:mt-[112px] mr-[15px]  " + styles.box1}>
                        <div className=" mt-[10px] desktop:text-left ml-[25px] tablet:ml-[25px] tablet:text-left mobile:ml-[0px] text-center">
                            <h1 className="font-NotoSans font-[300] text-[18px] text-[#2E2E2E] ">ПОДПИШИТЕСЬ НА СЕКРЕТНУЮ РАССЫЛКУ</h1>
                            <p className={"mt-[30px] font-NotoSans font-[300] text-[13px] text-[#515040] leading-[18.2px] " + styles.draft}>После подписки вы получите эксклюзивный доступ к распродажам, предложениям и новым коллекциям</p>
                            <form >
                                <input className={"mt-[18px] text-[13px] w-[220px] desktop:mr-[15px] tablet:w-[220px] tablet:mr-[15px] mobile:w-[271px] mobile:mr-[0px] " + styles.emailForm}
                                    placeholder="E-mail" />
                                <button className={"font-NotoSans font-[600] w-[128px] tablet:w-[128px] mobile:w-[272px] " + styles.emailButton} > ПОДПИСАТЬСЯ
                                </button>
                                <p className="mt-4 font-NotoSans font-[300] text-[11px] text-[#515040] leading-[15.4px]">Нажимая на кнопку "Подписаться" вы даете согласие <br /> на обработку персональных данных
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BannerBottom;

