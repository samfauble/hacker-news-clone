import React from 'react'

function Card({head, info, children}) {
    return (
        <div className="card">
            <h3 className="cardLine">{head}</h3>
            <p className="cardLine">{info}</p>
            {children}
        </div>
    )
}

export default Card
