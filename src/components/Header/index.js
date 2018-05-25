import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loginUser,
  logoutUser,
} from '../../actions/user'
import PageHeader from '../PageHeader'

class SiteHeader extends Component {

  render() {
     const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
          <Link className={ match ? 'navbar-item is-active' : 'navbar-item'} to={to}>{label}</Link>
      )}/>
    )
    return (
     <section className="hero is-medium is-info is-bold">
      <div className="hero-head">
        <nav className="navbar is-transparent" aria-label="main navigation">
          <div className="navbar-brand">
          <Link className="navbar-item" to="/"><span>Show<strong>Tracker</strong></span></Link>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
              {this.props.user ?
              <div className="navbar-end">
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/about" label="About"/>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/collection" label="Collection"/>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/calendar" label="Calendar"/>
                <a className="navbar-item" onClick={this.props.logoutUser}>Log Out</a>
              </div>
              :
              <div className="navbar-end">
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/about" label="About"/>
                <a className="navbar-item" onClick={this.props.loginUser}>Log In</a>
              </div>
              }
            </div>
        </nav>
      </div>
      <PageHeader />
     </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userCollection: state.user.userCollection,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
  logoutUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteHeader)
