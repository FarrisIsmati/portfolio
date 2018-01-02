import React                from 'react'

import Page                 from '../Base_Components/Page'

const aboutData = "Prior to General Assembly I gained a small amount of web development experience in college. Realizing how much fun developing applications is, I decided to enroll at General Assembly. The course has done nothing but reinforce the fact that I want to be a web developer. It's a fun, challenging, and mainly rewarding experience."

const textStyle = {
  lineHeight: '.98em',
}

const About = () => (
  <Page title={'About'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
    <p style={textStyle}>{aboutData}</p>
  </Page>
)

export default About
