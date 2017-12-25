import React, {Component}   from 'react'
import Scrollspy            from 'react-scrollspy'

import Page                 from '../Base_Components/Page'


class Projects extends Component {
  render() {
    return (

      <div>

        <div>
          <section id="section-1">
            <Page title={'Test1'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}/>
          </section>
          <section id="section-2">
            <Page title={'Test1'} titleWidth={(window.innerWidth * .0917) + 'px'} height={'25px'}/>
          </section>
          <section id="section-3">section 3</section>
        </div>

        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
          <li><a href="#section-1">section 1</a></li>
          <li><a href="#section-2">section 2</a></li>
          <li><a href="#section-3">section 3</a></li>
        </Scrollspy>

      </div>
    )
  }
}

export default Projects
