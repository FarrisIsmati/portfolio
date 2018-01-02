import React, { Component } from 'react'

import                           '../Stylesheets/CommonClasses.css'

class ActiveButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active
    }

    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    this.props.click()
    this.state.active ? this.setState({active:false}) : this.setState({active: true})
  }

  render() {
    const active = {
      'color': '#C42623'
    }

    const inactive = {
      'color': '#353535'
    }

    return (
      <div className='content-container'>
        {
          this.state.active ?
          <p style={active} onClick={this.changeState}>{this.props.properties}</p>
          :
          <p style={inactive} onClick={this.changeState}>{this.props.properties}</p>
        }
      </div>
    )
  }
}

export default ActiveButton
