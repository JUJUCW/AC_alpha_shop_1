import './Main.scss';

import Register from './Register/Register';
import Progress from './Progress/Progress';
import Cart from './Cart/Cart';

import { useState, useRef } from 'react';

function Main({ icons }) {
    const [step, setStep] = useState(0);
    const [shippingCost, setShippingCost] = useState('Free');
    const registerFormRef = useRef(new Map());

    const handleStepBtnChange = ({ step }) => setStep(step);
    const handleShippingOption = ({ price }) => setShippingCost(price);
    const handleSubmit = () => {
        let numOfFill = 0;
        registerFormRef.current.forEach((value, key) => {
            // console.log(`${key}:${value.value || '沒填'}`);
            // numOfFill += 1;
            if (value.value) {
                console.log(`${key}:${value.value}`);
            } else {
                console.log(`${key}:沒填 `);
                numOfFill += 1;
            }
        });
        console.log(`共 ${numOfFill} 個欄位沒填`);
    };

    return (
        <main className="siteMain">
            <div className="mainContainer">
                <Register
                    icons={icons}
                    step={step}
                    onShippingOption={handleShippingOption}
                    registerFormRef={registerFormRef}
                />
                <Cart
                    icons={icons}
                    shippingCost={shippingCost}
                />
                <Progress
                    icons={icons}
                    step={step}
                    onStepBtnChange={handleStepBtnChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </main>
    );
}
export default Main;
