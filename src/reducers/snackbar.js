const initialState = {
  message: '',
  open: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_MESSAGE':
      return {
        ...state,
        message: action.payload,
        open: true
      }
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
        open: false
      }
    default:
      return state
  }
}
