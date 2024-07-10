import React from 'react'

import PropTypes from 'prop-types'

import './features6.css'

const Features6 = (props) => {
  return (
    <div className="features6-layout216 thq-section-padding">
      <div className="features6-max-width thq-flex-row thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.featureImageAlt}
            src={props.featureImageSrc}
            className="thq-img-ratio-4-3 features6-image1"
          />
        </div>
        <div className="thq-flex-column features6-content">
          <div className="features6-section-title thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2">{props.sectionTitle}</h2>
            <p className="thq-body-large">{props.featureDescription}</p>
          </div>
          <div className="features6-list thq-flex-row">
            <div className="features6-list-item thq-flex-column">
              <h3 className="thq-heading-3">{props.feature1Title}</h3>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
            <div className="features6-list-item1 thq-flex-column">
              <h3 className="thq-heading-3">{props.feature2Title}</h3>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div className="features6-actions thq-flex-row"></div>
        </div>
      </div>
    </div>
  )
}

Features6.defaultProps = {
  feature1Description:
    'Explore cutting-edge research on cognitive abilities and behaviors in bees',
  feature2Description:
    "Follow Leeah Richardson's inspiring path as a UT Austin PhD Candidate studying bees",
  secondaryAction: 'Watch Video',
  featureImageSrc:
    'https://images.unsplash.com/photo-1606707365766-e19fc8d4037c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODUxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: 'Uncover the fascinating world of bee cognition',
  featureImageAlt: 'Bee with a tiny brain symbolizing cognitive abilities',
  sectionTitle: 'Features',
  featureDescription:
    "Delve into the latest findings on pesticides' impact on bee brains and foraging decisions",
  feature2Title: "Leeah Richardson's Journey",
  feature1Title: 'Research Insights',
  mainAction: 'Read More',
}

Features6.propTypes = {
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  featureImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  featureImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  featureDescription: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  mainAction: PropTypes.string,
}

export default Features6
