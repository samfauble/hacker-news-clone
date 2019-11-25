import React from 'react'
import Container from "../components/Container"
import Navbar from "./Navbar"
import {ThemeConsumer} from "../contexts/ThemeContext"

function Comments() {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <div>
                    <Navbar />
                    <h1 className={`${theme}header moveLeft`}>Article_Title</h1>
                    <p className="moveLeft">byline information (author,date, # comments)</p>
                    <Container />
                </div>
            )}

        </ThemeConsumer>
    )
}

export default Comments
