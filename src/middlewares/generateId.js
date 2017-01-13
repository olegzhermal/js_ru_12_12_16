export default store => next => action => {
  if (action.type === 'ADD_COMMENT') {
    action.payload.id = generate(20)
  }

  next(action)
}

function generate(numberOfSymbols) {
  let text = ""
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < numberOfSymbols; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
