import styles from './Header.module.scss';

const navList = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];
const navItems = [
    { icon: 'search', className: styles.navItem },
    { icon: 'cart', className: styles.navItem },
    { icon: 'moon', className: `${styles.navItem} cursor-point`, id: 'theme-toggle' },
];

function Nav({ item }) {
    return (
        <li className={styles.navItem}>
            <a className={styles.navLink} href="#">
                {item}
            </a>
        </li>
    );
}

function Header({ icons }) {
    return (
        <header className={styles.siteHeader}>
            <div className={`${styles.headerContainer} mx-auto`}>
                {/* <!-- navbar-toggle --> */}
                <input id="navbar-toggle" className={styles.navbarToggle} type="checkbox" />
                <label for="navbar-toggle" className={styles.burgerContainer}>
                    <svg className={`${styles.iconToggle} cursor-point`}>
                        <use xlinkHref={`${icons}#svg-icon-toggle`}></use>
                    </svg>
                </label>

                {/* <!-- navbar-menu --> */}
                <nav className={styles.navbarMenu}>
                    <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
                        {navList.map((item, index) => (
                            <Nav item={item} key={index} />
                        ))}
                    </ul>
                    <ul className={`${styles.navList} ${styles.siteActionList}`}>
                      
                        {navItems.map(({ icon, className, id }) => (
                            <li key={icon} className={className} id={id}>
                                <svg className={`${styles.navIcon} cursor-point`}>
                                    <use xlinkHref={`${icons}#svg-icon-${icon}`} />
                                </svg>
                            </li>
                        ))}

                    </ul>
                </nav>
                {/* <!-- logo --> */}
                <a className={styles.headerLogoContainer} href="#">
                    <svg className="icon-logo cursor-point">
                        <use xlinkHref={`${icons}#svg-icon-logo`}></use>
                    </svg>
                </a>
            </div>
        </header>
    );
}
export default Header;
