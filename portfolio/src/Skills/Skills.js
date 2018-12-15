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
              'Languages': {
                data: ['JavaScript/ES6,', 'Java'],
                active: true,
                page: 'skills'
              },
              'Frontend': {
                data: ['React,', 'Redux,', 'Backbone,', 'jQuery,', 'HTML5,','CSS3,', 'SASS'],
                active: false,
                page: 'skills'
              },
              'Backend': {
                data: ['NodeJS,','ExpressJS,','Socket.io,','MongoDB,','Redis,','MySQL'],
                active: false,
                page: 'skills'
              },

              'Other': {
                data: ['Git,', 'Unit Testing,', 'Adobe Creative Cloud'],
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
