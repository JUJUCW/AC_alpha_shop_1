import './reset.css';
import './base.scss';
import { ProductContextAppProvider } from './ProductContext/ProductContextApp';
// import { CardOwnerProvider } from './CreditCardInfo/CreditCardContext';
import icons from './public/icons/icons.svg';
import Header from './components/Header/Header';
import { Main } from './components/index';
// import { Footer } from './components/Footer';

function App() {
    return (
        <ProductContextAppProvider>
            {/* <CardOwnerProvider> */}
                <div className="App">
                    <Header
                        icons={icons}
                    />
                    <Main
                        icons={icons}
                    />
                    {/* <Footer /> */}
                </div>
            {/* </CardOwnerProvider> */}
        </ProductContextAppProvider>
    );
}
export default App;
