let items = [
    { id:1, name: 'КАТАЛОГ', link: 'a'},
    { id:2, name: 'О SAY YES', link: 'a'},
    { id:3, name: 'АКЦИИ', link: 'a'},
    { id:4, name: 'АДРЕСА', link:'a'},
    { id:5,name: 'ДОСТАВКА', link: 'a'}
]


const Items = () => {
    return (
        <div className="desktop:space-y-[21px] tablet:space-y-[21px] mobile:space-y-[18px]">
            {items.map(item => (
               <div className="desktop:text-ModalText desktop:font-light desktop:text-[#515040] desktop:hover:text-[#BCB3A3] tablet:text-ModalText tablet:font-light tablet:text-[#515040] tablet:hover:text-[#BCB3A3] mobile:text-MobileText mobile:font-light mobile:text-[#515040] mobile:hover:text-[#BCB3A3]" key={item.id}><button>{item.name}</button></div>
            ))}
        </div>
    )
}

export default Items;
