import React from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero2-image"
      />
      <div className="hero2-container">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="thq-heading-1 hero2-text">{props.heading1}</h1>
              <p className="thq-body-large hero2-text1">{props.content1}</p>
              <div className="hero2-actions">
                <div className="hero2-container1">
                  <button className="hero2-button thq-button-filled">
                    <span className="thq-body-small">{props.action1}</span>
                  </button>
                </div>
                <div className="hero2-container2">
                  <button className="thq-button-outline hero2-button1">
                    <span className="thq-body-small">{props.action2}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  action1: 'Learn More',
  image1Src:
    'https://images.unsplash.com/photo-1650149055752-f518068e1867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Welcome to Bee Cognition Research',
  action2: 'Meet Leeah Richardson',
  image1Alt: 'Bee Cognition Research Image',
  content1:
    'Explore the fascinating world of bee cognition and the impact of pesticides on these vital pollinators.',
}

Hero2.propTypes = {
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero2
