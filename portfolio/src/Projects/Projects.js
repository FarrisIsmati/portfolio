import React, {Component}   from 'react'

import Page                 from '../Base_Components/Page'
import Content              from '../Base_Components/Content'

import                           '../Stylesheets/CommonClasses.css'
import                           '../Stylesheets/Projects.css'
class Projects extends Component {
  render() {
    return (
      <div>
        <Page css={'projects'} cssTitle={'projects-title'} title={'Projects'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
          <Content data={
            {
              'You Suck at Art,': {
                info: 'A draw and guess game inspired by Chinese Whispers also known as telephone. One user to draw a random phrase and the next user has to guess what that drawing is. This cycle goes on depending on the number of players. A General Assembly group project by Farris Ismati, Steven Connors, & Jack Tyburski',
                github: 'https://github.com/FarrisIsmati/telestrations_online',
                projects: true,
                tech: 'React.js, Node.js, Express.js, HTML Canvas, Mongoose, & MongoDB',
                image: 'https://image.ibb.co/b5DEuw/Screen_Shot_2018_01_03_at_9_40_41_AM.png', link: 'http://yousuckatart.surge.sh/',
                active: true
              },
              'DC Foodtrucks,': {
                info: 'A concept website of a centeralized hub for all DC metro area food trucks. A General Assembly project.', projects: true,
                github: 'https://github.com/FarrisIsmati/food-truck-dc',
                tech: 'Ruby on Rails, Devise, Cancan, JQuery, Google Maps API, Punchbox, Geocoder',
                image: 'https://image.ibb.co/gzC7Ew/Screen_Shot_2018_01_03_at_9_40_25_AM.png', link: 'https://dc-food-trucks.herokuapp.com/companies',
                active: false
              },
              'Hangman': {
                info: 'A simple hangman game made as a General Assembly project.',
                projects: true,
                github: 'https://github.com/FarrisIsmati/farris-hangman',
                tech: 'jQuery, HTML5, CSS3',
                image: 'https://image.ibb.co/gxyKSG/Screen_Shot_2018_01_03_at_9_42_47_AM.png',
                link: 'https://farrisismati.github.io/farris-hangman/',
                active: false
              }
            }
          }/>
        </Page>
      </div>
    )
  }
}

export default Projects
