import './reset.css';
import './base.scss';
import icons from './public/icons/icons.svg';
// import { Header } from './components/Header';
import { Main } from './components';
// import { Footer } from './components/Footer';

function App() {
    return (
        <div className="App">
            {/* <Header  /> */}
            <Main icons={icons} />
            {/* <Footer /> */}
        </div>
    );
}
export default App;
