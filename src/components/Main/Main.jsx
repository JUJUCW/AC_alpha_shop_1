import './Main.scss';

import Register from './Register/Register';
import Progress from './Progress/Progress';
// import Cart from './Cart/Cart';

function Main({ icons }) {
    return (
        <main className="siteMain">
            <div className="mainContainer">
                <Register icons={icons} />
                {/* <Cart icons={icons} /> */}
                <Progress icons={icons} />
            </div>
        </main>
    );
}
export default Main;
