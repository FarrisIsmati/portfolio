import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Title                from './Title'
import Divider              from './Divider'

class Page extends Component {
  render() {
    const {
      title,
      width,
      height,
      children
    } = this.props

    const pageStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    return (
      <div style={pageStyle}>
        <Title title={title}/>
        <Divider width={width} height={height} />
        {children}
      </div>
    )
  }
}

Page.propTypes = {
  title:    PropTypes.string,
  width:    PropTypes.string,
  height:   PropTypes.string,
  children: PropTypes.node
}

export default Page
