import "../main/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import ArticlePage from "../components/ArticlePage"
import Comments from "../components/Comments"
import Navbar from "../components/Navbar"
import AuthorPage from "../components/AuthorPage"
import CompareInstructions from "../components/CompareInstructions"
import Results from "../components/Results"
import {BrowserRouter as Router} from "react-router-dom"

class App extends React.Component {

   
    render() {
        return (
            <Router>
                <div>
                    <ArticlePage />  
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)


