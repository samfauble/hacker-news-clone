import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "./Container"
import {fetchMainPosts} from "../api"
import Navbar from "./Navbar"
import useFetchMainPosts from "./useFetchMainPosts"
import Loading from "./Loading"

function TopArticles () {
  const [posts, error, isLoading] = useFetchMainPosts("top")

    
        return (
        <React.Fragment>
          <Navbar />
           <h1 className={`header moveLeft`}>Top Articles</h1>
           {isLoading===true && <Loading />}
        <Container posts={posts}/>
        </React.Fragment>
        )

}

export default TopArticles
