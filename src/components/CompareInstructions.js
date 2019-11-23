import React from 'react'
import Navbar from "./Navbar"
import Card from "./Card"
import {FaUserFriends, FaAward, FaCheckCircle} from "react-icons/fa"


export class CompareInstructions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="header moveCenter">Instructions</h1>
                <div className="instructions spaceAround">
                    <Card 
                        head="Pick Two People"
                        info="">
                            <FaUserFriends size={150}/>
                        </Card>
                    <Card 
                        head="Compare them"
                        info="">
                           <FaCheckCircle size={150}/> 
                        </Card>
                    <Card 
                        head="See the results"
                        info="">
                            <FaAward size={150}/> 
                        </Card>
                </div>
                <div className="input">
                    <input 
                        type="text" 
                        name="Player1" 
                        placeholder="Player 1 username" />
                    <button className="lightButton">Enter</button>
                    <input 
                        type="text" 
                        name="Player2" 
                        placeholder="Player 2 username" />
                    <button className="lightButton">Enter</button>
            
                </div>
                <button
                style={{margin: "auto"}}
                className="moveCenter lightButton">Compare</button>
                
            </React.Fragment>
        )
    }
}

export default CompareInstructions
