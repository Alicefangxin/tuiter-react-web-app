import Nav from "../../src/nav";
import NavigationSidebar
    from "../../src/tuiter/NavigationSidebar/index";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import PostSummaryItem from "./post-summary-list/post-summary-item";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <PostSummaryItem/>
            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter


