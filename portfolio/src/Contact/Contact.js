import React                from 'react'

import Page                 from '../Base_Components/Page'

const textStyle = {
  lineHeight: '.98em',
}

const Contact = () => (
  <Page css={'contact'} cssTitle={'contact-title'} title={'Contact'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
    <p style={textStyle}>Is that for me???</p>
  </Page>
)

export default Contact
