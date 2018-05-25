export const displayMessage = ( message ) => {
  return function (dispatch) {
    dispatch({
      type: 'DISPLAY_MESSAGE',
      payload : message
    })
  }
}

export const clearMessage = ( ) => {
  return function (dispatch) {
    dispatch({
      type: 'CLEAR_MESSAGE',
    })
  }
}
