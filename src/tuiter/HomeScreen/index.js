import React from "react";
import PostSummaryList from "../post-summary-list/index";
import HomeComponent from "../HomeScreen/HomeCoponent";
import NavigationSidebar from "../NavigationSidebar/index"
import TuitList from "../tuits/index";
import {Link} from "react-router-dom";
import WhatsHappening from "../WhatsHappening/index";
import WhoToFollowList from "../who-to-follow-list";

const HomeScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home" />
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{ "position": "relative" }}>
                <WhatsHappening/>
                <TuitList/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList src="home" />
            </div>
        </div>
    );
};

export default HomeScreen;