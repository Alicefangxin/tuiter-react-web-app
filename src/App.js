/* import logo from './logo.svg';
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
import Assignment7 from "./labs/a7";
import Assignment6 from "./labs/a6";
import tuiter from "./tuiter/index";
import ProfileScreen from "./tuiter/ProfileScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/*"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                    <Route path="/tuiter/profile" element={<ProfileScreen/>}/>

 <Route path="home" element={<HomeScreen/>}/>
                            <Route path="explore" element={<ExploreScreen/>}/>
                            <Route path="profile" element={<ProfileScreen/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;

*/


import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./labs/a6/hello-world";
import Labs from "./labs";
import Assignment7 from "./labs/a7";
import Assignment6 from "./labs/a6";
import Index from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfileScreen from "./tuiter/ProfileScreen";
import ExploreScreen from "./tuiter/ExploreScreen";
import HomeScreen from "./tuiter/HomeScreen";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Tuiter from "./tuiter/index.js";



function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs/>}/>
                        <Route path="/*" exact={true} element={<Labs/>}/>
                        <Route path="hello" element={<HelloWorld/>}/>
                        <Route path="tuiter" element={<Tuiter/>}>
                            <Route index element={<HomeScreen/>}/>
                            <Route path="/tuiter/home" element={<HomeScreen/>}/>
                            <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                            <Route path="/tuiter/profile" element={<ProfileScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


