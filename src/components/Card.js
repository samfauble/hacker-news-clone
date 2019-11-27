import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"

function Card({head, username, time, number}) {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`${theme}card`}>
                    <h2 className={`moveCenter ${theme}CardLine`}>{head}</h2>
                    <p className={`${theme}CardLine`}>{`by ${username} on ${time} with ${number} comments`}</p>
                </div>
            )}
        </ThemeConsumer>
    )
}

export default Card
