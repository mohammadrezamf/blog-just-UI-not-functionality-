import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img
                className="PostImg"
                src="https://motionarray.imgix.net/preview-128704-ziC6xHGwhm-high_0003.jpg"
                alt='machineearning'
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                
                    here best place for learning machine learning,
                  
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. In iure, nam ut laboriosam 
                accusantium itaque ipsum quibusdam voluptas 
                explicabo iste modi molestias quia fugiat, 
                dolorem earum cumque voluptate aperiam tempore.
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. In iure, nam ut laboriosam 
                accusantium itaque ipsum quibusdam voluptas 
                explicabo iste modi molestias quia fugiat, 
                dolorem earum cumque voluptate aperiam tempore
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. In iure, nam ut laboriosam 
                accusantium itaque ipsum quibusdam voluptas 
                explicabo iste modi molestias quia fugiat, 
                dolorem earum cumque voluptate aperiam tempore
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. In iure, nam ut laboriosam 
                accusantium itaque ipsum quibusdam voluptas 
                explicabo iste modi molestias quia fugiat, 
                dolorem earum cumque voluptate aperiam tempore
            </p>

        </div>
    )
}