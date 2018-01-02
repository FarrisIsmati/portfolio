import React, {Component}   from 'react'

import Page                 from '../Base_Components/Page'
import Content              from '../Base_Components/Content'

import                           '../Stylesheets/CommonClasses.css'

class Projects extends Component {
  render() {
    return (
      <div>
        <Page title={'Projects'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
          <Content data={
            {
              'You Suck at Art,': {data: 'Test1', active: true},
              'DC Foodtrucks,': {data: 'Test2', active: false},
              'Hangman': {data: 'Test3', active: false}
            }
          }/>
        </Page>
      </div>
    )
  }
}

export default Projects
