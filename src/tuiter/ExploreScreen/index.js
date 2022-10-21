import React from "react";
import "./index.css";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../who-to-follow-list/index";
import ExploreComponent from "./ExploreComponent";
import {Link} from "react-router-dom";

const ExploreScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
            <Link to="/">Back</Link>
        </div>

    );
};
export default ExploreScreen;