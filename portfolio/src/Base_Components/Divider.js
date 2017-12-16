import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'

class Divider extends Component {
  constructor(props){
    super(props)

    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    let canvas = this.refs.canvas
    let context = canvas.getContext("2d")
    let canvasHeight = canvas.clientHeight
    let canvasWidth = canvas.clientWidth

    context.lineJoin = "miter"

    // Gets need to remove the 'px' when setting lineWidth
    context.lineWidth = this.props.height.slice(0,-2)
    context.strokeStyle = this.props.color

    this.animate(context, canvasWidth, canvasHeight )
  }

  animate(context, canvasWidth, canvasHeight, newWidthRight = canvasWidth/2, newWidthLeft = canvasWidth/2, increment = canvasWidth/400){
    context.beginPath()
    //Starting Position
    context.moveTo(Math.floor(canvasWidth/2), (Math.floor(canvasHeight/2)))

    //Increment left and right lines by
    increment += canvasWidth/(canvasWidth * 7)
    newWidthRight += increment
    newWidthLeft -= increment

    if (newWidthRight < canvasWidth) {
      context.lineTo(newWidthRight, (Math.floor(canvasHeight/2)))
      context.lineTo(newWidthLeft, (Math.floor(canvasHeight/2)))
      context.stroke()
      setTimeout(() => {
        this.animate(context, canvasWidth, canvasHeight, newWidthRight, newWidthLeft, increment)
      }, 17)
    }
  }

  render() {
    const {
      width,
      height,
      color
    } = this.props

    return(
      <div>
        <canvas
          ref="canvas"
          width={width}
          height={height}
          color={color}
          />
      </div>
    )
  }
}

Divider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  lineWidth: PropTypes.number
}

Divider.defaultProps = {
  width: '100%',
  height: '50px',
  color: '#444444',
  lineWidth: 10
}

export default Divider
