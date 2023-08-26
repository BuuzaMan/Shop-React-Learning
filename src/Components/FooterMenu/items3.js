let items3 = [
    { id: 1, name: 'Таблица размеров', link: 'k' },
    { id: 2, name: 'Как ухаживать за бельем', link: 'u' },
    { id: 3, name: 'Инструкция по использованиюпромокода', link: 'u' },
]

const Items3 = () => {
    return (
        <div className="flex flex-col gap-y-[10px] font-NotoSans font-light text-[12px] leading-4 tracking-[.015em] w-[160px]">
            {items3.map(item => (
                
                    <div key={item.id}><button className="text-left">{item.name}</button></div>
                
            ))}
        </div>
    )
}

export default Items3;