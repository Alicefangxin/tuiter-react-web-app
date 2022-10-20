import React from "react";
import PostSummaryList from "../post-summary-list/index";


const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="wd-flex-row wd-flex-alignStart wd-flex-justifySpaceBetween mb-3">
                    <div className="wd-flex-row wd-flex-justifyStart wd-flex-alignCenter wd-searchBoxDiv wd-borderRadius50 pt-1 pb-1 wd-whiteBG">
                        <i className="fa fa-search me-2 ms-2" style={{ color: "gray" }}></i>
                        <input style={{border: "none"}} className="wd-searchBox wd-transparentBG" placeholder="Search Tuiter" />
                    </div>
                    <a href="#">
                        <i className="fas fa-cog fa-2x" style={{ color: "dodgerblue" }}></i>
                    </a>
                </div>
            </div>
            <nav className="mb-3">
                <div className="nav nav-tabs">
                    <a className="nav-item nav-link active">For You</a>
                    <a className="nav-item nav-link" href="#">Trending</a>
                    <a className="nav-item nav-link" href="#">News</a>
                    <a className="nav-item nav-link" href="#">Sports</a>
                    <a className="nav-item nav-link d-none d-lg-block" href="#">Entertainment</a>
                </div>
            </nav>


            <a className="list-group-item list-group-item-action pt-0 pb-0 ps-0 pe-0 wd-transparentBG">
                <div className="position-relative wd-textCenter wd-whiteFont">
                    <img src="./images/starship.jpg" alt="starship" width="100%"/>
                    <div className="position-absolute wd-font-image wd-fontBold" style={{color: "white", bottom: "8px", left: "16px", zIndex: "1000" }}>SpaceX's Starship</div>
                </div>
            </a>
            <PostSummaryList src='explore'/>
        </>
    )
};
export default ExploreComponent;