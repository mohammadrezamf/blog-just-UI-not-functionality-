import React from 'react'
import "./Header.css"
// import faker from 'faker'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & node</span>
                <span className="headerTitleLg">blog</span>

            </div>
            <img className="headerImg" 
            src="https://i.pinimg.com/originals/e0/c0/66/e0c0666907c16ff5df0e01b854c00e14.jpg" alt="machinelearning"/>
        </div>
    )
}