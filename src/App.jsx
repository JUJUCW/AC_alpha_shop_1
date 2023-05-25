import './reset.css';
import './base.scss';
import { ProductContextAppProvider } from './ProductContext/ProductContextApp';
import icons from './public/icons/icons.svg';
import Header from './components/Header/Header';
import { Main } from './components/index';

function App() {
    return (
        <ProductContextAppProvider>
                <div className="App">
                    <Header
                        icons={icons}
                    />
                    <Main
                        icons={icons}
                    />
                    {/* <Footer /> */}
                </div>
        </ProductContextAppProvider>
    );
}
export default App;
