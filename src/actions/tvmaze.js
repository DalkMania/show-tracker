import moment from 'moment'
const TVMaze = require('tvmaze')
const client = new TVMaze()


export const searchShows = ( name ) => {
  return function (dispatch) {
    dispatch({
      type: 'FETCHING_SHOWS'
    })
    client.findShow(name)
    .then((body) => {
      //filter out tv shows with no posters
      let showsWithPoster= [];
      for (let i = 0; i < body.length; i++) {
        if (body[i].show.image) {
          body[i].show.image.original = body[i].show.image.original.replace(/^http:\/\//i, 'https://');
          body[i].show.image.medium = body[i].show.image.medium.replace(/^http:\/\//i, 'https://');
          showsWithPoster.push(body[i]);
        }
      }
      dispatch({
        type: 'SEARCH_SHOWS',
        payload : showsWithPoster
      })

    })
  }
}

export const getShowTimes = () => {
  return function (dispatch, getState) {
    let state = getState()
    const showTimesArray = state.user.userCollection
    const showTimesInfo = []
    for (let i = 0; i < showTimesArray.length; i++) {
      client
      .getEpisodes(showTimesArray[i].id)
      .then((body) => {
        //Gets only future episodes from todays date
        let futureEpisodeTime = body.filter((episode) => {
          return moment(episode.airstamp).diff(moment()) > 0
        })
        //Only puts shows with future episodes into calendar
        if (futureEpisodeTime.length > 0) {
          showTimesInfo.push({
            id: showTimesArray[i].id,
            name: showTimesArray[i].name,
            futureEpisodes: futureEpisodeTime
          })
        }
        dispatch({
          type: 'STORE_SHOWTIMES',
          payload : showTimesInfo
        })
      })
    }
  }
}
