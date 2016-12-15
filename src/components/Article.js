import React, {Component} from 'react'
import Comments from './Comments'

export default class Article extends Component {
  state = {
    isOpen: false,
    commentsAreOpen: false
  }

  /*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/

  render() {
    const {article} = this.props
    console.log(article);
    const {toggleOpen, toggleComments, getBody, getCommentsList} = this

    return (
      <div>
        <h3 onClick={toggleOpen}>{article.title}</h3>
        {getBody()}
        <button onClick={toggleComments}>Show comments</button>
        {getCommentsList()}
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleComments = () => {
    this.setState({
      commentsAreOpen: !this.state.commentsAreOpen
    })
  }

  getCommentsList = () => {
    if (!this.state.commentsAreOpen) return null
    return <Comments comments={this.props.article.comments}/>
  }

  getBody = () => {
    if (!this.state.isOpen)
      return null
    return (
      <section>
        {this.props.article.text}
      </section>
    )
  }

}
