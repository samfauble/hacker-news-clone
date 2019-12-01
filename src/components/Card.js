import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"
import {Link} from "react-router-dom"

function Card({id, head, username, time, number, children}) {

    const byLink = <Link  style={{textDecoration: "none", color: "#000", fontWeight: "bold"}} to={`/user?id=${username}`}>{username}</Link>
    const commentLink = <Link className="noUnderLine" style={{textDecoration: "none", color: "#000", fontWeight: "bold"}} to={`/post?id=${id}`}>{number}</Link>

    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`${theme}card`}>
                    <h2 className={`${theme}CardLine`}>{head}</h2>
                    <p className={`${theme}CardLine`}>
                        {username !== undefined & time !== undefined & number !== undefined ?
                            <span>by {byLink} on {time} with {commentLink} comments</span> : null}
                    </p>
                    {children}
                </div>
            )}
        </ThemeConsumer>
    )
}

export default Card
