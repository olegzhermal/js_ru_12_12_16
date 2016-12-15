import React from 'react'
import Comment from './Comment.jsx'

export default function CommentsList(props) {

console.log(props);

const comments = getComments(props.comments)

    return (
        <ul>
          {comments}
        </ul>
    )
}

function getComments(commentsData) {
  if (!commentsData) return "No comments!"
  else return commentsData.map( comment => <Comment key={comment.id} text={comment.text} user={comment.user}/>)
}
