import './Main.scss';

import Register from './Register/Register';
import Progress from './Progress/Progress';
import Cart from './Cart/Cart';
import { CreditCardProvider } from '../../CreditCardInfo/CreditCardContext';

function Main() {
    return (
        <main className="siteMain">
            <div className="mainContainer">
                <CreditCardProvider>
                <Register />
                <Cart />
                <Progress />
                </CreditCardProvider>
            </div>
        </main>
    );
}
export default Main;
