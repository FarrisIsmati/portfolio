import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class Title extends Component {
  componentDidMount() {
    this.props.getTitleSize(this.refs.title.offsetWidth, this.refs.title.offsetHeight)
  }

  render() {
    const {
      title,
      titleUnder,
      color,
      size
    } = this.props

    const titleStyle = {
      color: color,
      fontSize: '4em',
      margin: 0,
      display: 'inline-block'
    }

    return (
      <div>
        <h1 ref="title" style={titleStyle} color={color}>{title}</h1>
        { titleUnder ? <h1 style={titleStyle} color={color}>{titleUnder}</h1>:null }
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Title
