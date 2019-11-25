import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"

function CommentCard() {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`${theme}card`}>
                    <p className={`${theme}CardLine`}>Commenter, Date, Time</p>
                    <p className={`${theme}CardLine`}>Comment Body</p>
                </div>                
            )}
        </ThemeConsumer>
    )
}

export default CommentCard
