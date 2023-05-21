import { useState, useRef, createContext } from 'react';
import { CartContextProvider } from './CartContext';

const ProductContextMain = createContext();
function ProductContextMainProvider({ children }) {
    const [step, setStep] = useState(0);
    const [shippingFee, setShippingFee] = useState('Free');
    const registerFormRef = useRef(new Map());

    const handleStepBtnChange = ({ step }) => setStep(step);

    const handleShippingOption = ({ price }) => setShippingFee(price);

    const value = {
        step,
        registerFormRef,
        shippingFee,
        onStepBtnChange: handleStepBtnChange,
        onShippingOption: handleShippingOption,
    };
    return (
        <ProductContextMain.Provider value={value}>
            <CartContextProvider>{children}</CartContextProvider>
        </ProductContextMain.Provider>
    );
}

export default ProductContextMain;
export { ProductContextMainProvider };
