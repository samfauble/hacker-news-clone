import React from 'react'
import {fetchMainPosts} from "../api"

export default function useFetchMainPosts(type) {
    const [posts, setPosts] = React.useState([])
    const [error, setError] = React.useState(null)

    const handleFetch = ()=> {
        fetchMainPosts(type)
          .then((posts) => setPosts(posts), setError(null))
          .catch(({ message }) => setError(message))
      }

      
    React.useEffect(()=>{
        handleFetch()
    },[]) 
        
      
    return [posts, error]
}
