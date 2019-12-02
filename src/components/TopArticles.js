import React from 'react'
import Container from "./Container"
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
                  {error!==null & posts===null ? <h2>{error}</h2> : <Container posts={posts} />}
                  
                </React.Fragment>
            )}
        </ThemeConsumer>
        )

}

export default TopArticles
