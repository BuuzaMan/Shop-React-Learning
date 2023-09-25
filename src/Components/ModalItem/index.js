import { Link } from "react-router-dom";

let items = [
    { id:1, name: 'КАТАЛОГ', link: "catalog"},
    { id:2, name: 'О SAY YES', link: 'about'},
    { id:3, name: 'АКЦИИ', link: 'promo'},
    { id:4, name: 'АДРЕСА', link:'adress'},
    { id:5,name: 'ДОСТАВКА', link: 'delivery'}
]


const Items = () => {
    return (
        <div className="desktop:space-y-[21px] tablet:space-y-[21px] mobile:space-y-[18px]">
            {items.map(item => (
               <div className="desktop:text-ModalText desktop:font-light desktop:text-[#515040] desktop:hover:text-[#BCB3A3] tablet:text-ModalText tablet:font-light tablet:text-[#515040] tablet:hover:text-[#BCB3A3] mobile:text-MobileText mobile:font-light mobile:text-[#515040] mobile:hover:text-[#BCB3A3]" key={item.id}><Link to={item.link}>{item.name}</Link></div>
            ))}
        </div>
    )
}

export default Items;
