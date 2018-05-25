import React, { Component } from 'react'
import { connect } from 'react-redux'

class PageHeader extends Component {

  render() {
    return (
      <div className="hero-body">
      {this.props.user ?
        <div className="container has-text-centered">
          <img className="avatar-image" src={this.props.user.photoURL} alt={this.props.user.displayName.split(" ")[0]} />
          <h1 className="title">Hey, {this.props.user.displayName.split(" ")[0]}</h1>
          <h2 className="subtitle">
          You have {this.props.eventCount} upcoming shows
          </h2>
        </div>
      :
        <div className="container has-text-centered">
          <h1 className="title">Welcome to ShowTracker</h1>
          <h2 className="subtitle">The digital guide to your shows. Please log in and start tracking.</h2>
        </div>
      }
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

export default connect(
  mapStateToProps,
  null
)(PageHeader)
