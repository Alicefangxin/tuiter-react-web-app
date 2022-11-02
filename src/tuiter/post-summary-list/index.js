import React from "react";
import PostSummaryItem from "./post-summary-item";
import post from "./post.json";
import {useSelector} from "react-redux";


const PostSummaryList = ({ src }) => {
    const postsArray = useSelector(state => state.tuits)
    return (
        <div className={`list-group mt-2 ${src === 'home' ? 'wd-font13' : ''}`} id='postSumm'>
            {post.map((post, i) => {
                return <PostSummaryItem post={post} key={i} />
            })}
        </div>
    )
}

export default PostSummaryList
