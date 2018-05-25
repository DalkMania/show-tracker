const initialState = {
  isFetching: false,
  searchedShowsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_SHOWS':
      return {
        ...state,
        isFetching: true
      }
    case 'SEARCH_SHOWS':
      return {
        ...state,
        isFetching: false,
        searchedShowsList : action.payload
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        searchedShowsList: []
      }
    default:
      return state
  }
}
