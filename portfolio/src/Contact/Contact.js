import React                from 'react'
import Page                 from '../Base_Components/Page'

const textStyle = {
  lineHeight: '.98em',
}

const Contact = () => (
  <Page css={'contact'} cssTitle={'contact-title'} title={'Contact'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}>
    <p>703.980.2219</p>
    <p>farris.ismati@gmail.com</p>
    <div className="flex resume-github-holder">
      <a target="_blank" href="https://drive.google.com/file/d/1bbSkF4kjc0sy6f1_mV3ZMEOHoWBfC2Gx/view?usp=sharing"><p id="portfolio">Resume</p></a>
      <div className="border"></div>
      <a target="_blank" href="https://github.com/FarrisIsmati"><p id="github">Github</p></a>
    </div>
  </Page>
)

export default Contact
