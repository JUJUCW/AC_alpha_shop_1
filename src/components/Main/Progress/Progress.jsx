import styles from './Progress.module.scss';
import { useContext } from 'react';
import ProductContextApp from '../../../ProductContext/ProductContextApp';
import ProductContextMain from '../../../ProductContext/ProductContextMain';
import CartContext from '../../../ProductContext/CartContext';
import { CreditCardContext, CardOwnerProvider } from '../../../CreditCardInfo/CreditCardContext';

function StepBtn() {
    const { icons } = useContext(ProductContextApp);
    const { step, onStepBtnChange } = useContext(ProductContextMain);

    const {
        // creditCardInfo,
        // test,
        onSubmit,
    } = useContext(CreditCardContext);
    const { total } = useContext(CartContext);
    // console.log('credit card info', creditCardInfo);
    // console.log('test', test);
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
                            console.log('progress 確認下單被點擊');
                            onSubmit?.({
                                total: total,
                            });
                            console.log('progress', total);
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
        <CardOwnerProvider>
            <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
                <StepBtn />
            </section>
        </CardOwnerProvider>
    );
}
export default Progress;
