import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImageAlt: 'Cognitive Abilities in Bees Image',
  sectionTitle: 'Key Features',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1524366035278-86bff25a9ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Learn about the effects of pesticides on bee populations',
  feature3Title: 'Cognitive Abilities in Bees',
  mainAction: 'Learn More',
  feature1Description:
    'Discover the latest studies and findings on bee cognition',
  feature2ImageAlt: 'Pesticides Impact Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1616256486334-418daeb5bc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Explore the cognitive abilities and behaviors exhibited by bees',
  sectionDescription: 'Explore the main features of our website',
  feature1Title: 'Bee Cognition Research',
  feature2Title: 'Pesticides Impact',
  secondaryAction: 'Get Started',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1579562738344-5274ba7aee76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Bee Cognition Research Image',
  slogan: 'Uncover the fascinating world of bee cognition and behavior',
}

Features1.propTypes = {
  feature3ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features1
