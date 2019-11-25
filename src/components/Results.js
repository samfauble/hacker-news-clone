import React from 'react'
import {Link} from "react-router-dom"
import {FaCrown, FaSadCry} from "react-icons/fa"
import Card from "./Card"
import Navbar from "./Navbar"
import {ThemeConsumer} from "../contexts/ThemeContext"

function Results(props) {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <React.Fragment>
                    <Navbar />
                    <h1 className={`${theme}Header moveCenter`}>Results</h1>
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
                    <Link
                    to="/compare" 
                    className={`${theme}Button moveCenter`}
                    style={{margin: "auto",
                    marginTop: 80}}>
                        Reset
                    </Link>
                </React.Fragment>
            )}
        
        </ThemeConsumer>
    )
}

export default Results
