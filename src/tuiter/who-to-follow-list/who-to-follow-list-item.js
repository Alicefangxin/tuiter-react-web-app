import React from "react";
const WhoToFollowListItem = ({ who, key }) => {

    return (
        <a key={key} href="/" className="list-group-item list-group-item-action wd-darkGreyBG wd-noBorders ">
            <div className='row'>

                <div className='col-8 wd-flex-row'>
                    <img src={who.avatarIcon} height="40px" width="40px" className="wd-borderRadiusCircle me-2" alt=""/>
                    <div className="wd-flex-column" style={{ whiteSpace: "nowrap" }}>
                        <div>
                            <b className="wd-whiteFont">{who.userName}</b>
                            <span className="fa-stack fa-xs" style={{ fontSize: "0.8rem" }} >
                                <i className="fas fa-check-circle ms-2" ></i>
                            </span>
                        </div>
                        <div className="text-black ms-1">{who.userHandle}</div>
                    </div>
                </div>

                <div className='col-4'>
                    <button className="btn btn-primary wd-font14 wd-borderRadius50 pt-1 pb-1"> Follow </button>
                </div>

            </div>
        </a >
    );
}

export default WhoToFollowListItem;

