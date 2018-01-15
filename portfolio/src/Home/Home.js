import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Page                 from '../Base_Components/Page'

import '../Stylesheets/Home.css'

class Home extends Component {
  render() {
    const {
      children
    } = this.props

    return (
      <Page css={'home'} title={'Farris Ismati,'} titleUnder={'Web Developer'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
        {children}
      </Page>
    )
  }
}

Home.propTypes = {
  children: PropTypes.node
}

export default Home
