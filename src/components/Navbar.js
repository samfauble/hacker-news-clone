import React from 'react'
import {Link, Route} from "react-router-dom"
import ArticlePage from './ArticlePage'
import CompareInstructions from './CompareInstructions'

function Navbar() {
    return (
        <React.Fragment>
        <div className="navContainer">
            <ul className="navList">
                <Link 
                className="noUnderline"
                to="/">
                    Top
                </Link>
                <Link 
                to="/new" 
                className="noUnderline">
                    New
                </Link>
                <Link 
                to="/compare" 
                className="noUnderline">
                    Compare
                </Link>
                <button className="lightThemeButton">😎</button>
            </ul>
        </div>
        </React.Fragment>

    )
}

export default Navbar
