import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text thq-heading-1">{props.heading1}</h1>
            <p className="hero8-text1 thq-body-large">{props.content1}</p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero8-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  action2: 'Meet Leeah Richardson',
  heading1: 'Unlocking the Secrets of Bee Cognition',
  image1Src:
    'https://images.unsplash.com/photo-1587566288042-b164121442c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Learn More',
  content1:
    'Explore the fascinating world of bee cognition and the impact of pesticides on these vital pollinators.',
  image1Alt: 'Image of Leeah Richardson studying bees in the field',
}

Hero8.propTypes = {
  action2: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero8
