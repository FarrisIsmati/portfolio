import React, { Component } from 'react'

import Page                 from '../Base_Components/Page'


class About extends Component {
  render() {
    const aboutData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."

    const textStyle = {
      lineHeight: '.98em',
    }

    console.log((window.innerWidth * .0917) + 'px')

    return (
      <div>
        <Page title={'About'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
          <p style={textStyle}>{aboutData}</p>
        </Page>
      </div>
    )
  }
}

export default About
