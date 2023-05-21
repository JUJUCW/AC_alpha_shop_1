import { createContext, useContext, useState } from 'react';
import ProductContextMain from './ProductContextMain';

const productsData = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

// const initCreditCardInfo = {
//     cardOwnerName: 'John Doe',
//     cardNum: '1111 2222 3333 4444',
//     cardExpireDate: 'MM/YY',
//     cardCvc: '123',
// };

const CartContext = createContext(productsData);
function CartContextProvider({ children }) {
    // const [currentProducts, setCurrentProducts] = useState(productsData);
    const [items, setItems] = useState(productsData);
    const { shippingFee } = useContext(ProductContextMain);

    function handleQuantityChange({ id, quantity }) {
        if (quantity < 0) {
            return;
        }

        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }

    const total =
        items.reduce((acc, item) => acc + item.price * item.quantity, 0) + (shippingFee === '$ 500' ? 500 : 0);

    // function isTotal() {
    //     let total = 0;
    //     currentProducts.map((product) => (total = total + product.price));
    //     return total;
    // }

    const value = {
        items,
        onQuantityChange: handleQuantityChange,
        total,
    };

    return (
        // <CartContext.Provider value={{ currentProducts, setCurrentProducts, isTotal }}>{children}</CartContext.Provider>
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

export default CartContext;
export { CartContextProvider };
