import { DELETE_ARTICLE, FILTER_BY_DATE, FILTER_BY_TITLE } from '../constants'
import { articles } from '../fixtures'
import moment from 'moment'

const defaultState = {
    articlesArray: articles,
    titleFilter: [],
    dateFilter: [null, null],
    // dateFilter: {
    //   from: null,
    //   to: null
    // }
}

export default (articlesState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {

      case DELETE_ARTICLE:
        return articlesState.filter(article => article.id !== payload.id)
        break;

      case FILTER_BY_DATE:
        const {from, to} = payload
        // const newState = Object.assign({}, articlesState)
        // newState.dateFilter.from = from
        // newState.dateFilter.to = to
        // return newState
        return Object.assign({}, articlesState, {dateFilter: [from, to]})
        break;

      case FILTER_BY_TITLE:
        return Object.assign({}, articlesState, {titleFilter: payload})
        break;
    }

    return articlesState
}
