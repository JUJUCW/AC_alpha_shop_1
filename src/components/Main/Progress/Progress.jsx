import styles from './Progress.module.scss';
import { useContext } from 'react';
import ProductContextApp from '../../../ProductContext/ProductContextApp';
import ProductContextMain from '../../../ProductContext/ProductContextMain';
import CartContext from '../../../ProductContext/CartContext';
import { CreditCardContext } from '../../../CreditCardInfo/CreditCardContext';

function StepBtn() {
    const { icons } = useContext(ProductContextApp);
    // todo must rename for vars
    const { step, onStepBtnChange } = useContext(ProductContextMain);

    const { handleSubmit } = useContext(CreditCardContext);
    const { total } = useContext(CartContext);
    switch (step) {
        case 1:
            return (
                <section className={`${styles.buttonGroup} col col-12`}>
                    <button
                        className={`${styles.prev} cursor-point`}
                        onClick={() => {
                            onStepBtnChange?.({ step: step - 1 });
                        }}
                    >
                        <svg>
                            <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
                        </svg>
                        上一步
                    </button>
                    <button
                        className={`${styles.next} cursor-point`}
                        onClick={() => {
                            onStepBtnChange?.({ step: step + 1 });
                        }}
                    >
                        下一步
                        <svg>
                            <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
                        </svg>
                    </button>
                </section>
            );
        case 2:
            return (
                <section className={`${styles.buttonGroup} col col-12`}>
                    <button
                        className={`${styles.prev} cursor-point`}
                        onClick={() => {
                            onStepBtnChange?.({ step: step - 1 });
                        }}
                    >
                        <svg>
                            <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
                        </svg>
                        上一步
                    </button>
                    <button
                        className={`${styles.next} cursor-point`}
                        onClick={() => {
                            handleSubmit?.({
                                total: total,
                            });
                        }}
                    >
                        確認下單
                    </button>
                </section>
            );
        default:
            return (
                <section className={`${styles.buttonGroup} col col-12`} dataphase="address">
                    <button
                        className={`${styles.next} cursor-point`}
                        onClick={() => {
                            onStepBtnChange?.({ step: step + 1 });
                        }}
                    >
                        下一步
                        <svg>
                            <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
                        </svg>
                    </button>
                </section>
            );
    }
}

function Progress() {
    return (
        <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
            <StepBtn />
        </section>
    );
}
export default Progress;
