import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features23-text01 thq-body-small">
            {props.content1}
          </span>
          <button className="thq-button-filled features23-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features23-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features23-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features23-text07 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features23-text09 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features23-text11 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features23-text13 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature3Title: "PhD Candidate's Journey",
  feature5Description:
    "Delve into the fascinating world of bees' cognitive abilities and problem-solving skills.",
  feature3Description:
    "Follow a PhD candidate's research journey in the field of bee cognition and conservation.",
  feature4Title: 'Anthropogenic Stressors on Bees',
  feature5ImageAlt: 'Cognitive Abilities in Bees Image',
  feature2ImageAlt: "Pesticides' Impact on Bees Image",
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1680458842540-b320ff0d0684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Bee Cognition Research Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1554146207-a1095301efc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1629709305580-5a833dc72d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: "PhD Candidate's Journey Image",
  feature6Description:
    'Gain valuable insights into bee behavior patterns and social structures for a better understanding of these vital pollinators.',
  feature6ImageAlt: 'Insights on Bee Behavior Image',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1596634766910-f74c314d6560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: "Pesticides' Impact on Bees",
  feature1Description:
    'Explore the latest studies and findings on bee cognition and their remarkable abilities.',
  action1: 'Main action',
  feature6Title: 'Insights on Bee Behavior',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1530169830986-1261f796940f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Title: 'Cognitive Abilities in Bees',
  feature2Description:
    'Learn about the effects of pesticides on bee populations and the environment.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Key Features',
  feature4Description:
    'Discover how human activities impact bees and what can be done to mitigate these stressors.',
  feature4ImageAlt: 'Anthropogenic Stressors on Bees Image',
  feature1Title: 'Bee Cognition Research',
}

Features23.propTypes = {
  feature3Title: PropTypes.string,
  feature5Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature6Description: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  action1: PropTypes.string,
  feature6Title: PropTypes.string,
  content1: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature5Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features23
