import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import                           '../Stylesheets/CommonClasses.css'
import                           '../Stylesheets/Contact.css'
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: true,
      content: this.props.data[Object.keys(this.props.data)[0]],
      buttons: this.props.data
    }
    console.log(this.state.content.data)
    console.log(this.props)
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

    let skills = this.state.content.data ? this.state.content.data.map((data, index) => {
      return (
        <p key={index} className="skill">{data}</p>
      )
    }) : null

    return (
      <div>
        <div className="flex flex-wrap content-container-nav">
          {nav}
        </div>

        <div className="flex flex-column content-container">
          <div className="flex">
            {
              this.state.content.projects ?
              <div>
                <p className="content-tech">{this.state.content.tech}</p>
                <p className="content-info">{this.state.content.info}</p>
                <div className="flex project-link-holder">
                  { this.state.content.link ?
                    <div className="flex">
                      <a className="a-tag" target="_blank" href={this.state.content.link}><p className="link">Site</p></a>
                      <div className="border"></div>
                    </div> :
                    null
                  }
                  { this.state.content.backend ?
                    <div className="flex code-link-holder">
                      <a className="a-tag" target="_blank" href={this.state.content.github}><p className="link">Frontend Code</p></a>
                      <div className="border"></div>
                      <a className="a-tag" target="_blank" href={this.state.content.backend}><p className="link">Backend Code</p></a>
                    </div>
                    :
                    <a className="a-tag" target="_blank" href={this.state.content.github}><p className="link">Code</p></a>
                  }
                </div>
              </div>
              :
              <div className="flex flex-wrap skills-container">
                {this.state.content.data ? skills:null}
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Content
