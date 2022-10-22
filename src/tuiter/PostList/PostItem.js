
import React from 'react'

const verifiedIcon = <span className="fa-stack fa-xs" style={{ fontSize: "1rem" }}>
    <i className="fas fa-check-circle fa-inverse fa-stack-1x wd-blackFont"></i>
</span>

const markTextAsLink = (title, markText) => {
    let re = new RegExp(markText, 'g')
    return (
        title.replace(re, '<a href="#" class="text-decoration-none text-primary">' + markText + '</a>')
    )
}

const PostItem = ({ post, key }) => {
    return (
        <>
            <div key={key} className="wd-flex-column">
                <div className='wd-flex-row'>
                    <div className='wd-flex-column d-inline-block'>
                        <img src={post.profilePhoto} height="40px" width="40px" className="wd-borderRadiusCircle me-2"/>
                    </div>
                    <div className='wd-flex-column ps-2 w-100'>
                        <div className="d-flex justify-content-between">
                        <div>
                            <span className=" wd-whiteFont wd-fontBold">{post.username} </span>
                            {post.verified ? verifiedIcon : ``}
                            <span className=" wd-lightGreyFont"> @{post.handle} . {post.time} </span>
                        </div>
                        <i className="fas fa-ellipsis-h wd-flex-noWrap"></i>
                        </div>            
                        <div dangerouslySetInnerHTML={{__html: markTextAsLink(post.title, post.markText)}}/>
                    </div>
                </div>

                <div className='wd-borderRadius12px border border-dark' >
                    <img src={post.image} width="100%" height="264px" className='wd-borderRadius12px' alt=""/>
                    {post.descriptionHeading &&
                        <>
                            <br />
                            <p className=" ps-3 pe-3 pt-3 pb-1  border-top border-dark">
                                <span className="wd-whiteFont wd-fontBold"> {post.descriptionHeading} </span>
                                <br />
                                <span className="wd-lightGreyFont">{post.description}</span>
                                <br />
                                <i className="fa fa-link" style={{ color: "rgb(110, 118, 125)" }}></i>
                                &nbsp; <span className="wd-lightGreyFont">{post.externalLink} </span>

                            </p>
                        </>
                    }
                </div>

            </div>

            <div className='wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter ps-4 pe-4 mt-2' >
                <a href='/' id='comment' className='wd-noLinkDecor wd-lightGreyFont'>
                    <i className="far fa-comment"></i>
                    {post.comment}
                </a>
                <a href='/' id='retweet' className='wd-noLinkDecor'>
                    <i className="fas fa-retweet"></i>
                    {post.retweet}
                </a>
                <a href='/' id='like' className='wd-noLinkDecor'>
                    <i className="far fa-heart"></i>
                    {post.like}
                </a>
                <a href='/' id='share' className='wd-noLinkDecor'>
                    <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
            <hr className='wd-whiteFont'></hr>
        </>
    )

}
export default PostItem

