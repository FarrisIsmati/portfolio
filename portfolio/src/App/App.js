import React, { Component } from 'react'
import { Glyphicon }        from 'react-bootstrap'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
}                           from 'react-scroll'

import Home                 from '../Home/Home'
import About                from '../About/About'
import Skills               from '../Skills/Skills'
import Projects             from '../Projects/Projects'
import Contact              from '../Contact/Contact'

import                           './App.css'
import                           '../Stylesheets/CommonClasses.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop() {
    scroll.scrollToTop()
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      })

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })

    })

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }))
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    })

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="app-main">
        <Element id="element-home" name="home" className="element-padding element">
          <Home>
            <div className="flex content-container">
              <p>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={600} >
                  Projects,
                </Link>
              </p>
              <p>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >
                  Skills,
                </Link>
              </p>
              <p>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
                  Contact
                </Link>
              </p>
            </div>
          </Home>
          <div className="arrow-holder">
            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >
              <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
            </Link>
          </div>
        </Element>
        <Element id="element-projects" name="projects" className="element-padding element-start">
          <Projects />
        </Element>
        <Element id="element-skills" name="skills" className="element-padding element-start">
          <Skills />
        </Element>
        <Element id="element-contact" name="contact" className="element-padding element-end">
          <Contact />
        </Element>
        <div className="arrow-holder-bottom">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
            <Glyphicon glyph="glyphicon glyphicon-chevron-up" />
          </Link>
        </div>
      </div>
    )
  }
}

export default App
