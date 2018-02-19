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
              '@#%! Where Is It?,': {
                info: 'A map based game where you have to find a location by asking yes/no questions. The application is being built with React and Redux on the front end. Mapbox GL API powers the map and Node, Express, Mongo and Websocket powers the back end. The entire application is being designed and developed by me. Follow my progress on github.',
                projects: true,
                github: 'https://github.com/FarrisIsmati/mapbox-app-react',
                backend: 'https://github.com/FarrisIsmati/mapbox-app-node',
                tech: 'React.js, Redux.js, Socket.io, Node.js, Express.js, Mongoose, & MongoDB',
                active: true
              },
              'Study.js,': {
                info: 'An online study tool designed for storing all your accumulated knowledge in one place. The application is built with React and Redux on the front end. Node, Express, and Mongo powers the back end. The entire applicaiton was designed and developed by me.',
                github: 'https://github.com/FarrisIsmati/studyjs_front_end',
                backend: 'https://github.com/FarrisIsmati/studyjs_backend',
                projects: true,
                link: 'https://studyjs.surge.sh',
                tech: 'React.js, Redux.js, Node.js, Express.js, OAuth, Quill, Mongoose, & MongoDB',
                active: false
              },
              'You Suck at Art,': {
                info: 'A draw and guess game inspired by the children’s game Chinese Whispers, also known as Telephone. The application is built with React on the front end. Node, Express, and Mongo powers the back end. The applicaiton was a group effort, I designed the User stories, Schemas, and majority of the React Components.',
                github: 'https://github.com/FarrisIsmati/telestrations_online',
                backend: 'https://github.com/StevenC53/telestrations_online_back_end',
                projects: true,
                tech: 'React.js, Node.js, Express.js, HTML Canvas, Mongoose, & MongoDB',
                image: 'https://image.ibb.co/b5DEuw/Screen_Shot_2018_01_03_at_9_40_41_AM.png',
                link: 'http://yousuckatart.surge.sh/',
                active: false
              },
              'DC Foodtrucks,': {
                info: 'A concept website for tracking all DC metro area food trucks. The application is built entirely in Ruby on Rails with additional libraries and the Google Maps API powering the map. This was my first Rails project. The entire applicaiton was designed and developed by me.', projects: true,
                github: 'https://github.com/FarrisIsmati/food-truck-dc',
                tech: 'Ruby on Rails, Devise, Cancan, JQuery, Google Maps API, Punchbox, Geocoder',
                image: 'https://image.ibb.co/gzC7Ew/Screen_Shot_2018_01_03_at_9_40_25_AM.png',
                link: 'https://dc-food-trucks.herokuapp.com/companies',
                active: false
              },
              'Hangman': {
                info: `A recreated version of Hangman. Players are prompted with a random word they need to guess. Players only have 7 guesses to figure out the word. This was my first JavaScript program, and I'm proud of it too.`,
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
