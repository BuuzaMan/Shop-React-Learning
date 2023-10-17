import Product from "../NewCartProduct/items"

import MainLine23 from "../MainLine/mainLine23"
import MainLine24 from "../MainLine/mainLine24"


export const NewCollectionSection = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className=''><MainLine23 /></div>
                <div className="text-center font-NotoSans font-light text-[#2F2F2F] desktop:mt-[130px] desktop:text-[34px] tablet:mt-[130px] tablet:text-[34px] mobile:text-[28px] mobile:mt-[80px]"> &nbsp; НОВАЯ КОЛЛЕКЦИЯ &nbsp;</div>
                <div className=''><MainLine24 /></div>
            </div>
            <p className="font-NotoSans font-[300] text-[16px] text-[#515040] desktop:mt-[70px] tablet:mt-[70px] mobile:mt-[-8px] ">Кружевная коллекция <b>Perfomance</b> - это про эстетичность, удобство и утонченность</p>
            <div className=""><Product/></div>
        </>
    )
}

