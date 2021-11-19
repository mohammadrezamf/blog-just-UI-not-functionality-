import Post from '../post/post';
import './Posts.css';

export default function posts() {
    return(
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}