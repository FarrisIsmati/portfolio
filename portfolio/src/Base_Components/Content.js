import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import                           '../Stylesheets/CommonClasses.css'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: true,
      content: this.props.data[Object.keys(this.props.data)[0]],
      buttons: this.props.data
    }

    this.showData = this.showData.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  showData(key) {
    this.setState({
      content: this.props.data[key]
    })
  }

  onClick(data, nav) {
    this.showData(data)

    let buttons = Object.assign({}, this.state.buttons)

    Object.keys(this.state.buttons).forEach((obj) => {
      if (obj != data){
        let inactiveState = Object.assign({}, buttons[obj])
        let activeState = Object.assign({}, buttons[data])
        activeState.active = true
        inactiveState.active = false
        buttons[obj] = inactiveState
        buttons[data] = activeState
        this.setState({
          buttons: buttons
        })
      }
    })
  }

  componentDidMount() {
    console.log(this.state.content.image)
  }

  render() {
    const {
      data
    } = this.props

    const active = {
      'color': '#C3073F'
    }

    const inactive = {
      'color': '#FFFFFF'
    }

    let nav = Object.keys(data).map((data,index) => {
      if (Object.values(this.state.buttons)[index].active) {
        return (
          <p style={active} key={index} onClick={() => this.onClick(data, nav)}>{data}</p>
        )
      } else {
        return (
          <p style={inactive} key={index} onClick={() => this.onClick(data, nav)}>{data}</p>
        )
      }
    })

    return (
      <div>
        <div className="flex content-container-nav">
          {nav}
        </div>

        <div className="flex flex-column content-container">
          {
            this.state.content.image ?
            <div className="img-holder">
              <a target="_blank" href={this.state.content.link}><img src={this.state.content.image}/></a>
            </div> :
            null
          }
          <div className="flex">
            {
              this.state.content.projects ?
              <div>
                <p>Built with: {this.state.content.tech}</p>
                <p>{this.state.content.info}</p>
                <a target="_blank" href={this.state.content.github}><p>Github</p></a>
              </div>




              :
              <p>{this.state.content.data }</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Content
