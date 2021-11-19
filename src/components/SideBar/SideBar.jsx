import './SideBar.css'


export default function slideBar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideBarTitle">About Me</span>
                <img
                    className="sidebarImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_uv6oCw_7lmpBWlu3V9Gs0wcAg8ea6N_EQ&usqp=CAU"
                    alt='machine-learning'
                />
                <p className="sidebar-p">
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit.
                     Optio accusantium eius nam asperiores 
                     ipsum harum ullam 
                     veniam ea ad sit sequi eum 
                    corrupti unde, rem dolor hic iste, 
                    officiis consequatur. 
                    
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="slidebarListItem">Life</li>
                    <li className="slidebarListItem">Music</li>
                    <li className="slidebarListItem">Style</li>
                    <li className="slidebarListItem">Sport</li>
                    <li className="slidebarListItem">Tech</li>
                    <li className="slidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-github"></i>
                    <i className=" sidebarIcon fab fa-github"></i>
                    <i className=" sidebarIcon fab fa-github"></i>
                    <i className=" sidebarIcon fab fa-github"></i>
                </div>
            </div>
            
        </div>
    )
}