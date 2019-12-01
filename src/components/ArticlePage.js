import Navbar from "../components/Navbar"
import Container from "../components/Container"
import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"
import useFetchMainPosts from "./useFetchMainPosts"


function ArticlePage () { 
    const [posts, error] = useFetchMainPosts("new")
   
    
    return (
        <ThemeConsumer>
            {(theme)=>(
                <React.Fragment>
                    <Navbar />
                    <h1 className={`header moveLeft`}>New Articles</h1>
                    <Container posts={posts}/>
                </React.Fragment>
            )}
        </ThemeConsumer>
    )
}

export default ArticlePage
