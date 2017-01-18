import React, { Component, PropTypes } from 'react'
import {addComment} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import {loadCommentsByArticleId} from '../AC'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    // componentDidMount() {
    //     this.props.loadCommentsByArticleId(this.props.article.id)
    // }

    showComments = () => {
      this.props.toggleOpen()
      if (!this.props.loaded.includes(this.props.article.id)) this.props.loadCommentsByArticleId(this.props.article.id)
    }

    render() {
      const {loading} = this.props

      const loader = loading && <Loader />
        return (
            <div>
                {this.getLink()}
                { loader }
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.showComments}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const { comments, article, isOpen, addComment } = this.props

        if (!isOpen) return null
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments[0] ? comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>) : null
        return (
            <div>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    const {entities, loading, loaded} = storeState.comments

    return {
        comments: props.article.comments.map(id => entities.get(id)),
        loading: loading,
        loaded: loaded
    }
}, { addComment, loadCommentsByArticleId })(toggleOpen(CommentList))
