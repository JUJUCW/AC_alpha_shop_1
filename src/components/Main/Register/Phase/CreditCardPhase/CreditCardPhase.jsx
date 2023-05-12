import InputBox from '../InputBox/InputBox';
import styles from './CreditCardPhase.module.scss';

function CreditCardPhase({registerFormRef}) {
    return (
        <form className="col col-12" dataphase="credit-card">
            <h3 className={styles.formTitle}>付款資訊</h3>
            <section className="form-body col col-12">
                <div className={`${styles.row} col col-12`}>
                    <InputBox
                        inputLabel="持卡人姓名"
                        placeholder="John Doe"
                        layoutLarge="input-w-lg-4"
                        layoutSmall="input-w-sm-full"
                        registerFormRef={registerFormRef}
                    />
                </div>
                <div className={`${styles.row} col col-12`}>
                    <InputBox
                        inputLabel="卡號"
                        placeholder="1111 2222 3333 4444"
                        layoutLarge="input-w-lg-4"
                        layoutSmall="input-w-sm-full"
                        registerFormRef={registerFormRef}
                    />
                </div>
                <div className={`${styles.row} col col-12`}>
                    <InputBox
                        inputLabel="有效期限"
                        placeholder="MM/YY"
                        layoutLarge="input-w-lg-4"
                        layoutSmall="input-w-sm-full"
                        registerFormRef={registerFormRef}
                    />
                    <InputBox
                        inputLabel="CVC / CCV"
                        placeholder="123"
                        layoutLarge="input-w-lg-3"
                        layoutSmall="input-w-sm-s3"
                        registerFormRef={registerFormRef}
                    />
                </div>
            </section>
        </form>
    );
}

export default CreditCardPhase;
