import React from 'react'
import {FaCrown, FaSadCry} from "react-icons/fa"
import Card from "./Card"
import Navbar from "./Navbar"

function Results(props) {
    return (
        <React.Fragment>
            <Navbar />
            <h1 className="header moveCenter">Results</h1>
            <div className="instructions spaceAround">
                <Card
                    head="Winner"
                    info ="">
                    <FaCrown size={150} />
                </Card>
                <Card
                    head="Loser"
                    info="">
                        <FaSadCry size={150} />
                </Card>
            </div>
            <button 
                className="lightButton moveCenter"
                style={{margin: "auto",
                    marginTop: 80}}>
                    Reset
            </button>
        </React.Fragment>
    )
}

export default Results
