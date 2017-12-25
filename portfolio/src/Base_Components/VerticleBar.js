import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'

import                                    '../Stylesheets/Bar.css'

class VerticleBar extends Component {
  constructor(props){
    super(props)

    this.animate = this.animate.bind(this)
    this.setupCanvas = this.setupCanvas.bind(this)
  }

  setupCanvas() {
    let canvas = this.refs.canvas
    let context = canvas.getContext("2d")
    let canvasHeight = canvas.clientHeight
    let canvasWidth = canvas.clientWidth
    // Gets need to remove the 'px' when setting lineWidth
    context.lineWidth = this.props.width.slice(0,-2)
    context.strokeStyle = this.props.color

    this.animate(context, canvasWidth, canvasHeight )
  }

  animate(context, canvasWidth, canvasHeight, newWidthBottom = canvasHeight/2, newWidthTop = canvasHeight/2, increment = canvasHeight/40){
    context.beginPath()

    //Starting Position
    context.moveTo(canvasWidth/2, canvasHeight/2)

    //Increment lines by
    increment += canvasWidth/(canvasHeight * 2)
    newWidthBottom += increment
    newWidthTop -= increment

    if (newWidthBottom < canvasHeight + 50) {
      context.lineTo(canvasWidth/2, newWidthBottom)
      context.lineTo(canvasWidth/2, newWidthTop)
      context.stroke()
      setTimeout(() => {
        this.animate(context, canvasWidth, canvasHeight, newWidthBottom, newWidthTop, increment)
      }, 17)
    }
  }

  componentDidUpdate() {
    this.setupCanvas()
  }

  componentDidMount() {
    this.setupCanvas()
  }

  render() {
    const {
      width,
      height,
      color
    } = this.props

    return(
      <div className={'verticle_bar'} ref="div">
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

VerticleBar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  lineWidth: PropTypes.number
}

VerticleBar.defaultProps = {
  width: '25px',
  height: '100%',
  color: '#c42623',
  lineWidth: 10
}

export default VerticleBar
