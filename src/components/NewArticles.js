import React, {Component} from 'react'
import ArticlePage from "./ArticlePage"
import Container from "../components/Container"
import Card from "../components/Card"
import {fetchMainPosts} from "../api"

export class NewArticles extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
         posts: null,
         error: null
        }
    }
    render(){
        const {posts, error} = this.state
    return (
            <ArticlePage>
                <Container>
                    {error !==null ? error : null}
                   {posts && <pre>{JSON.stringify(posts, null, 2)}</pre>}
                </Container>
            </ArticlePage>
    )}
}

export default NewArticles