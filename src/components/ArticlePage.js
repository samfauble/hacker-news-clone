import Navbar from "../components/Navbar"
import Container from "../components/Container"
import React from 'react'

function ArticlePage({children}) {
    return (
        <div>
            
            <Navbar />
            <h1 className="header moveLeft">TitleOfArticle</h1>
            <p className="moveLeft">Author, Date, # of comments</p>
            <Container />
        </div>
    )
}

export default ArticlePage
