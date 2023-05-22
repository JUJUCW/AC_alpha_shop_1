import { createContext, useState } from 'react';
const CreditCardContext = createContext('');

function CardOwnerProvider({ children }) {
    const [creditCardInfo, setCreditCardInfo] = useState({
        cardOwnerName: '',
        cardNum: '',
        cardExpireDate: '',
        cardCvc: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        // 檢查屬性是否存在的函數
        const updateCreditCardInfo = (property, value) => {
            if (creditCardInfo.hasOwnProperty(property)) {
                return {
                    ...creditCardInfo,
                    [property]: value,
                };
            }
            return creditCardInfo;
        };
        // 更新指定的屬性
        const updatedCreditCardInfo = updateCreditCardInfo(name, value);
        // 更新 cardInfo
        setCreditCardInfo(updatedCreditCardInfo);
    }
    function handleSubmit(totalPrice) {
        console.log('is click?');
        console.log(`
          持卡人姓名：${creditCardInfo.cardOwnerName}
          有效期限：${creditCardInfo.cardExpireDate}
          CVC：${creditCardInfo.cardCvc}
          購物車總金額：${totalPrice}
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
