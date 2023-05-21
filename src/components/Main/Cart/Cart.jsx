import styles from './Cart.module.scss';

import { useContext } from 'react';
import ProductContextApp from '../../../ProductContext/ProductContextApp';
import ProductContextMain from '../../../ProductContext/ProductContextMain';
import CartContext from '../../../ProductContext/CartContext';

function ProductListItem({ item }) {
    const { icons } = useContext(ProductContextApp);
    const { onQuantityChange } = useContext(CartContext);

    // function handleQuantityChange(quantity) {
    //     if (quantity < 0) {
    //         return;
    //     }
    //     onCartItemsChange?.({ id: item.id, quantity });
    // }

    return (
        <div className={`${styles.productContainer} col col-12`} data-count="0" data-price={item.price}>
            <img className={styles.imgContainer} src={item.img} alt={item.name} />
            <div className={styles.productInfo}>
                <div className={styles.productName}>{item.name}</div>
                {/* <ProductControl
                    // item={item}
                    icons={icons}
                    // onQuantityChange={handleQuantityChange}
                /> */}
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <span
                            onClick={() => {
                                onQuantityChange?.({ id: item.id, quantity: item.quantity - 1 });
                            }}
                        >
                            <svg className={`${styles.productAction} minus`}>
                                <use xlinkHref={`${icons}#svg-icon-minus`} />
                            </svg>
                        </span>
                        <span className={styles.productCount}>{item.quantity}</span>
                        <span
                            onClick={() => {
                                onQuantityChange?.({ id: item.id, quantity: item.quantity + 1 });
                            }}
                        >
                            <svg className={`${styles.productAction} plus`}>
                                <use xlinkHref={`${icons}#svg-icon-plus`} />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className={styles.price}>$ {`${item.price * item.quantity}`}</div>
            </div>
        </div>
    );
}

// function ProductControl({
//     item,
//     // icons,
//     // onQuantityChange
// }) {
//     const { onQuantityChange } = useContext(CartContext);
//     const { icons } = useContext(ProductContextApp);

//     return (
//         <div className={styles.productControlContainer}>
//             <div className={styles.productControl}>
//                 {/* <span onClick={() => onQuantityChange(item.quantity - 1)}> */}
//                 <span
//                     onClick={() => {
//                         onQuantityChange?.({ id: item.id, quantity: item.quantity - 1 });
//                     }}
//                 >
//                     <svg className={`${styles.productAction} minus`}>
//                         <use xlinkHref={`${icons}#svg-icon-minus`} />
//                     </svg>
//                 </span>
//                 <span className={styles.productCount}>
//                     {/* {item.quantity} */}
//                 </span>
//                 {/* <span onClick={() => onQuantityChange(item.quantity + 1)}> */}
//                 <span
//                     onClick={() => {
//                         onQuantityChange?.({ id: item.id, quantity: item.quantity + 1 });
//                     }}
//                 >
//                     <svg className={`${styles.productAction} plus`}>
//                         <use xlinkHref={`${icons}#svg-icon-plus`} />
//                     </svg>
//                 </span>
//             </div>
//         </div>
//     );
// }

function Cart() {
    const { items, total } = useContext(CartContext);
    const { shippingFee } = useContext(ProductContextMain);

    return (
        <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
            <h3 className={styles.cartTitle}>購物籃</h3>
            <section className={`${styles.productList} col col-12`} data-total-price="0">
                {items.map((item) => (
                    <ProductListItem item={item} key={item.id} />
                ))}
            </section>
            {/* --------- 結帳  -------- */}

            <section className={`${styles.cartInfo} ${styles.shipping} col col-12`}>
                <div className={styles.text}>運費</div>
                <div className={styles.price}>{shippingFee}</div>
            </section>
            <section className={`${styles.cartInfo} ${styles.total} col col-12`}>
                <div className={styles.text}>小計</div>
                <div className={styles.price}>$ {`${total}`}</div>
            </section>
        </section>
    );
}

export default Cart;
