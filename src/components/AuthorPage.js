import React from 'react'
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import {ThemeConsumer} from "../contexts/ThemeContext"
import {fetchUser, fetchPosts} from "../api"

export class AuthorPage extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             author: [],
             posts: [],
             error: null
        }
    }
    
    handleFetch () {
        fetchUser("est31")
          .then((data) => {
              this.setState({
                author:data,
                error: null
          })
          const somePosts = data.submitted.slice(0, 20)
          return fetchPosts(somePosts)
        })
        .then((posts)=>{
            this.setState({
                posts: posts,
                error: null
            })
        })
          .catch(({ message }) => this.setState({
            error: message,
          }, ()=>{console.warn("fetch didn't work")}))
      }

      
    componentDidMount() {
        this.handleFetch()
      }
    
    render(){
      const {id, created, karma, about} = this.state.author

      const dateObj = new Date(created * 1000)
      const utc = dateObj.toUTCString()
    return (

                        <div>
                        <Navbar />
                        <h1 className={`header moveLeft`}>{id}</h1>
                        <p className="moveLeft">{`Profile created on ${utc}, has ${karma} karma`}</p>
                        <p className="moveLeft">{about}</p>
                        <h2 className="moveLeft">Posts</h2>
                        <Container posts={this.state.posts} />}
                    </div>
    )
    }
}

export default AuthorPage
