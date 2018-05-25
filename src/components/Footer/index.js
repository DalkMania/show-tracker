import React, { Component } from 'react'
import reactlogo from '../../assets/svg/react-logo.svg'
import reduxlogo from '../../assets/svg/redux-logo.svg'
import firebaselogo from '../../assets/svg/firebase-logo.svg'

export default class SiteFooter extends Component {

  render() {
    const today = new Date();
    return (
      <footer className="footer has-background-white">
        <div className="container">
          <div className="content">
          <p className="is-pulled-left">&copy; {today.getFullYear()} Niklas Dahlqvist</p>
            <div className="field is-grouped is-grouped-right is-pulled-right is-grouped-multiline">
              <div className="control">
                <a className="tags has-addons" href="https://reactjs.org/">
                  <span className="tag">Made with React</span>
                  <span className="tag has-background-grey-darker">
                    <span className="icon">
                      <i><img className="logo" src={reactlogo} alt="React" /></i>
                    </span>
                  </span>
                </a>
              </div>
              <div className="control">
                <a className="tags has-addons" href="https://redux.js.org/">
                  <span className="tag">Made with Redux</span>
                  <span className="tag has-background-grey-lighter">
                    <span className="icon">
                      <i><img className="logo" src={reduxlogo} alt="Redux" /></i>
                    </span>
                  </span>
                </a>
              </div>
              <div className="control">
                <a className="tags has-addons" href="https://firebase.google.com/">
                  <span className="tag">Made with Firebase</span>
                  <span className="tag has-background-info">
                    <span className="icon">
                     <i><img className="logo" src={firebaselogo} alt="Firebase" /></i>
                    </span>
                  </span>
                </a>
              </div>
              <div className="control">
                <a className="tags has-addons" href="https://github.com/DalkMania/show-tracker">
                  <span className="tag">View on Github</span>
                  <span className="tag is-dark">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
