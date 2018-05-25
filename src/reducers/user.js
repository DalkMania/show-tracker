const initialState = {
  user: null,
  isLoggedIn: false,
  isSyncing: false,
  addCallendar: false,
  updateCollection: false,
  userCollection: [],
  futureEpisodes: [],
  events: [],
  eventCount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
     case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isSyncing: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        isSyncing: false,
        updateCollection: false,
        userCollection: [],
        futureEpisodes: [],
        events: [],
        eventCount: 0
      }
    case 'FIREBASE_SYNC':
      return {
         ...state,
         addCallendar: true,
         isSyncing: false,
         updateCollection: false
      }
    case 'STORE_SHOWTIMES':
      return {
        ...state,
        updateCollection: false,
        addCallendar: false,
        isSyncing: true,
        futureEpisodes: action.payload,
      }
    case 'ADD_TO_CALENDAR':
      return {
        ...state,
        addCallendar: false,
        updateCollection: false,
        isSyncing: false,
        events: action.payload.events,
        eventCount: action.payload.eventCount
      }
    case 'ADD_SHOW':
      return {
        ...state,
        isSyncing: true,
        updateCollection: true,
        userCollection: action.payload
      }
    case 'REMOVE_SHOW':
      return {
        ...state,
        isSyncing: true,
        updateCollection: true,
        userCollection: action.payload,
      }
    case 'CLEAR_EVENTS':
      return {
        ...state,
        userCollection: [],
        futureEpisodes: [],
        events: [],
        eventCount: 0,
        isSyncing: false,
        addCallendar: false,
        updateCollection: false
      }
    default:
      return state
  }
}
