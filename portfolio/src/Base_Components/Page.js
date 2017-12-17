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
      window.addEventListener("resize", this.getDivHeight);

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
      height,
      titleWidth,
      children
    } = this.props


    return (
      <div className="flex flex-center page-margin" ref="pageContainer">
      { this.state.renderBar ?
        <VerticleBar width={'25px'} height={this.state.divHeight}/>:
        null
      }
        <div className="flex flex-start">
          <div>
            <Title ref="title" getTitleSize={this.getTitleSize} title={title} size={titleWidth} />
          </div>
          <div ref={"children"}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  title:    PropTypes.string,
  height:   PropTypes.string,
  titleWidth:     PropTypes.string,
  children: PropTypes.node
}

Page.defaultProps = {
  titleWidth: (window.innerWidth * .0917) + 'px'
}

export default Page
