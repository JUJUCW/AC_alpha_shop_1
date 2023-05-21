import { AddressPhase, ShippingPhase, CreditCardPhase } from './Phase';
import styles from './RegisterForm.module.scss';
import { useContext } from 'react';
import ProductContextMain from '../../../ProductContext/ProductContextMain';

function RegisterForm() {
    // { step, onShippingOption, registerFormRef }
    const { step } = useContext(ProductContextMain);
    return (
        <section className={`${styles.formContainer} col col-12`}>
            <div className={styles.address} dataphase={step}>
                <AddressPhase
                // registerFormRef={registerFormRef}
                />
            </div>
            <div className={styles.shipping} dataphase={step}>
                <ShippingPhase
                // onShippingOption={onShippingOption}
                />
            </div>
            <div className={styles.creditCard} dataphase={step}>
                <CreditCardPhase
                // registerFormRef={registerFormRef}
                />
            </div>
        </section>
    );
}

export default RegisterForm;
