import { AddressPhase } from './Phase';
import { ShippingPhase } from './Phase';
import { CreditCardPhase } from './Phase';
import styles from './RegisterForm.module.scss';

function From() {
    return (
        <section className={`${styles.formContainer} col col-12`}>
            <AddressPhase />
            <ShippingPhase />
            <CreditCardPhase />
        </section>
    );
}

export default From;
