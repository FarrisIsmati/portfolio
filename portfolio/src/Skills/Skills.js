import React, { Component } from 'react'

import Page                 from '../Base_Components/Page'
import Content              from '../Base_Components/Content'

import                           '../Stylesheets/CommonClasses.css'

class Skills extends Component {
  render() {
    return (
      <Page title={'Skills'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
        <div className="flex">
          <Content data={
            {
              'Frontend,': {data: 'ReactJS', active: true},
              'Backend': {data: 'NodeJS', active: false},
            }
          }/>
        </div>
      </Page>
    )
  }
}

export default Skills
