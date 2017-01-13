import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const ArticleModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

const defaultState = arrayToMap(normalizedArticles, ArticleModel)

export default (articlesState = defaultState, action) => {
    const { type, payload, articleId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id)
        case ADD_COMMENT:
            articlesState.updateIn([articleId, 'comments'], arr => arr.push(payload.id) )
            return articlesState
    }

    return articlesState
}
