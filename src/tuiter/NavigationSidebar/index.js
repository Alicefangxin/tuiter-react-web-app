import React from "react";
import { Link } from "react-router-dom";
import {useLocation} from "react-router";



const NavigationSidebar = (
    {
        //active = 'explore'
    }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
    <>
         <div className="list-group">
                        <Link to="/"
                              className="list-group-item wd-noLinkLineDecor mt-3">
                                <i class="fas fa-flask"></i>
                            <span className="d-none d-xl-inline">Back to lab</span>
                        </Link>
                        <Link to="#"
                              className="list-group-item wd-noLinkLineDecor">
                                <i class="fab fa-twitter"></i>
                            
                        </Link>
                        <Link to="/tuiter/home"
                              className={`list-group-item wd-noLinkLineDecor ${active === 'home' ? 'active' : ''}`}>
                            <i className="fas fa-home wd-width20 wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Home</span>
                        </Link>

                        <Link to="/tuiter/explore"
                              className={`list-group-item wd-noLinkLineDecor ${active === 'explore' ? 'active' : ''}`}>
                            <i className="fas fa-hashtag wd-width20 wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Explore</span>
                        </Link>

                        <Link to="#"
                              className={`list-group-item wd-noLinkLineDecor`}>
                            <i className="far fa-bell wd-width20 wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Notifications</span>
                        </Link>

                        <Link to="#"
                              className={`list-group-item wd-noLinkLineDecor `}>
                            <i className="far fa-envelope wd-width20 wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Messages</span>
                        </Link>

                        <Link to="#"
                              className={`list-group-item wd-noLinkLineDecor`}>
                            <i className="far fa-bookmark wd-width20 wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Bookmarks</span>
                        </Link>

                        <Link to="#"
                              className={`list-group-item wd-noLinkLineDecor`}>
                            <i className="far fa-list-alt wd-width20  wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Lists</span>
                        </Link>

                        <Link to="/tuiter/profile"
                              className={`list-group-item wd-noLinkLineDecor ${active === 'profile' ? 'active' : ''}`}>
                            <i className="fas fa-home wd-width20 wd-whiteFont"></i>
                            <span className="d-none d-xl-inline">&nbsp;Profile</span>
                        </Link>

                        <Link to="#"
                              className={`list-group-item wd-noLinkLineDecor`}>
                            <span className="fa-stack wd-width20 fa-xs" >
                                <i className="fas fa-ellipsis-h wd-width20 wd-whiteFont"></i>
                            </span>
                            <span className="d-none d-xl-inline">More</span>
                        </Link>
                    </div>
                    <button type="button" className="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
                </>
    );
};
export default NavigationSidebar;



