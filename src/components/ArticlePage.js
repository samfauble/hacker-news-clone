import Navbar from "../components/Navbar"
import Container from "../components/Container"
import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"

function ArticlePage({children}) { 
    return (
        <ThemeConsumer>
            {(theme)=>(
                <div>
                <Navbar />
                <h1 className={`${theme}header moveLeft`}>TitleOfArticle</h1>
                <p className={`${theme}info moveLeft`}>Author, Date, # of comments</p>
                {children}
            </div>
            )}
        </ThemeConsumer>
    )
}

export default ArticlePage
