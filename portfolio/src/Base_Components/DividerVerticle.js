import React, { Component }         from 'react'
import PropTypes                    from 'prop-types'

import '../Stylesheets/Divider.css'

class DividerVerticle extends Component {
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

  componentDidUpdate() {
    this.setupCanvas()
  }

  componentDidMount() {
    this.setupCanvas()
  }

  animate(context, canvasWidth, canvasHeight, newWidthBottom = canvasHeight/2, newWidthTop = canvasHeight/2, increment = canvasHeight/40){
    context.beginPath()
    //Starting Position
    context.moveTo(canvasWidth/2, canvasHeight/2)
    console.log(canvasHeight/2)

    //Increment line by
    increment += canvasWidth/(canvasHeight * 2)
    newWidthBottom += increment
    newWidthTop -= increment

    if (newWidthBottom < canvasHeight) {
      context.lineTo(canvasWidth/2,newWidthBottom)
      context.lineTo(canvasWidth/2,newWidthTop)
      context.stroke()
      setTimeout(() => {
        this.animate(context, canvasWidth, canvasHeight, newWidthBottom, newWidthTop, increment)
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
      <div className={'divider_verticle'} ref="div">
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

DividerVerticle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  lineWidth: PropTypes.number
}

DividerVerticle.defaultProps = {
  width: '25px',
  height: '100%',
  color: '#c42623',
  lineWidth: 10
}

export default DividerVerticle
