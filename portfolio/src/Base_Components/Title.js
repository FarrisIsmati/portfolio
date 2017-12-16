import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class Title extends Component {
  componentDidMount() {
    this.props.getTitleSize(this.refs.title.offsetWidth)
  }

  render() {
    const {
      title,
      color,
      size
    } = this.props

    const titleStyle = {
      color: color,
      fontSize: size,
      margin: 0
    }

    return (
      <div>
        <h1 ref="title" style={titleStyle} color={color}>{title}</h1>
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
