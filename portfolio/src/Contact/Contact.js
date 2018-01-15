import React                from 'react'

import Page                 from '../Base_Components/Page'

const textStyle = {
  lineHeight: '.98em',
}

const Contact = () => (
  <Page css={'contact'} cssTitle={'contact-title'} title={'Contact'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
    <p>703.980.2219</p>
    <p>farris.ismati@gmail.com</p>
    <a target="_blank" href="https://github.com/FarrisIsmati"><p className="link">Github</p></a>
  </Page>
)

export default Contact
