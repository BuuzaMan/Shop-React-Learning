
import styles from "../MainPage/Main.module.css"

export const CartButton = () => {
    return (
        <button className={"font-NotoSans font-[600] desktop:w-[107px] desktop:h-[43px] tablet:w-[87px] tablet:h-[35px] mobile:w-[102px] mobile:h-[42px] "  + styles.cartButton } > В КОРЗИНУ
        </button>
    )
}

export default CartButton;
