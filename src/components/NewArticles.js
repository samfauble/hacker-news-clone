import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "../components/Container"
import Card from "../components/Card"
import {fetchMainPosts} from "../api"

export class NewArticles extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
         posts: [],
         error: null
        }
    }

        handleFetch () {
    
        fetchMainPosts("new")
          .then((posts) => this.setState({
            posts,
            error: null
          }))
          .catch(({ message }) => this.setState({
            error: message,
          }, ()=>{console.warn("fetch didn't work")}))
      }

      
    componentDidMount() {
        this.handleFetch()
      }

    render(){
        const {posts, error} = this.state
    
        return (
        <React.Fragment>
        <ArticlePage>
        <Container posts={posts}/>
        </ArticlePage>
        </React.Fragment>
        )
    }
}

export default NewArticles