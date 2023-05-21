import styles from './AddressPhase.module.scss';
import InputBox from '../InputBox/InputBox';
import { useContext } from 'react';
import ProductContextMain from '../../../../../ProductContext/ProductContextMain';

const cities = [
    { id: 'KLU', city: '基隆市' },
    { id: 'TPH', city: '新北市' },
    { id: 'TPE', city: '臺北市' },
    { id: 'TYC', city: '桃園市' },
    { id: 'HSH', city: '新竹縣' },
    { id: 'HSC', city: '新竹市' },
    { id: 'MAC', city: '苗栗市' },
    { id: 'MAL', city: '苗栗縣' },
    { id: 'TXG', city: '臺中市' },
    { id: 'CWH', city: '彰化縣' },
    { id: 'CWS', city: '彰化市' },
    { id: 'NTC', city: '南投市' },
    { id: 'NTO', city: '南投縣' },
    { id: 'YLH', city: '雲林縣' },
    { id: 'CHY', city: '嘉義縣' },
    { id: 'CYI', city: '嘉義市' },
    { id: 'TNN', city: '臺南市' },
    { id: 'KHH', city: '高雄市' },
    { id: 'IUH', city: '屏東縣' },
    { id: 'PTS', city: '屏東市' },
    { id: 'ILN', city: '宜蘭縣' },
    { id: 'ILC', city: '宜蘭市' },
    { id: 'HWA', city: '花蓮縣' },
    { id: 'HWC', city: '花蓮市' },
    { id: 'TTC', city: '臺東市' },
    { id: 'TTT', city: '臺東縣' },
    { id: 'PEH', city: '澎湖縣' },
    { id: 'KMN', city: '金門縣' },
    { id: 'LNN', city: '連江縣' },
];
function AddressPhase() {
    // { registerFormRef }
    const { registerFormRef } = useContext(ProductContextMain);
    return (
        <form className="col col-12" dataphase="address">
            <h3 className={styles.formTitle}>寄送地址</h3>
            <section className="col col-12">
                {/* row 1 */}
                <div className={`${styles.row}`}>
                    <div className={`${styles.inputGroup} `}>
                        <div className={styles.inputLabel}>稱謂</div>
                        <div className={styles.selectContainer}>
                            <select
                                ref={(node) => {
                                    registerFormRef.current.set('稱謂', node);
                                }}
                            >
                                <option value="mr">先生</option>
                                <option value="ms">女士</option>
                                <option value="mx">不透露</option>
                            </select>
                        </div>
                    </div>

                    <div className={`${styles.inputGroup} `}>
                        <InputBox inputLabel="姓名" placeholder="請輸入姓名" registerFormRef={registerFormRef} />
                    </div>
                </div>

                {/* row 2 */}
                <div className={`${styles.row} `}>
                    <div className={`${styles.inputGroup} `}>
                        <InputBox inputLabel="電話" placeholder="請輸入電話" registerFormRef={registerFormRef} />
                    </div>
                    <div className={`${styles.inputGroup} `}>
                        <InputBox inputLabel="Email" placeholder="請輸入電子郵件" registerFormRef={registerFormRef} />
                    </div>
                </div>
                {/* row 3 */}
                <div className={`${styles.row} `}>
                    <div className={`${styles.inputGroup} `}>
                        <div className={styles.inputLabel}>縣市</div>
                        <div className={styles.selectContainer}>
                            <select
                                required
                                ref={(node) => {
                                    registerFormRef.current.set('縣市', node);
                                }}
                            >
                                <option value="">請選擇縣市</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={`${styles.inputGroup} `}>
                        <InputBox inputLabel="地址" placeholder="請輸入地址" registerFormRef={registerFormRef} />
                    </div>
                </div>
            </section>
        </form>
    );
}
export default AddressPhase;
