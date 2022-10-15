const WhoToFollowListItem = (who) => {
    return (` 
                   
            <li class="row pb-2 list-group-item">
                <div class="row ps-2 pe-sm-0">
                    <div style="width: 15%" >
                        <img src=${who.avatarIcon} style="width: 50px; height: 50px; border-radius: 50%">
                    </div>
                    <div class="" style="width: 60%">
                        <div class="fw-bolder d-inline-flex ms-4">${who.userName}</div>
                        <i class="fas fa-check-circle d-inline-flex ms-1"></i>
                        <div class="text-secondary ms-4">${who.userHandle}</div>
                    </div>
                    <div style="width: 25%">
                        <a class="me-2 btn btn-primary rounded-pill btn-sm" href="#"
                           role="button">Follow</a>
                    </div>
                </div>
            </li>                       
`);
}
export default WhoToFollowListItem;