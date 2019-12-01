import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "./Container"
import {fetchMainPosts} from "../api"
import Navbar from "./Navbar"
import useFetchMainPosts from "./useFetchMainPosts"

function TopArticles () {
  const [posts, error] = useFetchMainPosts("top")

    
        return (
        <React.Fragment>
          <Navbar />
           <h1 className={`header moveLeft`}>Top Articles</h1>
        <Container posts={posts}/>
        </React.Fragment>
        )

}

export default TopArticles
