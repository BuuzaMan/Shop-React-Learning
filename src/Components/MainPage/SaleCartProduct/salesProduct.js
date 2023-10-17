
import SaleProduct from ".";
import CartButtonSale from "../../CartButtonSale";

let salesProduct = [
    {
        id: 1,
        image: 'product/card5.jpg',
        name: 'БЮСТГАЛТЕР',
        price: '29 РУБ',
        oldPrice: '49 РУБ',
        button: <CartButtonSale /> 
    },
    {
        id: 2,
        image: 'product/card6.jpg',
        name: 'ТРУСЫ',
        price: '29 РУБ',
        oldPrice: '49 РУБ',
        button: <CartButtonSale />
    }
];


const SalesProduct = () => {
    return (
        <div  className="grid grid-cols-2 gap-[1.25rem] desktop:ml-[2rem] desktop:mr-[40px] mt-[90px] tablet:ml-[2rem] tablet:mr-[40px] mobile:ml-[0px] mobile:mr-[0px] ">
            {salesProduct.map((item) => (
                <SaleProduct item={item} />
            ))}
        </div>
    );
};

export default SalesProduct;

