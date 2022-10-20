import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HomeScreen from "./tuiter/HomeScreen/index";
import ExploreScreen from "./tuiter/ExploreScreen/index";
import tuiter from "./tuiter/index";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;



