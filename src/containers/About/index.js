import React from 'react'
import SiteHeader from '../../components/Header'
import SiteFooter from '../../components/Footer'
import SnackBarToast from '../../components/SnackBar'
import MobileNav from '../../components/MobileNav'

export default () => (
    <div id="app-wrapper">
        <div className="app-site">
          <div className="site-content">
            <SiteHeader />
            <div className="container landing-container">
                <div className="content has-text-centered">
                    <h1>About This Demo</h1>
                    <p>This is my final project from a Javascript course that I took a while back.</p>
                    <p>It's a simple TV show tracker. Built with React, Redux & Firebase. Login in and give it a go.</p>
                </div>
              </div>
          </div>
          <SiteFooter />
          <SnackBarToast />
        </div>
        <MobileNav />
      </div>

)
