import styles from './RegisterProgress.module.scss';

function Step({ icons, text, label, dataphase, step }) {
    return (
        <span className={styles.progressGroup} dataphase={dataphase} step={step}>
            <span className={styles.progressIcon}>
                <svg className={`${styles.icon} cursor-point`}>
                    <use xlinkHref={`${icons}#svg-icon-pg-complete`} />
                </svg>
                <span className={styles.text}>{text}</span>
            </span>
            <span className={styles.progressLabel}>{label}</span>
        </span>
    );
}

function RegisterProgress({ icons, step }) {
    return (
        <section className={`${styles.progressContainer} col col-12`}>
            <Step icons={icons} text="1" label="寄送地址" dataphase="address" step={step} />
            <span className={styles.progressBar} data-order="1" step={step} />

            <Step icons={icons} text="2" label="運送方式" dataphase="shipping" step={step} />

            <span className={styles.progressBar} data-order="2" step={step} />

            <Step icons={icons} text="3" label="付款資訊" dataphase="credit-card" step={step} />
        </section>
    );
}

export default RegisterProgress;
