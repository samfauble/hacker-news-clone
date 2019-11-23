import "../main/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import ArticlePage from "../components/ArticlePage"
import Comments from "../components/Comments"
import Navbar from "../components/Navbar"
import AuthorPage from "../components/AuthorPage"
import TopArticles from "../components/TopArticles"
import NewArticles from "../components/NewArticles"
import CompareInstructions from "../components/CompareInstructions"
import Results from "../components/Results"
import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends React.Component {

   
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={TopArticles} />
                    <Route  path="/new" component={NewArticles} />
                    <Route exact path="/compare" component={CompareInstructions} />
                    <Route path="/compare/results" component={Results} />   
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)


