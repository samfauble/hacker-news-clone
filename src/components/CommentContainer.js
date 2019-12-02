import React from 'react'
import CommentCard from "./CommentCard"
import {fetchComments} from "../api"

export function CommentContainer(props) {
        
        return (
            <div className="kontainer">
                {props.posts.map((post)=>(
                    <React.Fragment key={post.id}>
                        <CommentCard
                            commenter={post.by}
                            date={post.time}>
                                {post.text}
                        </CommentCard>
                    </React.Fragment>
                ))}
            </div>
        )
    }


export default CommentContainer
