import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { connect } from 'react-redux'
import "react-big-calendar/lib/css/react-big-calendar.css"

BigCalendar.momentLocalizer(moment)


class Calendar extends Component {
  componentDidMount () {

  }

  render() {
    return (
      <div className='container landing-container'>
        <BigCalendar
            events={this.props.events}
            step={15}
            timeslots={8}
            views={['month', 'week', 'day']}
            defaultView="month"
            defaultDate={new Date(moment())}
            style={{ height: "100vh" }}
        />
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    searchedShowsList: state.tvmaze.searchedShowsList,
    user: state.user.user,
    userCollection: state.user.userCollection,
    futureEpisodes: state.user.futureEpisodes,
    events: state.user.events,
    eventCount: state.user.eventCount,

  }
}

export default connect(
  mapStateToProps,
  null
)(Calendar)
