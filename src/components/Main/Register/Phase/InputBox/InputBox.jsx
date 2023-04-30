import styles from './InputBox.module.scss';

function InputBox({ inputLabel, placeholder }) {
    return (
        <div className={styles.inputGroup}>
            <div className={styles.inputLabel}>{inputLabel}</div>
            <input type="text" placeholder={placeholder} />
        </div>
    );
}
export default InputBox;
