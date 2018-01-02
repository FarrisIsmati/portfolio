import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import ActiveButton         from './ActiveButton'

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
  }

  componentDidMount() {
    console.log(this.state.buttons)
  }

  //<ActiveButton active={true} key={index} properties={data} click={() => this.onClick(data, nav)}/>
  render() {
    const {
      data
    } = this.props

    const active = {
      'color': '#C42623'
    }

    const inactive = {
      'color': '#353535'
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
        <div className="flex content-container">
          {nav}
        </div>

        <div>
          <p>{this.state.content.data}</p>
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  data: PropTypes.object
}

export default Content
