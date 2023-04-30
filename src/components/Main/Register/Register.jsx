import RegisterProgress from './RegisterProgress';
import RegisterFrom from './RegisterForm';
import styles from './Register.module.scss';

function Register({ icons }) {
    return (
        <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`}>
            <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
            <RegisterProgress icons={icons} />
            <RegisterFrom />
        </section>
    );
}
export default Register;
