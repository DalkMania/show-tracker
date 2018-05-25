import { auth, provider, db } from '../vendors/firebase'
import moment from 'moment'
import store from '../store'

export const loginUser = () => {
  return function (dispatch) {
    auth.signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: 'LOGIN_USER',
        payload: result.user
      })
    })
  }
}

export const logoutUser = () => {
  return function (dispatch) {
    auth.signOut()
    .then(() => {
      dispatch({
        type: 'LOGOUT_USER',
      })
    })
    store.dispatch(clearEvents())
  }
}

export const addToCalendar = () => {
  return function (dispatch, getState) {
    let state = getState()
    let eventList = [];
    const eventArray = state.user.futureEpisodes
    let eventCounter = 0
    for (let i = 0; i < eventArray.length; i++) {
      for (let j = 0; j < eventArray[i].futureEpisodes.length; j++) {
        eventList.push({
          title: eventArray[i].name,
          start: moment(eventArray[i].futureEpisodes[j].airstamp).toDate(),
          end: moment(eventArray[i].futureEpisodes[j].airstamp).add(eventArray[i].futureEpisodes[j].runtime, "m").toDate(),
          desc: eventArray[i].futureEpisodes[j].name,
        })
         eventCounter++
      }
    }
    dispatch({
      type: 'ADD_TO_CALENDAR',
      payload : {events: eventList, eventCount: eventCounter}
    })
  }
}

export const addShowToUserCollection = (show) => {
  return function (dispatch, getState) {
    let state = getState()
    const showsPickedList = state.user.userCollection

    if(state.user.user !== null) {
       const dbRef = db.ref(`usersInfo/${state.user.user.uid}`)
       let dupDetect = showsPickedList.filter(function(showsPicked) {
        return showsPicked.id === show.id
      })

      if (dupDetect.length === 0) {
        dbRef.push(show);
      }



      showsPickedList.push(show);
      //remove duplicate tv shows
      let showsPicked = showsPickedList.filter( function( item, index, self) {
        return index === self.indexOf(item);
      })
      dispatch({
        type: 'ADD_SHOW',
        payload: showsPicked
      })
      dispatch({
        type: 'DISPLAY_MESSAGE',
        payload: "Added to Your Collection"
      })

    }
  }
}

export const removeShowFromUserCollection = (index, firebaseId) => {
  return function (dispatch, getState) {
    let state = getState()
    const showRemoved = state.user.userCollection
    if(state.user.user) {
      const userId = state.user.user.uid
      const itemRef = db.ref(`usersInfo/${userId}/${firebaseId}`)
      itemRef.remove()
    }
    showRemoved.splice(index,1)
    dispatch({
      type: 'REMOVE_SHOW',
      payload: showRemoved
    })
    dispatch({
        type: 'DISPLAY_MESSAGE',
        payload: "Removed from Your Collection"
      })

    if(showRemoved.length === 0) {
      store.dispatch(clearEvents())
    }

  }
}

export const clearEvents = () => {
  return function (dispatch) {
    dispatch({
      type: 'CLEAR_EVENTS'
    })
  }

}

export const fireBaseSync = () => {
  return function (dispatch, getState) {
    let state = getState()
    db.ref('/usersInfo').on('value', (snapshot) => {
      let shows = snapshot.val();
      let firebaseUserCollection = [];
      let userId = state.user.user.uid;
      if(shows !== null) {
        for (let show in shows[`${userId}`]) {
          firebaseUserCollection.push({
            fbaseId: show,
            genres: shows[`${userId}`][show].genres,
            id: shows[`${userId}`][show].id,
            image: {"medium": shows[`${userId}`][show].image.medium },
            name: shows[`${userId}`][show].name,
            runtime: shows[`${userId}`][show].runtime,
            summary: shows[`${userId}`][show].summary,
          })
        }
      }
      dispatch({
        type: 'ADD_SHOW',
        payload: trim(firebaseUserCollection, 'id')
      })
      dispatch({
        type: 'FIREBASE_SYNC',
      })
    })
  }
}

const trim = (arr, key) => {
  let values = {};
  return arr.filter((item) => {
    let val = item[key];
    let exists = values[val];
    values[val] = true;
    return !exists;
  });
}
