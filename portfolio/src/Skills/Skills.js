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
                data: ['JavaScript/ES6,', 'TypeScript,', 'HTML,', 'CSS,', 'SASS,', 'SQL,', 'Python, & ', 'Solidity'],
                active: true,
                page: 'skills'
              },
              'Frontend': {
                data: ['React &', 'Redux'],
                active: false,
                page: 'skills'
              },
              'Backend': {
                data: ['Node.js,','Express.js,','Socket.io,','MongoDB,','Redis,', 'RabbitMQ, &','AWS'],
                active: false,
                page: 'skills'
              },

              'Other': {
                data: ['Git,', 'Docker,', 'Unit Testing (Mocha/Chai/PyTest), &', 'AWS Solutions Architect Certified'],
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
