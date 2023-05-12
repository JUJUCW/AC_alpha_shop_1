import styles from './Progress.module.scss';

function StepBtn({ icons, step, onStepBtnChange, onSubmit }) {
    // switch (step) {
    //     case 1:
    //         return (
    //             <section className={`${styles.buttonGroup} col col-12`}>
    //                 <button
    //                     className={`${styles.prev} cursor-point`}
    //                     onClick={() => {
    //                         onStepBtnChange?.({ step: step - 1 });
    //                     }}
    //                 >
    //                     <svg>
    //                         <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
    //                     </svg>
    //                     上一步
    //                 </button>
    //                 <button
    //                     className={`${styles.next} cursor-point`}
    //                     onClick={() => {
    //                         onStepBtnChange?.({ step: step + 1 });
    //                     }}
    //                 >
    //                     下一步
    //                     <svg>
    //                         <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
    //                     </svg>
    //                 </button>
    //             </section>
    //         );
    //     case 2:
    //         return (
    //             <section className={`${styles.buttonGroup} col col-12`}>
    //                 <button
    //                     className={`${styles.prev} cursor-point`}
    //                     onClick={() => {
    //                         onStepBtnChange?.({ step: step - 1 });
    //                     }}
    //                 >
    //                     <svg>
    //                         <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
    //                     </svg>
    //                     上一步
    //                 </button>
    //                 <button className={`${styles.next} cursor-point`} onClick={onSubmit}>
    //                     確認下單
    //                 </button>
    //             </section>
    //         );
    //     default:
    //         return (
    //             <section className={`${styles.buttonGroup} col col-12`} dataphase="address">
    //                 <button
    //                     className={`${styles.next} cursor-point`}
    //                     onClick={() => {
    //                         onStepBtnChange?.({ step: step + 1 });
    //                     }}
    //                 >
    //                     下一步
    //                     <svg>
    //                         <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
    //                     </svg>
    //                 </button>
    //             </section>
    //         );
    // }

    if (step === 0) {
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
    } else if (step === 1) {
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
    } else if (step === 2) {
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
                <button className={`${styles.next} cursor-point`} onClick={onSubmit}>
                    確認下單
                </button>
            </section>
        );
    }
}

function Progress({ icons, step, onStepBtnChange, onSubmit }) {
    return (
        <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
            <StepBtn icons={icons} step={step} onStepBtnChange={onStepBtnChange} onSubmit={onSubmit} />
        </section>
    );
}
export default Progress;
