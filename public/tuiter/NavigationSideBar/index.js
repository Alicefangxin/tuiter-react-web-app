const NavigationSideBar = (activeElement) => {
    $(document).ready(function () {
        $('#' + activeElement).addClass('active');
    });
    return (`
    <div class="list-group">
            <ul class="nav flex-column mb-3 mb-sm-0">
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <i class="fas fa-tenge nav-link" style="color: white; padding-right: 10px;"></i>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0" id="liHome">
                    <a class="nav-link"  href="../HomeScreen/index.html">
                        <i class="fas fa-home" style="color: white; padding-right: 10px;"></i>
                        <span class="d-none d-xxl-inline-block d-xl-inline-block" style="color: white">Home</span>
                    </a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0" id="liExplore">
                    <a class="nav-link" href="../ExploreScreen/index.html">
                        <i class="fas fa-hashtag" style="color: white; padding-right: 10px;"></i>
                        <span class="d-none d-xxl-inline-block d-xl-inline-block" style="color: white">Explore</span>
                    </a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="#" style="color: white"> <i class="fas fa-bell" style="color: white; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block ">Notifications</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="#" style="color: white"> <i class="fas fa-envelope" style="color: white; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block ">Messages</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="#" style="color: white"> <i class="fas fa-bookmark" style="color: white; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block ">Bookmarks</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="#" style="color: white"> <i class="fas fa-list" style="color: white; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block ">Lists</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link" href="#" style="color: white"> <i class="fas fa-user" style="color: white; padding-right: 10px;"></i><span class="d-none d-xxl-inline-block d-xl-inline-block ">Profile</span></a>
                </li>
                <li class="nav-item list-group-item list-group-item-action p-0 m-0">
                    <a class="nav-link ist-group-item list-group-item-action d-none d-xxl-block d-xl-block d-lg-block d-md-block" 
                    href="#" style="color: white"> <i class="fas fa-ellipsis-h" style="color: white; padding-right: 10px;">
                    </i><span class="d-none d-xxl-inline-block d-xl-inline-block ">More</span></a>
                </li>
            </ul>
            <button class="btn btn-primary w-100 mt-2 rounded-pill">
                Tuit
            </button>
        </div>
    
    `);
}

export default NavigationSideBar;