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
              'You Suck at Art,': {data: ['A telestrations inspired game built using React, Node, and MongoDB'], image: 'https://image.ibb.co/b5DEuw/Screen_Shot_2018_01_03_at_9_40_41_AM.png', link: 'http://yousuckatart.surge.sh/', active: true},
              'DC Foodtrucks,': {data: ['A concept for a new DC Foodtruck tracking site built using Ruby on Rails'], image: 'https://image.ibb.co/gzC7Ew/Screen_Shot_2018_01_03_at_9_40_25_AM.png', link: 'https://dc-food-trucks.herokuapp.com/companies', active: false},
              'Hangman': {data: ['A simple hangman game built using jQuery'], image: 'https://image.ibb.co/gxyKSG/Screen_Shot_2018_01_03_at_9_42_47_AM.png', link: 'https://farrisismati.github.io/farris-hangman/', active: false}
            }
          }/>
        </Page>
      </div>
    )
  }
}

export default Projects
