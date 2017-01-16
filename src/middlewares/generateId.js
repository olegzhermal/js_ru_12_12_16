export default store => next => action => {
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
  if (action.type === 'ADD_COMMENT') {
    //и лучше не мутировать payload, мало-ли что там станут передавать
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
