
let items1 = [
    { id: 1, name: 'Оплата и доставка', link: 'https://www.tgsmit.ru/catalog/elektrotovary/rozetki_i_vyklyuchateli/?PAGEN_1=3' },
    { id: 2, name: 'Как сделать заказ', link: 'u' },
    { id: 3, name: 'Возврат товара', link: 'u' },
    { id: 4, name: 'Правила продажи', link: 'u' },
    { id: 5, name: 'Пользовательское соглашение', link: 'u' },
]

const Items1 = () => {
    return (
        <div className="flex flex-col gap-y-[10px] font-NotoSans font-light text-[12px] leading-4 text-[#F6F6F6] tracking-[0.015em] desktop:w-[109px] tablet:w-[109px] desktop:h-[184px]">
            {items1.map(item => (

                <div key={item.id}>
                    <button  className="text-left">
                        {item.name}
                    </button>
                </div>

            ))}
        </div>
    )
}

export default Items1;