import React from 'react'
import Container from "../components/Container"
import Navbar from "./Navbar"
import {ThemeConsumer} from "../contexts/ThemeContext"
import {fetchItem, fetchComments} from "../api"
import {Link} from "react-router-dom"
import CommentContainer from "./CommentContainer"
import queryString from "query-string"


class Comments extends React.Component {
   
    constructor(props) {
        super(props)

        this.state = {
         post: [],
         comments: [],
         error: null
        }
    }

      
    componentDidMount() {
        
        const {id} = queryString.parse(this.props.location.search)
        

        fetchItem(id)
        .then((post) => {
            this.setState({post: post})
          return fetchComments(post.kids)
        })
        .then((comments) => this.setState({
          comments: comments,
        }),()=>console.log(this.state.posts))
        .catch(({ message }) => this.setState({
          error: message,
        }))

      }



    render() {
        const {post, error, comments} = this.state
        const {id, by, time, title, descendants} = post

        const byLink= <Link to={`/user?id=${by}`}>{by}</Link>
        const commentLink = <Link to={`/post?id=${id}`}>{descendants}</Link>

        console.log(comments)
     return (
        <ThemeConsumer>
            {({theme})=>(
                <div>
                    <Navbar />
                    <h1 className={`${theme}header moveLeft`}>{title}</h1>
                    <p className="moveLeft">{<span>by {byLink} on {time} with {commentLink} comments</span>}</p>
                    <CommentContainer posts={comments} />
                </div>
            )}

        </ThemeConsumer>
    )
            }
}

export default Comments
