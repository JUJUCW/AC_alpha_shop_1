import './Main.scss';

import Register from './Register/Register';
import Progress from './Progress/Progress';
import Cart from './Cart/Cart';

function Main() {
    return (
        <main className="siteMain">
            <div className="mainContainer">
                <Register />
                <Cart />
                <Progress />
            </div>
        </main>
    );
}
export default Main;
