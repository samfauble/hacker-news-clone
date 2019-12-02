import React, {useState} from 'react'
import {NavLink, Route} from "react-router-dom"
import ArticlePage from './ArticlePage'
import CompareInstructions from './CompareInstructions'
import {ThemeConsumer} from "../contexts/ThemeContext"

function Navbar() {
    return (
        <ThemeConsumer>
            {({theme, toggleTheme})=>(
                <React.Fragment>
                    <div className="navContainer">
                        <ul className={`navList`}>
                            <NavLink 
                                exact to="/"
                                className={`noUnderline ${theme}NavButton`}
                                activeStyle= {{color: "#e43442"}}>
                                    Top
                            </NavLink>
                            <NavLink 
                                to="/new"
                                className={`noUnderline ${theme}NavButton`}
                                activeStyle= {{color: "#e43442"}}>
                                    New
                            </NavLink>
                            <NavLink 
                                exact to="/compare"
                                className={`noUnderline ${theme}NavButton`}
                                activeStyle= {{color: "#e43442"}}>
                                    Compare
                            </NavLink>
                             <button 
                                className={`${theme}ThemeButton`}
                                onClick={()=>toggleTheme()}>
                                 {theme==="light" ? <>😎</> : <>✨</>}
                            </button>
                        </ul>
                    </div>
                </React.Fragment>             
            )}
        </ThemeConsumer>

    )
}

export default Navbar
