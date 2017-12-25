import React                from 'react'

import Page                 from '../Base_Components/Page'

const aboutData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."

const textStyle = {
  lineHeight: '.98em',
}

const About = () => (
  <Page title={'About'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
    <p style={textStyle}>{aboutData}</p>
  </Page>
)

export default About
