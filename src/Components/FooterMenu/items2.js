
let items1 = [
    { id: 1, name: 'Адреса магазинов', link: 'k' },
    { id: 2, name: 'Контакты', link: 'u' },
    { id: 3, name: 'О магазине', link: 'u' },
    { id: 4, name: 'Сертификаты', link: 'u' },
    { id: 5, name: 'Франшиза', link: 'u' },
    { id: 6, name: 'Вакансии', link: 'u' },
]
const Items2=()=> {
    return (
        <div className="flex flex-col gap-y-[10px] font-NotoSans font-light desktop:w-[109px] desktop:text-[12px] desktop:leading-4 desktop:tracking-[.015em] tablet:text-[12px] tablet:leading-4 tablet:tracking-[.015em]">
            {items1.map(item => (
               
                    <div key={item.id}><button className="text-left">{item.name}</button></div>
               
            ))}
        </div>
    )
}

export default Items2;