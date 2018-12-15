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
              'Rollio DC': {
                info: 'A complete redesign of how a food truck tracking application should look and feel. The application will be built with React and Redux on the front end. Node, Express, Mongo, Socket.io and Redis powers the back end. The application is currently underdevelopment by a small team.',
                projects: true,
                github: 'https://github.com/FarrisIsmati/dc-mobile-vendor-node',
                tech: 'Node.js, Express.js, Socket.io, Redis, Mocha, Mongoose, & MongoDB',
                active: true
              },
              '@#%! Where Is It?': {
                info: 'A map based game where you have to find a location by asking yes/no questions. The application is built with React and Redux on the front end. Mapbox GL API powers the map and Node, Express, Mongo and Socket.io powers the back end. The entire applicaiton was designed and developed by me.',
                projects: true,
                link: 'https://fckwhereisit.surge.sh/',
                github: 'https://github.com/FarrisIsmati/mapbox-app-react',
                backend: 'https://github.com/FarrisIsmati/mapbox-app-node',
                tech: 'React.js, Redux.js, Socket.io, Node.js, Express.js, Mapbox GL JS API, Mongoose, & MongoDB',
                active: false
              },
              'Study.js': {
                info: 'An online study tool designed for storing all your accumulated knowledge in one place. The application is built with React and Redux on the front end. Node, Express, and Mongo powers the back end. The entire applicaiton was designed and developed by me.',
                github: 'https://github.com/FarrisIsmati/studyjs_front_end',
                backend: 'https://github.com/FarrisIsmati/studyjs_backend',
                projects: true,
                link: 'https://studyjs.surge.sh',
                tech: 'React.js, Redux.js, Node.js, Express.js, OAuth, Quill, Mongoose, & MongoDB',
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
