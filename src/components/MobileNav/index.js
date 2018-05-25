import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Slideout from 'slideout'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loginUser,
  logoutUser,
} from '../../actions/user'

class MobileNav extends Component {
  componentDidMount () {
    const slideout = new Slideout({
      'panel': document.querySelector('.app-site'),
      'menu': document.getElementById('mobile-menu'),
      'padding': 256,
      'tolerance': 70
    })

    document.querySelector('.navbar-burger').addEventListener('click', function() {
      slideout.open()
    })

    document.querySelector('#mobile-menu').addEventListener('click', function() {
      slideout.close()
    })

  }

  render() {
    const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
          <Link className={ match ? 'navbar-item is-active' : 'navbar-item'} to={to}>{label}</Link>
      )}/>
    )
    return (
      <nav id="mobile-menu">
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
      </nav>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
  logoutUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNav)
