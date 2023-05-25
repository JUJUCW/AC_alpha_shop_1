import { createContext, useState } from 'react';
const CreditCardContext = createContext('');

function CreditCardProvider({ children }) {
    const [creditCardInfo, setCreditCardInfo] = useState({
        cardOwnerName: '',
        cardNum: '',
        cardExpireDate: '',
        cardCvc: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setCreditCardInfo((prevCreditCardInfo) => ({
            ...prevCreditCardInfo,
            [name]: value,
        }));
    }
    function handleSubmit(totalPrice) {
        console.log(
            `
            持卡人姓名： ${creditCardInfo.cardOwnerName}
            卡號： ${creditCardInfo.cardNum}
            有效期限： ${creditCardInfo.cardExpireDate}
            CVC : ${creditCardInfo.cardCvc}
            購物車總金額： ${totalPrice.total}
            `
        );
    }

    const value = {
        creditCardInfo,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
    };

    return <CreditCardContext.Provider value={value}>{children}</CreditCardContext.Provider>;
}

export { CreditCardProvider, CreditCardContext };
