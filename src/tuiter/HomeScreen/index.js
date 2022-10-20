import React from "react";
import PostList from "../PostList/index.js";
import post from "../PostList/post.json";
import NavigationSideBar from "../NavigationSidebar";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";
import who from "../who-to-follow-list/who.json"
import HomeComponent from "../HomeScreen/HomeCoponent";
import NavigationSidebar from "../NavigationSidebar";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div className="row mt-2">
            <div className="pt-3 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 ">
                <NavigationSidebar active="home" />
            </div>
            <div className="pt-3 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 wd-flex-column wd-borderDiv border-top-0 border-bottom-0">
                <HomeComponent />
            </div>
            <div className="d-none d-md-none d-lg-block col-lg-4 col-xl-4 pt-3 col-xxl-3 wd-textCenter ">
                <PostSummaryList src='home' />
            </div>
            <Link to="/">Back</Link>
        </div>

    );
};

export default HomeScreen;