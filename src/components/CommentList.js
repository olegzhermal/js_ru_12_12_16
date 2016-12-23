import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    state = {
      comment: "",
      author: ""
    }

    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }

    changeComment = e => {
      this.setState({[e.target.id]: e.target.value});
    }

    submitComment = () => {
      console.log(this.state);
    }

    render() {
        const {state, changeComment, submitComment} = this;
        return (
            <div>
                {this.getLink()}
                <div>
                  Comment: <input type="text" id="comment" placeholder="comment" value={state.comment} onChange={changeComment}/>
                  Author: <input type="text" id="author" placeholder="author" value={state.author} onChange={changeComment}/>
                  <button onClick={submitComment}>Submit comment</button>
                </div>
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }
}

export default toggleOpen(CommentList)
