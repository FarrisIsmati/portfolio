import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Title                from './Title'
import VerticleBar          from './VerticleBar'

import                            '../Stylesheets/CommonClasses.css'
import                            '../Stylesheets/Page.css'

class Page extends Component {
  constructor(props){
    super(props)

    this.state = {
      renderBar: false,
      titleWidth: '',
      titleHeight: '',
      divHeight: '',
    }

    this.getDivHeight = this.getDivHeight.bind(this)
    this.getTitleSize = this.getTitleSize.bind(this)
  }

  //Sets to state the height and with of title componenet
  getTitleSize(width, height) {
    width += 'px'
    this.setState({
      titleWidth: width,
      titleHeight: height
    })
  }

  //Sets to state the height of the div containing the title and child elements
  getDivHeight() {
    this.setState({divHeight: (this.refs.children.offsetHeight + this.state.titleHeight) + 'px'})
  }

  componentDidUpdate(){
    //Once component gets height/width data in state then render the bar
    if (!this.state.renderBar){
      window.addEventListener("resize", this.getDivHeight)

      this.setState({
        renderBar: true
      })
    }
  }

  componentDidMount(){
    //Set initial height of the bar
    this.setState({divHeight: this.refs.pageContainer.offsetHeight + 'px'})
  }

  render() {
    const {
      title,
      titleUnder,
      titleWidth,
      children,
      showBar,
      css,
      cssTitle,
      color
    } = this.props

    return (
      <div className={"flex " + css}>
        <div ref="pageContainer" className="flex flex-start">
          <div className={'page-title ' + cssTitle}>
            <Title color={color} getTitleSize={this.getTitleSize} title={title} titleUnder={titleUnder} />
          </div>
          <div ref="children">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  css:      PropTypes.string,
  cssTitle: PropTypes.string,
  title:    PropTypes.string,
  titleWidth:     PropTypes.string,
  children: PropTypes.node,
  showBar: PropTypes.bool
}

Page.defaultProps = {
  showBar: false,
  titleWidth: (window.innerWidth * .0917) + 'px'
}

export default Page
