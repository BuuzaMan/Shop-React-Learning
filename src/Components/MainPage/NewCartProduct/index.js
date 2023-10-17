const NewProduct = ({ item }) => {


    return (
        <div className="text-[18px] text-[#2F2F2F]">
            <img className='desktop:w-[374px] desktop:h-[500px] tablet:w-[303pz] tablet:h-[405px] mobile:w-[345px] mobile:h-[461px] mobile:' src={item.image} alt='фото товара' />
            <div className="flex desktop:flex-col tablet:flex-col mobile:flex-row ">
                <div>
                    <ul className="mt-[8px] ">{item.name}</ul>
                    <ul className="mt-[3px] font-[500]">{item.price}</ul>
                </div>
                <ul className=" desktop:ml-[0px] tablet:ml-[0px]  mobile:w-[107px] mobile:mobile:ml-[145px]"> {item.button}</ul>
            </div>


        </div>
    )
}

export default NewProduct;




