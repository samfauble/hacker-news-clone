import React, {useState} from 'react'
import {NavLink, Route} from "react-router-dom"
import ArticlePage from './ArticlePage'
import CompareInstructions from './CompareInstructions'

function Navbar() {
    const [navItem, setNavItem] = useState("top")

    const navList = ["top", "new", "compare"]

    const handleClick = (item)=> setNavItem(`${item}`)

    return (
        <React.Fragment>
        <div className="navContainer">
            <ul className="navList">
                {navList.map((item)=>(
                    <NavLink
                    key={item} 
                    to={`/${item}`}
                    className="noUnderline"
                    onClick= {()=> handleClick(item)}
                    activeStyle= {{color: "red"}}>
                        {item}
                    </NavLink>
                ))}
                <button className="lightThemeButton">😎</button>
            </ul>
        </div>
        </React.Fragment>

    )
}

export default Navbar
