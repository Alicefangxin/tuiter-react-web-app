const NavigationSidebar = (active) => {
    return(`

    <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 d-flex flex-column flex-shrink-0">
            <ul class="nav flex-column mb-3 mb-sm-0 list-group">
                <li class="nav-item list-group-item list-group-item-action p-0 m-0"><i class="fab fa-t nav-link" style="color: black"></i></li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link"  href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/home.html" style="color: black"><i class="fas fa-home " style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> Home</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action active p-0 m-0">
                    <a class="nav-link list-group-item list-group-item-action active" aria-current="page" href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/explore/index.html" style="color: white">
                        <i class="fas fa-hashtag" style="color: white; padding-right: 10px;"></i>
                        <span class="d-none d-xxl-inline-block d-xl-inline-block"> Explore</span>
                    </a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/notification.html" style="color: black"> <i class="fas fa-bell" style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> Notifications</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/messages.html" style="color: black"> <i class="fas fa-envelope" style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> Messages</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/bookmarks/index.html" style="color: black"> <i class="fas fa-bookmark" style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> Bookmarks</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/lists.html" style="color: black"> <i class="fas fa-list" style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> Lists</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="https://a3--mellow-kashata-a59042.netlify.app/tuiter/profile.html" style="color: black"> <i class="fas fa-user" style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> Profile</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link ist-group-item list-group-item-action d-none d-xxl-block d-xl-block d-lg-block d-md-block" href="#" style="color: black"> <i class="fas fa-ellipsis-h" style="color: black; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block "> More</span></a>
                </li>
            </ul>
            <button class="btn btn-primary w-100 mt-1 rounded-pill">
                Tuit
            </button>
        </div>
    
 `);
}
export default NavigationSidebar;

