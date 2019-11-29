import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "./Container"
import {fetchMainPosts} from "../api"

class TopArticles extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
         posts: [],
         error: null
        }
    }

        handleFetch () {
    
        fetchMainPosts("top")
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

export default TopArticles
