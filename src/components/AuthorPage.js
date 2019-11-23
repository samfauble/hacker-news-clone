import React from 'react'
import Container from "../components/Container"
import Navbar from "../components/Navbar"

function AuthorPage() {
    return (
        <div>
            <Navbar />
            <h1 className="header moveLeft">Author_Name</h1>
            <p className="moveLeft">Joining date, # of karma</p>
            <h2 className="moveLeft">Posts</h2>
            <Container />
        </div>
    )
}

export default AuthorPage
