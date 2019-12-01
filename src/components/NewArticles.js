import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "../components/Container"
import Card from "../components/Card"
import {fetchMainPosts} from "../api"
import Navbar from "./Navbar"
import useFetchMainPosts from "./useFetchMainPosts"
import Loading from "./Loading"

export function NewArticles () {
  const [posts, error, isLoading] = useFetchMainPosts("new")

        return (
        <React.Fragment>
          <Navbar />
          <h1 className={`header moveLeft`}>New Articles</h1>
          {isLoading===true && <Loading />}
        <Container posts={posts}/>
        </React.Fragment>
        )
}

export default NewArticles