import { AddressPhase, ShippingPhase, CreditCardPhase } from './Phase';
import styles from './RegisterForm.module.scss';

function RegisterForm({ step, onShippingOption, registerFormRef }) {
    return (
        <section className={`${styles.formContainer} col col-12`}>
            <div className={styles.address} dataphase={step}>
                <AddressPhase registerFormRef={registerFormRef} />
            </div>
            <div className={styles.shipping} dataphase={step}>
                <ShippingPhase onShippingOption={onShippingOption} />
            </div>
            <div className={styles.creditCard} dataphase={step}>
                <CreditCardPhase registerFormRef={registerFormRef} />
            </div>
        </section>
    );
}

export default RegisterForm;
