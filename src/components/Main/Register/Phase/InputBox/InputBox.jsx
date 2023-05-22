import styles from './InputBox.module.scss';
// import { useContext } from 'react';
// import { CreditCardContext } from '../../../../../CreditCardInfo/CreditCardContext';

function InputBox({ inputLabel, placeholder, layoutLarge, layoutSmall, registerFormRef,
    // nameContext
}) {
    // const { handleChange } = useContext(CreditCardContext);

    return (
        <div className={`${styles.inputGroup} ${layoutLarge} ${layoutSmall}`}>
            <div className={styles.inputLabel}>{inputLabel}</div>
            <input
                type="text"
                placeholder={placeholder}
                ref={(node) => {
                    registerFormRef.current.set(inputLabel, node);
                }}
                // name={nameContext}
                // onChange={(e) => handleChange(e)}

            />
        </div>
    );
}
export default InputBox;
