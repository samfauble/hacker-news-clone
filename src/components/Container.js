import React from 'react'
import Card from "../components/Card"
import CommentCard from "../components/CommentCard"
import {Route, Link} from "react-router-dom" 
import AuthorPage from "./AuthorPage"

export class Container extends React.Component {
    render() {
        const {posts}=this.props
        return (
            <div className="kontainer">
                <React.Fragment>
                    {posts.map((post)=>{
                        const {by, descendants, id, score, time, title, type, url} = post

                        const dateObj = new Date(time * 1000)
                        const utcString = dateObj.toUTCString();

                        return(
                            <React.Fragment key={id}>
                                <Card 
                                    head={<a className="noUnderline artLink" href={url}>{title}</a>}
                                    id= {id}
                                    username={by}
                                    time={utcString}
                                    number={descendants}/>
                            </React.Fragment>
                        )
                    })
                    }
                </React.Fragment>
            </div>
        )
    }
}

export default Container
