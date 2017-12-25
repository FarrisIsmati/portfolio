import React, { Component } from 'react'

import Page from '../Base_Components/Page'


class Skills extends Component {
  render() {
    return (
      <Page title={'Skills'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
        <p>Frontend</p>
        <p>JavaScript/ES6</p>
        <p>Reactjs</p>
        <p>jQuery</p>
        <p>SASS</p>
        <p>Backend</p>
        <p>Nodejs</p>
        <p>Expressjs</p>
        <p>Ruby on Rails</p>
      </Page>
    )
  }
}

export default Skills
