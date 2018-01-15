import React, { Component } from 'react'

import Page                 from '../Base_Components/Page'
import Content              from '../Base_Components/Content'

import                           '../Stylesheets/CommonClasses.css'
import                           '../Stylesheets/Skills.css'

class Skills extends Component {
  render() {
    return (
      <Page css={'skills'} cssTitle={'skills-title'} title={'Skills'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
        <div className="flex">
          <Content data={
            {
              'Frontend,': {
                data: ['ReactJS,', 'JavaScript/ES6,', 'HTML5,','CSS3,','jQuery'],
                active: true,
                page: 'skills'
              },
              'Backend,': {
                data: ['NodeJS,','ExpressJS,','MongoDB,','SQL'],
                active: false,
                page: 'skills'
              },
              'General,': {
                data: ['Git/Github,', 'Object Oriented Programming,', 'MVC Design Pattern'],
                active: false,
                page: 'skills'
              },
              'Other': {
                data: ['Adobe Creative Cloud'],
                active: false,
                page: 'skills'
              }
            }
          }/>
        </div>
      </Page>
    )
  }
}

export default Skills
