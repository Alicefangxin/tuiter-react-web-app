import Nav from "../../src/nav";
import ExploreScreen from "./ExploreScreen/index";
import {Link} from "react-router-dom";



function Tuiter() {
    return (
        <>
            <div>
                <Nav/>
                <ExploreScreen/>
                <Link to="/">Back</Link>
            </div>

        </>
    )
};

export default Tuiter


