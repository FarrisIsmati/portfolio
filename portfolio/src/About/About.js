import React                from 'react'

import Page                 from '../Base_Components/Page'

const aboutData = "Software engineer currently at Capital One, constantly learning, & constantly creating."

const textStyle = {
  lineHeight: '.98em',
}

const About = () => (
  <Page title={'About'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
    <p style={textStyle}>{aboutData}</p>
  </Page>
)

export default About
