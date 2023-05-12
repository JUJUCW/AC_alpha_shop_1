import RegisterProgress from './RegisterProgress';
import RegisterForm from './RegisterForm';
import styles from './Register.module.scss';

function Register({ icons, step, onShippingOption, registerFormRef }) {
    return (
        <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`}>
            <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
            <RegisterProgress icons={icons} step={step}/>
            <RegisterForm
                step={step}
                onShippingOption={onShippingOption} registerFormRef={registerFormRef} />
        </section>
    );
}
export default Register;
