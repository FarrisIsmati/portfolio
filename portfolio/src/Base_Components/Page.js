import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Title                from './Title'
import Divider              from './Divider'

class Page extends Component {
  constructor(props){
    super(props)

    this.state = {
      renderDivider: false,
      titleSize: ''
    }

    this.getTitleSize = this.getTitleSize.bind(this)
  }

  getTitleSize(size) {
    size += 'px'
    this.setState({
      titleSize: size
    })
  }

  componentDidUpdate(){
    if (!this.state.renderDivider){
      this.setState({
        renderDivider: true
      })
    }
  }

  render() {
    const {
      title,
      height,
      titleSize,
      children
    } = this.props

    const pageStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const hide = {
      display: ''
    }

    return (
      <div>
        <div style={pageStyle}>
          <Title ref="title" getTitleSize={this.getTitleSize} title={title} size={titleSize} />
          { this.state.renderDivider ?
            <Divider width={this.state.titleSize} height={height} /> :
            null
          }
          {children}
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  title:    PropTypes.string,
  height:   PropTypes.string,
  titleSize:     PropTypes.string,
  children: PropTypes.node
}

Page.defaultProps = {
  titleSize: (
    window.innerWidth / 38.1966077
  )
}

export default Page
