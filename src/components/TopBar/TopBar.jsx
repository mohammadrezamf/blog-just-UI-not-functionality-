import React from 'react';
import './TopBar.css';
import faker from 'faker'
import {Link} from "react-router-dom"
import '../../components/StyleExternal/styleExternal.css'


export default  function TopBar () {
    const user = true;
    return(
        <div className ="top" >
            <div className = "topLeft">
            <i className=" topIcon fab fa-github"></i>
            <i className=" topIcon fab fa-instagram"></i>
            <i className=" topIcon fab fa-twitter"></i>
            <i className=" topIcon fab fa-linkedin"></i>
            </div>

            <div className = "topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link  iconStyle">Home</Link></li>
                    
                    <li className="topListItem"><Link to="/single" className="link  iconStyle">Post</Link></li>
                    <li className="topListItem"><Link to="/write" className="link  iconStyle">Write</Link></li>

                    <li className="topListItem"><Link to="/register" className="link iconStyle">Register</Link></li>
                    <li className="topListItem"><Link to="/login" className="link iconStyle">Login</Link></li>

                    <li className="topListItem iconStyle">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className = "topRight">
                {
                    user ? (
                        <img className='topImg' 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oBvol_uzGyDbStyW_qtBoTyYu6plupXVG2ek5LxrPiEhn49qt8YwrNa1mTsNZwbkAfg&usqp=CAU"
                        alt='machine-learning' />
                    ) : (
                        <ul className="topList">

                            <li className="topListItem">
                                <Link to="/login" className="link">
                                Login
                                </Link>
                            </li>

                            <li className="topListItem">
                                <Link to="/register" className="link">
                                Register
                                </Link>
                            </li>
                            
                        </ul>
                    )
                }
                
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}