import { AddressPhase } from './Phase';
import styles from './RegisterForm.module.scss';

function From() {
    return (
        <section className={`${styles.formContainer} col col-12`}>
            <AddressPhase />
            {/* <ShippingPhase /> */}
            {/* <CreditPhase /> */}
        </section>
    );
}

export default From;
