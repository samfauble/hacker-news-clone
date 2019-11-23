import React from 'react'
import Card from "../components/Card"
import CommentCard from "../components/CommentCard"

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <CommentCard />
                <CommentCard /> 
                <CommentCard /> 
                <CommentCard />  
            </div>
        )
    }
}

export default Container
