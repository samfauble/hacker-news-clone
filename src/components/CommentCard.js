import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"

function CommentCard({commenter, date, children}) {

    const dateObj = new Date(date * 1000);
    const utc = dateObj.toUTCString();

    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`${theme}card`}>
                    <p className={`${theme}CardLine`}><strong>{`by ${commenter} on ${utc}`}</strong></p>
                    <p className={`${theme}CardLine`}>{children}</p>
                </div>                
            )}
        </ThemeConsumer>
    )
}

export default CommentCard
