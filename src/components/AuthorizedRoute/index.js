import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthorizedRoute extends Component {

  render() {
    const { component: Component, isLoggedIn, ...rest } = this.props

    return (
      <Route {...rest} render={props => {
        return isLoggedIn
          ? <Component {...props} />
          : <Redirect to="/" />
      }} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}

export default connect(mapStateToProps)(AuthorizedRoute)
