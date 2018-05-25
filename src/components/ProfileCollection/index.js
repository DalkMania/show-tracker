import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  removeShowFromUserCollection
} from '../../actions/user'
import SearchBar from '../../components/SearchBar'
import ShowCard from '../../components/ShowCard'

class CollectionCard extends Component {

  render() {
    return (
      <div className='container has-margin'>
      {this.props.userCollection.length > 0 ?
        <div className="columns is-multiline">
          {this.props.userCollection.map((show,index) => {
            return (
              <div className="column is-3" key={`showId-${index}`}>
              <div className="card card-equal-height">
                <div className="card-content no-padding">
                  <div className="content">
                    <img src={show.image.medium} alt={show.name}/>
                    <h4>{show.name}</h4>
                  </div>
                </div>
                <footer className="card-footer">
                  <a onClick={() => this.props.removeShowFromUserCollection(index,show.fbaseId)} className="card-footer-item">Remove From Collection</a>
                </footer>
              </div>
            </div>
            )
          })}
            </div>
            : <div className="noShows has-text-centered">
            <h1>Your Collection is Empty.</h1>
            <p>Use the searchbar to find TV shows.</p>
            <SearchBar />
            <ShowCard />
            </div>}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  removeShowFromUserCollection,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionCard)
