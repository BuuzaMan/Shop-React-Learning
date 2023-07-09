let items3 = [
    { id: 1, name: 'Таблица размеров', link: 'k' },
    { id: 2, name: 'Как ухаживать за бельем', link: 'u' },
    { id: 3, name: 'Инструкция по использованию промокода', link: 'u' },
]

const Items3 = () => {
    return (
        <div className="font-NotoSans font-light  text-1xsF text-[#F6F6F6] text-left leading-7">
            {items3.map(item => (
                
                    <div key={item.id}><button className="text-left">{item.name}</button></div>
                
            ))}
        </div>
    )
}

export default Items3;