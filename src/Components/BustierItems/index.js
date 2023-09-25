import BustierCart from "./BustierCart";

const items = [
    { 
         id:1, 
         title: 'БЮСТГАЛТЕР "DIVONTEESE"',
         price: "64,99 РУБ", 
         color: "black", 
         image: "/images/1_black.jpg",
         description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    {
         id:2, 
         title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
         price: "64,99 РУБ", 
         color: 'cream', 
         image: '/images/2_cream.jpg',
         description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    { 
        id:3, 
        title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
        price: "58,89 РУБ", 
        color: 'cream', 
        image: '/images/3_white.jpg',
        description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    { 
        id:4, 
        title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
        price: "54,02 РУБ", 
        color: 'black', 
        image: '/images/4_black.jpg',
        description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    { 
        id:5, 
        title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
        price: "42,99 РУБ", 
        color: 'white', 
        image: '/images/5_cream.jpg',
        description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    {
        id:6, 
        title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
        price: "36,88 РУБ", 
        color: 'black', 
        image: '/images/6_black.jpg',
        description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    { 
        id:7, 
        title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
        price: "43,98 РУБ", 
        color: 'black', 
        image: '/images/7_black.jpg',
        description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    },
    { 
        id:8,
        title: 'БЮСТГАЛТЕР "DIVONTEESE"', 
        price: '52,99 РУБ',  
        color: 'white',
        image: '/images/8_white.jpg',
        description: "Бюстгальтер с эффектом push up. Выгодно подчеркивает грудь, сохраняя естественность формы. Чашки на косточках, выполнены из ультралегкой микрофибры, как и боковые детали стана."
    }
];


let BustierItems = () => {
    return (
        <div className="grid grid-cols-4 gap-x-[40px] gap-y-[34px]">
            {items.map((item) => (
              <BustierCart items={item} />
            ))}
        </div>
    );
};

export default BustierItems;