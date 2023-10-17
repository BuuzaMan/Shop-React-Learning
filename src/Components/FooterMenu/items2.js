
let items1 = [
    { id: 1, name: 'Адреса магзаинов', link: 'k' },
    { id: 2, name: 'Контакты', link: 'u' },
    { id: 3, name: 'О магазине', link: 'u' },
    { id: 4, name: 'Сертификаты', link: 'u' },
    { id: 5, name: 'Франшиза', link: 'u' },
    { id: 6, name: 'Вакансии', link: 'u' },
]
const Items2=()=> {
    return (
        <div className="font-NotoSans400 font-light  text-3xs text-[#F6F6F6] text-left  leading-7">
            {items1.map(item => (
               
                    <div key={item.id}><button className="text-left">{item.name}</button></div>
               
            ))}
        </div>
    )
}

export default Items2;