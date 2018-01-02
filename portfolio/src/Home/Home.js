import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Page                 from '../Base_Components/Page'

class Home extends Component {
  render() {
    const {
      children
    } = this.props

    return (
      <Page showBar={true} title={'Hello, my name is Farris.'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
        {children}
      </Page>
    )
  }
}

Home.propTypes = {
  children: PropTypes.node
}

export default Home
