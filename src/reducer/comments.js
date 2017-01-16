import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap, mapToArray } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
  "id": null,
  "user": null,
  "text": null
})
//CommentModel ты описал, но не использовал
const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (state = defaultState, action) => {
  const { type, payload, response, error } = action

  switch (type) {
    case ADD_COMMENT:
      //здесь тоже стоило new CommentModel(payload) сделать
      return state.set(payload.id, payload)
  }

  return state
}
