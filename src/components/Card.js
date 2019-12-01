import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"
import {Link} from "react-router-dom"

function Card({id, head, username, time, number}) {

    const byLink = <Link style={{textDecoration: "none", color: "#000", fontWeight: "bold"}} to={{pathname: `/post?id=${id}`}} to={`/user?id=${username}`}>{username}</Link>
    const commentLink = <Link style={{textDecoration: "none", color: "#000", fontWeight: "bold"}} to={{pathname: `/post?id=${id}`}}>{number}</Link>

    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`${theme}card`}>
                    <h2 className={`${theme}CardLine`}>{head}</h2>
                    <p className={`${theme}CardLine`}>
                        {<span>by {byLink} on {time} with {commentLink} comments</span>}
                    </p>
                </div>
            )}
        </ThemeConsumer>
    )
}

export default Card
