import styles from "../MainPage/Main.module.css"

export const CartButtonSale = () => {
    return (
        <button className={"font-NotoSans font-[600] desktop:w-[107px] desktop:h-[43px] tablet:w-[91px] tablet:h-[36px] mobile:w-[161px] mobile:h-[32px] "  + styles.cartButton } > В КОРЗИНУ
        </button>
    )
}

export default CartButtonSale;
