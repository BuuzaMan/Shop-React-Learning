import styles from "../Main.module.css"
import MainLine22 from "../MainLine/mainLine22"
import SalesProduct from "../SaleCartProduct/salesProduct"

export const SaleSection = () => {
    return (
        <>
            <div className="">
                <div className="relative  grid grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
                    <img className="mb-[10rem] mt-[7rem] desktop:w-[550px] desktop:h-[620px] tablet:block mobile:hidden tablet:w-[428px] tablet:h-[471px] " src='/product/card4.jpg' alt='фото'></img>
                    <div className="desktop:mt-[112px] tablet:mt-[112px] mobile:mt-[70px]">
                        <div className="flex desktop:flex justify-end tablet:flex justify-end mobile:flex justify-center"> <p className="text-[32px] text-[#2F2F2F] font-[300]"> &nbsp; SALE &nbsp; </p> <MainLine22 /></div>
                        <div className="flex justify-end ">
                            <div className="text-[16px] text-[#515040] font-[300] desktop:mt-[40px] tablet:block mobile:hidden">  ПЕРЕЙТИ В КАТАЛОГ
                                <button><img className="mb-[-10px] ml-[0.7rem]" src='/PereitiVkatalog.svg' alt="кнопка"></img></button>
                            </div>
                        </div>
                        <div className="mobile:mb-[80px] "><SalesProduct/></div>
                    </div>
                </div>
                <div className="tablet:block mobile:hidden">
                    <div className={"desktop:w-[993px] desktop:h-[593px] desktop:mt-[-630px] tablet:w-[771px] tablet:h-[472px] tablet:mt-[-530px] " + styles.backgroundSale}></div>
                </div>
            </div>
        </>
    )
}



