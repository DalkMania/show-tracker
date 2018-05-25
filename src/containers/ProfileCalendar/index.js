import React, { Component } from 'react'
import { connect } from 'react-redux'
import SiteHeader from '../../components/Header'
import SiteFooter from '../../components/Footer'
import Calendar from '../../components/Calendar'
import SnackBarToast from '../../components/SnackBar'
import MobileNav from '../../components/MobileNav'


class ProfileCalendar extends Component {


  render() {
    return (
      <div id="app-wrapper">
        <div className="app-site">
          <div className="site-content">
            <SiteHeader />
            <Calendar />
          </div>
          <SiteFooter />
          <SnackBarToast />
        </div>
        <MobileNav />
      </div>
    )
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLoggedIn: state.user.isLoggedIn,
    userCollection: state.user.userCollection,
    futureEpisodes: state.user.futureEpisodes,
    events: state.user.events,
    eventCount: state.user.eventCount,
  }
}


export default connect(
  mapStateToProps,
  null,
)(ProfileCalendar)
