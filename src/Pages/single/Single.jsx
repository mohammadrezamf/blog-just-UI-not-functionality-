import "./Single.css"
import Sidebar from "../../components/SideBar/SideBar"
import SinglePost from "../../components/SinglePost/SinglePost"
export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>

        </div>
    )
}