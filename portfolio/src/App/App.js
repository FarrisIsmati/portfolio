import React, { Component } from 'react'
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
        <Element name="home" className="element">
          <Home>
            <div className="flex content-container">
              <p>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >
                  Projects,
                </Link>
              </p>
              <p>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >
                  Skills,
                </Link>
              </p>
              <p>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                  About
                </Link>
              </p>
            </div>
          </Home>
        </Element>
        <Element name="projects" className="element-start">
          <Projects />
        </Element>
        <Element name="skills" className="element-start">
          <Skills />
        </Element>
        <Element name="about" className="element-end">
          <About />
        </Element>
      </div>
    )
  }
}

export default App
