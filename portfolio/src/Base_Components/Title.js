import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class Title extends Component {
  render() {
    const {
      title,
      color,
      size
    } = this.props

    const titleStyle = {
      color: color,
      fontSize: size
    }

    return (
      <div>
        <h1 style={titleStyle} color={color}>{title}</h1>
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

Title.defaultProps = {
  color: '#444444',
  size: '4em'
}

export default Title
