const SaleProduct = ({ item }) => {


    return (
        <div className="text-[18px] text-[#2F2F2F]">
            <img className='desktop:bg-clip-padding p-[1px] bg-[#B0A38A] tablet:p-[1px] mobile:p-[0px]' src={item.image} alt='фото товара' />
            <div className="">
                <ul className="mt-[8px] ">{item.name}</ul>
                <div className="grid grid-cols-2 ">
                    <p className="mt-[3px] font-[500]">{item.price}</p>
                    <p className="text-left mt-[3px] font-[500] line-through">{item.oldPrice}</p>
                </div>
                <ul className=""> {item.button}</ul>
            </div>


        </div>
    )
}

export default SaleProduct;
