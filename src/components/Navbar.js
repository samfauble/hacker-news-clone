import React from 'react'
import {Link, Route} from "react-router-dom"
import ArticlePage from './ArticlePage'
import CompareInstructions from './CompareInstructions'

function Navbar() {
    return (
        <div className="navContainer">
        <ul className="navList">
            <Link 
                className="navButton"
                to="/">
                    Top
            </Link>
            <Link 
                className="navButton"
                to="/new">
                    New
            </Link>
            <Link 
                className="navButton"
                to="/compare">
                    Compare
            </Link>
            <button className="lightThemeButton">😎</button> 
        </ul>
        <Route exact path="/" component={ArticlePage} />
        <Route exact path="/new" component={ArticlePage} />
        <Route path="/compare" component={CompareInstructions} />
        </div>
    )
}

export default Navbar
