import React from "react";

const PostSummaryItem = ({ post, key }) => {
    return (
        <a key={key} href="/" className="list-group-item list-group-item-action wd-transparentBG wd-noLinkOutline">
            <div className="wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter">
                <div className="wd-flex-row pe-2">
                    <div className="wd-flex-column">
                        <div>
                            <span className="text-secondary">{post.topic}</span>
                            <br />
                            <b className="text-black">{post.userName}</b> &nbsp;
                            <span className="fa-stack fa-xs" style={{ fontSize: "1rem" }}>
                                <i className="fas fa-check-circle fa-inverse fa-stack-1x wd-blackFont" ></i>
                            </span>
                            <span className="text-secondary">- {post.time}</span>
                        </div>
                        <div className="text-black">{post.title}</div>
                        {post.tweets && <span className="text-secondary">{post.tweets} Tuits</span>}
                    </div>
                </div>
                <div>
                    <img src={post.image} width="80px" height="80px" className="rounded" alt=""/>
                </div>
            </div>
        </a>
    )
}

export default PostSummaryItem