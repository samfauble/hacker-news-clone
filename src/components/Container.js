import React from 'react'
import Card from "../components/Card"
import CommentCard from "../components/CommentCard"

export class Container extends React.Component {
    render() {
        const {posts}=this.props
        console.log(posts)
        return (
            <div className="kontainer">
                <ul>
                {posts.map((post)=>{
                    const {by, descendants, id, score, time, title, type, url} = post
                    return(
                        <li key={id}>
                            <h3>{title}</h3>
                            <p>{time}<hr/>{descendants}<hr/>{by}</p>
                            
                        </li>
                    )
                })
                }
                </ul>
            </div>
        )
    }
}

export default Container
