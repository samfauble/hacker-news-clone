import React from 'react'
import Container from "../components/Container"
import Navbar from "./Navbar"
import {ThemeConsumer} from "../contexts/ThemeContext"
import {fetchItem, fetchComments} from "../api"
import CommentContainer from "./CommentContainer"


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
        fetchItem(21657504)
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
        const {by, time, title, descendants} = post
        console.log(comments)
     return (
        <ThemeConsumer>
            {({theme})=>(
                <div>
                    <Navbar />
                    <h1 className={`${theme}header moveLeft`}>{title}</h1>
                    <p className="moveLeft">{`by ${by} on ${time} with ${descendants} comments`}</p>
                    <CommentContainer posts={comments} />
                </div>
            )}

        </ThemeConsumer>
    )
            }
}

export default Comments
