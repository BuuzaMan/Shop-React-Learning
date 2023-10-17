
import { NewCollectionSection } from "../NewCollectionSection";
import { SaleSection } from "../SaleSection";



export const BannerBasic = () => {
    return (
      <div className="">
        <div className="desktop:ml-[120px] desktop:mr-[120px] tablet:ml-[25px] tablet:mr-[25px] mobile:ml-[15px] mobile:mr-[15px] ">
            <NewCollectionSection />
            <SaleSection />
        </div>
        </div>
    
    )
}

export default BannerBasic;

