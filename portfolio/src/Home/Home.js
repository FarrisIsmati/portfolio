import React, { Component } from 'react'
import Page                 from '../Base_Components/Page'

class Home extends Component {
  render() {
    return (
      <Page title={'Hello friend, I\'m Farris.'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
        <p>Projects</p>
        <p>Skills</p>
        <p>About</p>
      </Page>
    )
  }
}

export default Home
