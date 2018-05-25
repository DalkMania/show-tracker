import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  searchShows
} from '../../actions/tvmaze'

class SearchBar extends Component {

  handleSearch(e) {
    e.preventDefault()
    const input = document.querySelector('.search-input')
    const value = input.value
    this.props.searchShows(value)
    input.value = ''
  }

  render() {
    return (
      <div className='container landing-container'>
        <div className='columns is-mobile box search-box'>
          <div className='column is-10 is-paddingless'>
            <form className='search-block' onSubmit={(evt) => this.handleSearch(evt)}>
              <label className='search-label label'>
                <span>Search</span>
              </label>
              <input className='search-input home-input' placeholder='Search TV Shows' type='search' />
            </form>
          </div>
          <div className='column is-2 is-paddingless'>
            <a onClick={(evt) => this.handleSearch(evt)} className='button is-info is-large search-button'>Search</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchedShowsList: state.tvmaze.searchedShowsList,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
searchShows
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
