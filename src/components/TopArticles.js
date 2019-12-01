import React from 'react'
import ArticlePage from "./ArticlePage"
import Container from "./Container"
import {fetchMainPosts} from "../api"
import Navbar from "./Navbar"
import useFetchMainPosts from "./useFetchMainPosts"
import Loading from "./Loading"
import {ThemeConsumer} from "../contexts/ThemeContext"

function TopArticles () {
  const [posts, error, isLoading] = useFetchMainPosts("top")

    
        return (
          <ThemeConsumer>
            {({theme})=>(
                <React.Fragment>
                  <Navbar />
                  <h1 className={`${theme}header moveLeft`}>Top Articles</h1>
                  {isLoading===true && <Loading />}
                  <Container posts={posts}/>
                </React.Fragment>
            )}
        </ThemeConsumer>
        )

}

export default TopArticles
