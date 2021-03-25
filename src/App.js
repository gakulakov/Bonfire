import './App.css';
import {Header} from "./components/Header/Header";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {Creators} from "./components/Creators/Creators";
import {Profits} from "./components/Profits/Profits";
import {Unlock} from "./components/Unlock/Unlock";
import {Customized} from "./components/Customized/Customized";
import {Merch} from "./components/Merch/Merch";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <div className={'black-container'}>
                <Header/>
                <MainBlock/>
            </div>
            <Creators/>
            <Profits/>
            <div className={'black-container'}>
                <Unlock/>
            </div>
            <Customized/>
            <div className={'gray-container'}>
                <Merch/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
