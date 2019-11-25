import React from 'react'
import {ThemeConsumer} from "../contexts/ThemeContext"

function Card({head, info, children}) {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`${theme}card`}>
                <h2 className={`moveCenter ${theme}CardLine`}>{head}</h2>
                <p className={`${theme}CardLine`}>{info}</p>
                {children}
            </div>
            )}
        </ThemeConsumer>
    )
}

export default Card
