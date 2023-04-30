import { ReactComponent as logo } from '../icons/logo.svg';
import styles from './Footer.module.scss';

const items = [
    {
        title: '客戶服務',
        lists: ['運送說明', '退換貨說明', '付款資訊', 'FAQ'],
    },
    {
        title: '關於我們',
        links: [
      { text: '品牌故事', url: '#' },
      { text: '媒體聯繫', url: '#' },
      { text: 'Press kit', url: '#' },
    ]
    },
    {
        title: '資訊',
        lists: ['隱私權政策', 'Cookie', 'GDPR'],
    },
    {
        title: '追蹤',
        lists: ['+886 02134-45678'],
    },
];

// const Footer = ({ icons }) => {
//     return (
//         <>
//             <footer className={styles.siteFooter}>
//                 <div className={styles.footerContainer}>
//                     <div className={styles.footerLogoContainer}>
//                         <svg className={styles.styles.iconLogo}>
//                             <use xlinkHref={`${icons}#svg-icon-logo`}></use>
//                         </svg>
//                     </div>
//                     <section className={styles.footerSection}>
//                         <h2 className={styles.sectionTitle}>客戶服務</h2>
//                         <div className={styles.sectionContent}>
//                             <a className={styles.pageLink} href='#'>
//                                 運送說明
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 退換貨相關
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 付款資訊
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 FAQ
//                             </a>
//                         </div>
//                     </section>
//                     <section className={styles.footerSection}>
//                         <h2 className={styles.sectionTitle}>關於我們</h2>
//                         <div className={styles.sectionContent}>
//                             <a className={styles.pageLink} href='#'>
//                                 品牌故事
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 媒體聯繫
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 Press kit
//                             </a>
//                         </div>
//                     </section>
//                     <section className={styles.footerSection}>
//                         <h2 className={styles.sectionTitle}>資訊</h2>
//                         <div className={styles.sectionContent}>
//                             <a className={styles.pageLink} href='#'>
//                                 隱私權政策
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 Cookie
//                             </a>
//                             <a className={styles.pageLink} href='#'>
//                                 GDPR
//                             </a>
//                         </div>
//                     </section>
//                     <section className={styles.footerSection}>
//                         <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
//                         <div className={styles.sectionContent}>
//                             <div className={styles.telInfo}>+886 02123-45678</div>
//                             <div className={styles.socialIconGroup}>
//                                 <svg className={styles.socialIcon} cursor-point>
//                                     <use xlinkHref={`${icons}#svg-icon-facebook`}></use>
//                                 </svg>
//                                 <svg className={styles.socialIcon} cursor-point>
//                                     <use xlinkHref={`${icons}#svg-icon-instagram`}></use>
//                                 </svg>
//                                 <svg className={styles.socialIcon} cursor-point>
//                                     <use xlinkHref={`${icons}#svg-icon-whatsapp`}></use>
//                                 </svg>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </footer>
//             ;
//         </>
//     );
// };

// export default Footer;

// function FooterItems({ data }) {
//     const footerItems = data.map((item) => (
//         <section className={styles.footerSection} key={item.title}>
//         <h2 className={styles.sectionTitle}>{ item.title}</h2>
//         <div className={styles.sectionContent} key={item.title}>
//           {
//             item.lists.map((listItem) => (

//             ))
//           }
//             </div>
//         </section>
//     ));
// }
