import styles from './InputBox.module.scss';

function InputBox({ inputLabel, placeholder, layoutLarge, layoutSmall, registerFormRef }) {
    return (
        <div className={`${styles.inputGroup} ${layoutLarge} ${layoutSmall}`}>
            <div className={styles.inputLabel}>{inputLabel}</div>
            <input
                type="text"
                placeholder={placeholder}
                // ref={(node) => {
                //     registerFormRef.current.set(inputLabel, node);
                // }}
                // ref={(node) => {
                //     registerFormRef.current.set(inputLabel, node);
                // }}
                // ref={(node) => {
                //     registerFormRef.current.set('縣市', node);
                // }}
            />
        </div>
    );
}
export default InputBox;
