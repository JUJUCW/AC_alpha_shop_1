import { createContext, useState } from 'react';
const CreditCardContext = createContext('');

function CardOwnerProvider({ children }) {
    const [creditCardInfo, setCreditCardInfo] = useState({
        cardOwnerName: 'John Doe 1',
        cardNum: '12341',
        cardExpireDate: 'mmmm',
        cardCvc: '456',
    });

    function handleChange(e) {
        
        const { name, value } = e.target;
        setCreditCardInfo((prevCreditCardInfo) => ({
            ...prevCreditCardInfo,
            [name]: value,
        }));

    }
    function handleSubmit(totalPrice) {
        console.log('totalPrice', totalPrice);
        console.log('CreditCardInfo', creditCardInfo);
        console.log('setCreditCardInfo', setCreditCardInfo);
        console.log(`
          持卡人姓名： ${creditCardInfo.cardOwnerName}
          有效期限： ${creditCardInfo.cardExpireDate}
          CVC : ${creditCardInfo.cardCvc}
          購物車總金額： ${totalPrice}
          `);
    }

        const value = {
            creditCardInfo,
            onChange: handleChange,
            onSubmit: handleSubmit,
        };

        return <CreditCardContext.Provider value={value}>{children}</CreditCardContext.Provider>;
    
}

export { CardOwnerProvider, CreditCardContext };
