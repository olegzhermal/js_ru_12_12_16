import React, { PropTypes }  from 'react'

function Comment(props) {
    // Question to you Roma, why 'this' here is undefined?
    const { comment: { text, user } } = props
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}

// Question to you Roma, can we write it somewhere inside the Comment function?
Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment
