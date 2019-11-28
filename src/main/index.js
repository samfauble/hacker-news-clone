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
import {ThemeProvider} from "../contexts/ThemeContext"

class App extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             theme: "light",
             toggleTheme: ()=>{this.setState(({theme})=>({
                 theme: theme==="light" ? "dark" : "light"
             })
             
             )}
        }
        
    }
    
   
    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}> 
                        <div className="container">
                           {/*} <Route exact path="/" component={TopArticles} />
                            <Route exact path="/new" component={NewArticles} />
                            <Route exact path="/compare" component={CompareInstructions} />
        <Route path="/compare/results" component={Results} /> */}
                            <Comments />   
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)


