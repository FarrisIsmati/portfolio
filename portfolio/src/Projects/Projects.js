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
              'Collectible Non-fungible Tokens': {
                info: 'A series of 10,000 collectible NFTs generated randomly and sold on a React based website. The application is being built with React.js & Web3.js on the front end. AWS Lambda, AWS DynamoDB, & API Gateway powering the back end. Lastly an ERC-721 based contract written in Solidity to deliver the NFTs. The application is currently in development and the repo is private because I will not share the secret sauce.',
                projects: true,
                github: 'https://github.com/FarrisIsmati/naughtyfungibletokens',
                tech: 'Python, React.js, Solidity, AWS (Lambda, API Gateway, & DynamoDB)',
                active: true
              },
              'Rollio': {
                info: 'A complete redesign of how a food truck tracking application should look and feel. The application is being built with React.js & Redux on the front end. Node.js server hosted by AWS ECS on the back end. Lastly a Spacy, Keras, & Tensorflow Natural Language Processing solution to parse truck locations from Twitter with AWS Lambda. The application is currently under development.',
                projects: true,
                github: 'https://github.com/FarrisIsmati/rollio',
                tech: 'Node.js, Express.js, Socket.io, Spacy, Tensorflow, Keras, Redis, Mocha, Mongoose, MongoDB, AWS (ECS, Lambda, & Redis)',
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
