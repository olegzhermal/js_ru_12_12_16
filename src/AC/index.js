import { INCREMENT, DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function addComment(commentInfo, articleId) {
  return {
    type: ADD_COMMENT,
    payload: commentInfo,
    articleId: articleId
  }
}
