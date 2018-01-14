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
              'Frontend,': {
                data: ['ReactJS','JavaScript/ES6', 'HTML5','CSS3','jQuery'],
                active: true
              },
              'Backend,': {
                data: ['NodeJS','ExpressJS','MongoDB','PostGres SQL'],
                active: false
              },
              'General,': {
                data: ['Git/Github', 'Object Oriented Programming', 'MVC Design Pattern'],
                active: false
              },
              'Other': {
                data: ['Adobe Creative Cloud'],
                active: false
              }
            }
          }/>
        </div>
      </Page>
    )
  }
}

export default Skills
