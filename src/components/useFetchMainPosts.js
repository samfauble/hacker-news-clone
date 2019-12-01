import React from 'react'
import {fetchMainPosts} from "../api"

export default function useFetchMainPosts(type) {
    const [posts, setPosts] = React.useState([])
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const handleFetch = ()=> {
        setIsLoading(true)
        fetchMainPosts(type)
          .then((posts) => setPosts(posts), setError(null), setIsLoading(false))
          .catch(({ message }) => setError(message), setIsLoading(false))
      }

      
    React.useEffect(()=>{
        handleFetch()
    },[type]) 
        
      
    return [posts, error, isLoading]
}
