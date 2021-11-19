import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import SlideBar from "../../components/SideBar/SideBar"
import "./Home.css"

export default function Home() {
    return(
        <div>
            <Header/>
            <div className="home">
                <Posts />
                <SlideBar/>
            </div>
        </div>
      
    )
}