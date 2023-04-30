const sections = [
    {
        title: '客戶服務',
        links: [
            { text: '運送說明', url: '#' },
            { text: '退換貨相關', url: '#' },
            { text: '付款資訊', url: '#' },
            { text: 'FAQ', url: '#' },
        ],
    },
    {
        title: '關於我們',
        links: [
            { text: '品牌故事', url: '#' },
            { text: '媒體聯繫', url: '#' },
            { text: 'Press kit', url: '#' },
        ],
    },
    {
        title: '資訊',
        links: [
            { text: '隱私權政策', url: '#' },
            { text: 'Cookie', url: '#' },
            { text: 'GDPR', url: '#' },
        ],
    },
    {
        title: '追蹤 ALPHA Shop',
        tel: '+886 02123-45678',
        socialIcons: [
            { iconName: 'facebook', url: '#' },
            { iconName: 'instagram', url: '#' },
            { iconName: 'whatsapp', url: '#' },
        ],
    },
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-logo-container">
                    <svg className="icon-logo">
                        <use xlinkHref="#svg-icon-logo"></use>
                    </svg>
                </div>
                {sections.map((section, index) => (
                    <section key={index} className="footer-section">
                        <h2 className="section-title">{section.title}</h2>
                        <div className="section-content">
                            {section.links &&
                                section.links.map((link, index) => (
                                    <a key={index} className="page-link" href={link.url}>
                                        {link.text}
                                    </a>
                                ))}
                            {section.tel && <div className="tel-info">{section.tel}</div>}
                            {section.socialIcons && (
                                <div className="social-icon-group">
                                    {section.socialIcons.map((icon, index) => (
                                        <svg key={index} className="social-icon cursor-point">
                                            <use xlinkHref={`#svg-icon-${icon.iconName}`}></use>
                                        </svg>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </footer>
    );
}

export default Footer