import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Title                from './Title'
import DividerVerticle      from './DividerVerticle'
import Divider              from './Divider'

class Page extends Component {
  constructor(props){
    super(props)

    this.state = {
      renderDivider: false,
      titleSize: '',
      titleHeight: '',
      divHeight: ''
    }

    this.getDivHeight = this.getDivHeight.bind(this)
    this.getTitleSize = this.getTitleSize.bind(this)
  }

  getTitleSize(size, height) {
    size += 'px'
    this.setState({
      titleSize: size,
      titleHeight: height
    })
  }

  getDivHeight() {
    this.setState({divHeight: (this.props.children.props.divheight + this.state.titleHeight) + 'px'})
  }

  componentDidUpdate(){
    //Updated by getting title height, then render Divider
    if (!this.state.renderDivider){
      window.addEventListener("resize", this.getDivHeight);

      this.setState({
        renderDivider: true
      })
    }
  }

  componentDidMount(){
    //Set initial height of Verticle Divider
    this.setState({divHeight: this.refs.pageContainer.offsetHeight + 'px'})
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
      alignContent: 'flex-start'
    }

    const flexStyle = {
      display: 'flex'
    }

    return (
      <div style={flexStyle} ref="pageContainer">
      { this.state.renderDivider ?
        <DividerVerticle width={'25px'} height={this.state.divHeight}/>:
        null
      }
        <div style={pageStyle}>
          <div>
            <Title ref="title" getTitleSize={this.getTitleSize} title={title} size={titleSize} />
          </div>
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
