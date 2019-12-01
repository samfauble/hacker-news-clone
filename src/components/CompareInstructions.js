import React from 'react'
import Navbar from "./Navbar"
import Card from "./Card"
import {Link} from "react-router-dom"
import {FaUserFriends, FaAward, FaCheckCircle} from "react-icons/fa"
import {ThemeConsumer} from "../contexts/ThemeContext"


export class CompareInstructions extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             playerOne: "",
             playerTwo: ""
        }
    }
    

    render() {
        return (
            <ThemeConsumer>
                {({theme})=>(
                    <React.Fragment>
                    <Navbar />
                    <h1 className={`${theme}header moveCenter`}>Instructions</h1>
                    <div className="instructions spaceAround">
                        <Card 
                            head="Pick Two Users"
                            info="">
                                <FaUserFriends size={150} color="#3CA8E5"/>
                            </Card>
                        <Card 
                            head="Compare them"
                            info="">
                               <FaCheckCircle size={150} color="4663FB"/> 
                            </Card>
                        <Card 
                            head="See the results"
                            info="">
                                <FaAward size={150} color="5A21FB"/> 
                            </Card>
                    </div>
                    <div className="input">
                        <input 
                            type="text" 
                            name="Player1" 
                            placeholder="Player 1 username" />
                        <button className={`${theme}Button`}>Enter</button>
                        <input 
                            type="text" 
                            name="Player2" 
                            placeholder="Player 2 username" />
                        <button 
                            className={`${theme}Button`}
                            htmlFor="Player2">Enter</button>
                
                    </div>
                    <Link
                    to="/compare/results"
                    style={{margin: "auto"}}
                    className={`moveCenter noUnderline ${theme}Button`}>
                        Compare
                    </Link>
                    
                </React.Fragment>
                )}
            
            </ThemeConsumer>
        )
    }
}

export default CompareInstructions
