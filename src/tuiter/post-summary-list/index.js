import React from "react";
import PostSummaryItem
    from "./post-summary-item";
import posts from "./posts.json";


const PostSummaryList = () => {
    return (
        <ul>
            {
                posts.map(posts => {
                    return (
                        <PostSummaryItem post={posts}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;