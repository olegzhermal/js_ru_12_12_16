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
            //вот тут очень плохо. Во-первых push мутирует массив, во-вторых articlesState.updateIn создает новый объект, который тут-же чистится GC, его нужно возвращать. твой код работает благодаря прошлой ошибке
            articlesState.updateIn([articleId, 'comments'], arr => arr.push(payload.id) )
            return articlesState
    }

    return articlesState
}
