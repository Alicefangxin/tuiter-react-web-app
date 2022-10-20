import React from "react";
import PostSummaryItem
    from "./post-summary-item";
import post from "./post.json";

const PostSummaryList = ({ src }) => {
    return (
        <div className={`list-group mt-2 ${src === 'home' ? 'wd-font13' : ''}`} id='postSumm'>
            {post.map((post, i) => {
                return <PostSummaryItem post={post} key={i} />
            })}
        </div>
    )
}

export default PostSummaryList
