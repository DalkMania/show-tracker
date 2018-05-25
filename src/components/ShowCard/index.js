import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loginUser,
  addShowToUserCollection,
} from '../../actions/user'


class ShowCard extends Component {

  render() {
    return (
      <div className='container'>
      {this.props.searchedShowsList &&
        <div className="columns is-multiline">
          {this.props.searchedShowsList.map((show,index) => {
            return (
              <div className="column is-3" key={`showId-${index}`}>
              <div className="card card-equal-height">
                <div className="card-content no-padding">
                  <div className="content">
                    <img src={show.show.image.medium} alt={show.show.name}/>
                    <h4>{show.show.name}</h4>
                  </div>
                </div>
                {this.props.user ?
                <footer className="card-footer">
                  <a onClick={() => this.props.addShowToUserCollection(show.show)} className="card-footer-item">Add to Collection</a>
                </footer>
                :
                <footer className="card-footer">
                  <a onClick={this.props.loginUser} className="card-footer-item">Login to Add to Your Collection</a>
                </footer>
              }
              </div>
            </div>
            )
          })}
            </div>}

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

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
  addShowToUserCollection
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCard)
