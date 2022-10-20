import React from "react";


const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "./images/teslalogo.jpg"
        }
    }
) => {
return (
        <div className={"row"}>
            <div>
                <h6 className={"d-inline-flex"}>{post.topic}</h6>
                <div>
                    <h5 className={"d-inline-flex"}>{post.userName}
                    <span className="fa-stack fa-xs" style={{ fontSize: "0.5rem" }}>
                                                    <i className="fas fa-certificate fa-stack-2x wd-whiteFont" ></i>
                                                    <i className="fas fa-check fa-inverse fa-stack-1x wd-blackFont" ></i>
                                                </span>
                    </h5><img src={post.image} width="80px" height="80px" className={"wd-center-content-img align-self-center float-end rounded"}/>
                    <h6 className={"d-inline-flex"}>- {post.time}</h6>
                    <h5 className={"d-flex"}>{post.title}</h5>
                </div>
            </div>
        </div>
    )
}
export default PostSummaryItem;

