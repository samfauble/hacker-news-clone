import React from 'react'
import Container from "../components/Container"
import Navbar from "./Navbar"

function Comments() {
    return (
        <div>
            <Navbar />
            <h1 className="header moveLeft">Article_Title</h1>
            <p className="moveLeft">byline information (author,date, # comments)</p>
            <Container />
        </div>
    )
}

export default Comments
