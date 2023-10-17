import NewProduct from ".";
// import CartProduct from ".";
import CartButton from "../../CartButton";

let product = [
    {
        id: 1,
        image: 'product/card1.jpg',
        name: 'КОМПЛЕКТ',
        price: '112 РУБ',
        button: <CartButton />
    },
    {
        id: 2,
        image: 'product/card2.jpg',
        name: 'КОМПЛЕКТ',
        price: '116 РУБ',
        button: <CartButton />
    },
    {
        id: 3,
        image: 'product/card3.jpg',
        name: 'КОМПЛЕКТ',
        price: '109 РУБ',
        button: <CartButton/>
    },
];


const Product = () => {
    return (
        <div  className="grid  gap-[2.438rem] mt-[2.5rem] desktop:grid-cols-3 tablet:grid-cols-3 mobile:grid-cols-1">
            {product.map((item) => (
                <NewProduct item={item} />
            ))}
        </div>
    );
};

export default Product;

// justify-items-center
