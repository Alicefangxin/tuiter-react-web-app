import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`   
        <div class="row">
            <div class="mb-1 input-group"> 
                <div class="wd-flex-row wd-flex-justifyStart wd-flex-align-center wd-search-box wd-border-radius wd-bg-white">
                    <i class="fas fa-search text-secondary ms-3"></i>                        
                    <input type="text" class="col-11 form-control wd-searchBar rounded-pill" placeholder="Search Tuiter">        
                </div>
               
                <div class="">
                    <span><a class="ms-3" href="explore-settings.html"><i class="mt-2 ms-5 wd-gear fas fa-cog"></i></a></span>
                </div>
            </div>
            
          <nav class="navbar-expand">    
          <ul class="nav nav-tabs mt-1 ">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>  
          </nav>
    
           <div class="row mt-1 mb-1">
                <div class="position-relative">
                    <img src="../images/starship.jpg" width="104%">
                    <div class="d-flex align-items-end">
                        <h2 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>
                    </div>
                </div>
           </div>
       
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;