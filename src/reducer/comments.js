import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
// import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

// const normalizedComments = new OrderedMap({})
const defaultState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

// const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (state = defaultState, action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_COMMENTS + START:
            return state.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
          console.log(response);
            return state
                .mergeIn(['entities'], arrayToMap(response, CommentModel))
                .set('loading', false)
                .set('loaded', true)
                .set('error', null)

        case LOAD_COMMENTS + FAIL:
            return state
                .set('error', error)
                .set('loading', false)
    }

    return state
}
