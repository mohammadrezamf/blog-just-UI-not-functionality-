
import SideBar from '../../components/SideBar/SideBar';
import './Settings.css';

export default function Settings() {
    return (
        <div className="settings">
           <div className="settingsWrapper">
               <div className="settingsTitle">
                   <span className="settingUpdateTitle">update your Account</span>
                   <span className="settingDeleteTitle">delete your Account</span>
               </div>
               <form className="seetingsForm" >
                   <label >Profile Picture</label>
                   <div className="settingsPP">
                        <img
                        className='settingsPPImg' 
                        src="https://www.digitaleurope.org/wp/wp-content/uploads/2018/10/iStock-827679288-e1549447992310.jpg"
                        alt="AI" 
                        />
                        <label htmlFor="fileInput">
                            <i className=" settingPPIcon far fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                   </div>
                   <label>Username</label>
                   <input type="text" placeholder="mohammad" />
                   <label>Email</label>
                   <input type="text" placeholder="mohammadrezamf2014@gmail.com" />
                   <label>Password</label>
                   <input type="password"/>
                   <button className="settingSubmit">Update</button>
              

                </form>
           </div>
           <SideBar/>
        </div>
    )
}
