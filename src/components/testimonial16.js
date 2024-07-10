import React from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial16-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container02 thq-card">
            <div className="testimonial16-container03">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image"
              />
              <div className="testimonial16-container04">
                <strong className="thq-body-large">{props.author1Name}</strong>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
            <span className="testimonial16-text04 thq-body-small">
              {props.review1}
            </span>
          </div>
          <div className="testimonial16-container05 thq-card">
            <div className="testimonial16-container06">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container07">
                <strong className="thq-body-large">{props.author2Name}</strong>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
            <span className="testimonial16-text07 thq-body-small">
              {props.review2}
            </span>
          </div>
          <div className="testimonial16-container08 thq-card">
            <div className="testimonial16-container09">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container10">
                <strong className="thq-body-large">{props.author3Name}</strong>
                <span className="thq-body-small">{props.author3Position}</span>
              </div>
            </div>
            <span className="testimonial16-text10 thq-body-small">
              {props.review3}
            </span>
          </div>
          <div className="testimonial16-container11 thq-card">
            <div className="testimonial16-container12">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container13">
                <strong className="thq-body-large">{props.author4Name}</strong>
                <span className="thq-body-small">{props.author4Position}</span>
              </div>
            </div>
            <span className="testimonial16-text13 thq-body-small">
              {props.review4}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial16.defaultProps = {
  review1:
    "Leeah's research on bee cognition is groundbreaking and sheds light on the importance of understanding these tiny creatures.",
  review3:
    "The insights provided by Leeah Richardson's research are crucial for anyone interested in the cognitive abilities of bees.",
  heading1: 'Testimonials',
  author3Src:
    'https://images.unsplash.com/photo-1611244420182-82cc3323eadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Sarah Johnson',
  author4Name: 'Author Name',
  author1Name: 'Jessica Thompson',
  author1Position: 'Biologist',
  author4Position: 'Position, Company name',
  author2Position: 'Environmental Scientist',
  author1Src:
    'https://images.unsplash.com/photo-1521744897984-da801ee7db80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Michael Adams',
  review4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author1Alt: 'image',
  author4Alt: 'image',
  author4Src:
    'https://images.unsplash.com/photo-1636041282803-3b626a7c3166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'image',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author3Position: 'Entomologist',
  author2Src:
    'https://images.unsplash.com/photo-1612213467906-20440d15bdb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'image',
  review2:
    "I was amazed by the depth of knowledge presented on the impact of pesticides on bees. Leeah's work is truly inspiring.",
}

Testimonial16.propTypes = {
  review1: PropTypes.string,
  review3: PropTypes.string,
  heading1: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.string,
  author4Name: PropTypes.string,
  author1Name: PropTypes.string,
  author1Position: PropTypes.string,
  author4Position: PropTypes.string,
  author2Position: PropTypes.string,
  author1Src: PropTypes.string,
  author2Name: PropTypes.string,
  review4: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review2: PropTypes.string,
}

export default Testimonial16
