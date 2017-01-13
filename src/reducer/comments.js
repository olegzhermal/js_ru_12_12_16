import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap, mapToArray } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
  "id": null,
  "user": null,
  "text": null
})

const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (state = defaultState, action) => {
  const { type, payload, response, error } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(payload.id, payload)
  }

  return state
}
