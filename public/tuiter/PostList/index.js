import posts from "./post.js"
import PostItem from "./PostItems.js"

const PostList = () => {
    return (`
        <div class="list-group wd-textLeft">
            ${posts.map(post => {
        return PostItem(post)
    }).join('')}
        </div>
    `)

}
export default PostList