import { createContext } from 'react';

import icons from '../public/icons/icons.svg';
import { ProductContextMainProvider } from './ProductContextMain';

const ProductContextApp = createContext();
function ProductContextAppProvider({ children }) {
    const value = { icons };
    return (
        <ProductContextApp.Provider value={value}>
            <ProductContextMainProvider>{children}</ProductContextMainProvider>
        </ProductContextApp.Provider>
    );
}

export default ProductContextApp;
export { ProductContextAppProvider };
