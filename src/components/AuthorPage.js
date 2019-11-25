import React from 'react'
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import {ThemeConsumer} from "../contexts/ThemeContext"

function AuthorPage() {
    return (
        <ThemeConsumer>
            {({theme})=>{
                <div>
                    <Navbar />
                    <h1 className={`${theme}header moveLeft`}>Author_Name</h1>
                    <p className="moveLeft">Joining date, # of karma</p>
                    <h2 className="moveLeft">Posts</h2>
                    <Container />
                </div>
        
            }}
        </ThemeConsumer>
    )
}

export default AuthorPage
