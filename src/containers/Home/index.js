import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  loginUser,
  logoutUser,
  fireBaseSync,
  addToCalendar
} from '../../actions/user'
import {
  getShowTimes,
} from '../../actions/tvmaze'
import SiteHeader from '../../components/Header'
import SiteFooter from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import ShowCard from '../../components/ShowCard'
import SnackBarToast from '../../components/SnackBar'
import MobileNav from '../../components/MobileNav'

class Home extends Component {

  componentWillReceiveProps = ( nextProps ) => {
    if(nextProps.isSyncing === true) {
      this.props.fireBaseSync()
    }
    if(nextProps.updateCollection === true) {
      this.props.getShowTimes()
    }
    if(nextProps.addCallendar === true) {
      this.props.addToCalendar()
    }
  }

render() {

    return (
      <div id="app-wrapper">
        <div className="app-site">
          <div className="site-content">
            <SiteHeader />
            <SearchBar />
            <ShowCard />
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
    isSyncing: state.user.isSyncing,
    addCallendar: state.user.addCallendar,
    updateCollection: state.user.updateCollection,
    userCollection: state.user.userCollection,
    futureEpisodes: state.user.futureEpisodes,
    events: state.user.events,
    eventCount: state.user.eventCount,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
  fireBaseSync,
  getShowTimes,
  addToCalendar,
  logoutUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
