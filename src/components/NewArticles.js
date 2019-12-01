import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "../components/Container"
import Card from "../components/Card"
import {fetchMainPosts} from "../api"
import Navbar from "./Navbar"
import useFetchMainPosts from "./useFetchMainPosts"

export function NewArticles () {
  const [posts, error] = useFetchMainPosts("new")

        return (
        <React.Fragment>
          <Navbar />
          <h1 className={`header moveLeft`}>New Articles</h1>
        <Container posts={posts}/>
        </React.Fragment>
        )
}

export default NewArticles