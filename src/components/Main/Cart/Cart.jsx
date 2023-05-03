import styles from './Cart.module.scss';
// import Minus from 'src/icons/minus.svg'

import { useState } from 'react';

const productData = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

function ProductListItem({ icons, item, onCartItemsChange }) {
    function handleQuantityChange(quantity) {
        if (quantity <= 0) {
            return;
        }
        onCartItemsChange?.({ id: item.id, quantity });
    }

    return (
        <div className={`${styles.productContainer} col col-12`} data-count="0" data-price={item.price}>
            <img className={styles.imgContainer} src={item.img} alt={item.name} />
            <div className={styles.productInfo}>
                <div className={styles.productName}>{item.name}</div>
                <ProductControl item={item} icons={icons} onQuantityChange={handleQuantityChange} />
                <div className={styles.price}>$ {`${item.price * item.quantity}`}</div>
            </div>
        </div>
    );
}

function ProductControl({ item, icons, onQuantityChange }) {
    return (
        <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
                <span onClick={() => onQuantityChange(item.quantity - 1)}>
                    <svg className={`${styles.productAction} minus`}>
                        <use xlinkHref={`${icons} #svg-icon-minus`} />
                    </svg>
                </span>
                <span className={styles.productCount}>{item.quantity}</span>
                <span onClick={() => onQuantityChange(item.quantity + 1)}>
                    <svg className={`${styles.productAction} plus`}>
                        <use xlinkHref={`${icons} #svg-icon-plus`} />
                    </svg>
                </span>
            </div>
        </div>
    );
}

function Cart({ icons }) {
    const [items, setItems] = useState(productData);

    function handleCartItemsChange({ id, quantity }) {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
                <h3 className={styles.cartTitle}>購物籃</h3>
                <section className={`${styles.productList} col col-12`} data-total-price="0">
                    {items.map((item) => (
                        <ProductListItem
                            item={item}
                            icons={icons}
                            key={item.id}
                            onCartItemsChange={handleCartItemsChange}
                        />
                    ))}
                </section>
                {/* --------- 結帳  -------- */}
                <section className={`${styles.cartInfo} ${styles.shipping} col col-12`}>
                    <div className={styles.text}>運費</div>
                    <div className={styles.price}>免費</div>
                </section>
                <section className={`${styles.cartInfo} ${styles.total} col col-12`}>
                    <div className={styles.text}>小計</div>
                    <div className={styles.price}>$ {`${total}`}</div>
                </section>
            </section>
        </>
    );
}

export default Cart;
