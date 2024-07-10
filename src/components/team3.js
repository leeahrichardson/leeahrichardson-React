import React from 'react'

import PropTypes from 'prop-types'

import './team3.css'

const Team3 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team3-max-width thq-section-max-width">
        <div className="team3-section-title">
          <span className="thq-body-small">{props.content1}</span>
          <div className="team3-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large team3-text02">{props.content2}</p>
          </div>
        </div>
        <div className="team3-content1">
          <div className="team3-content2">
            <div className="team3-row">
              <div className="team3-card">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="thq-img-ratio-1-1 team3-member-image"
                />
                <div className="team3-content3">
                  <div className="team3-title">
                    <span className="team3-text03 thq-body-small">
                      {props.member1}
                    </span>
                    <span className="thq-body-small">{props.member1Job}</span>
                  </div>
                  <span className="team3-text05 thq-body-small">
                    {props.member1Content}
                  </span>
                </div>
                <div className="team3-social-icons">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team3-card1">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="thq-img-ratio-1-1 team3-member-image1"
                />
                <div className="team3-content4">
                  <div className="team3-title1">
                    <span className="team3-text06 thq-body-small">
                      {props.member2}
                    </span>
                    <span className="thq-body-small">{props.member2Job}</span>
                  </div>
                  <span className="team3-text08 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team3-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="team3-row1">
              <div className="team3-card2">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="thq-img-ratio-1-1 team3-member-image2"
                />
                <div className="team3-content5">
                  <div className="team3-title2">
                    <span className="team3-text09 thq-body-small">
                      {props.member3}
                    </span>
                    <span className="thq-body-small">{props.member3Job}</span>
                  </div>
                  <span className="team3-text11 thq-body-small">
                    {props.member3Content}
                  </span>
                </div>
                <div className="team3-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team3-card3">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="thq-img-ratio-1-1 team3-member-image3"
                />
                <div className="team3-content6">
                  <div className="team3-title3">
                    <span className="team3-text12 thq-body-small">
                      {props.member4}
                    </span>
                    <span className="thq-body-small">{props.member4Job}</span>
                  </div>
                  <span className="team3-text14 thq-body-small">
                    {props.member4Content}
                  </span>
                </div>
                <div className="team3-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="team3-content7">
            <div className="team3-content8">
              <h2 className="thq-heading-2">{props.heading2}</h2>
              <span className="team3-text16 thq-body-small">
                {props.content3}
              </span>
            </div>
            <button className="team3-button thq-button-filled">
              <span className="team3-text17 thq-body-small">
                {props.actionContent}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team3.defaultProps = {
  content1: 'Join Our Team Today!',
  member1: 'Leeah Richardson',
  actionContent: 'Open positions',
  member4: 'Maria Rodriguez',
  member1Content:
    'Leeah is passionate about studying bee cognition and behaviors. She is dedicated to understanding the impact of pesticides on bees.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member3Src:
    'https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Job: 'Lab Technician',
  member1Job: 'PhD Candidate',
  member3: 'Jordan Patel',
  member3Content:
    'Jordan helps in conducting experiments related to bee behaviors and contributes to maintaining the lab equipment.',
  heading2: 'We’re hiring!',
  member4Src:
    'https://images.unsplash.com/photo-1535643302794-19c3804b874b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Src:
    'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Src:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2OTY4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member2: 'Alexis Nguyen',
  member3Alt: 'Image of Jordan Patel, Lab Technician',
  member4Content:
    'Maria conducts fieldwork to observe bees in their natural habitat and collects valuable data for the research.',
  heading1: 'Meet Our Team',
  member1Alt: 'Image of Leeah Richardson, PhD Candidate',
  member2Content:
    'Alexis supports the research on bee cognitive abilities and assists in data collection and analysis.',
  member4Job: 'Field Researcher',
  member2Job: 'Research Assistant',
  member2Alt: 'Image of Alexis Nguyen, Research Assistant',
  content3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member4Alt: 'Image of Maria Rodriguez, Field Researcher',
}

Team3.propTypes = {
  content1: PropTypes.string,
  member1: PropTypes.string,
  actionContent: PropTypes.string,
  member4: PropTypes.string,
  member1Content: PropTypes.string,
  content2: PropTypes.string,
  member3Src: PropTypes.string,
  member3Job: PropTypes.string,
  member1Job: PropTypes.string,
  member3: PropTypes.string,
  member3Content: PropTypes.string,
  heading2: PropTypes.string,
  member4Src: PropTypes.string,
  member2Src: PropTypes.string,
  member1Src: PropTypes.string,
  member2: PropTypes.string,
  member3Alt: PropTypes.string,
  member4Content: PropTypes.string,
  heading1: PropTypes.string,
  member1Alt: PropTypes.string,
  member2Content: PropTypes.string,
  member4Job: PropTypes.string,
  member2Job: PropTypes.string,
  member2Alt: PropTypes.string,
  content3: PropTypes.string,
  member4Alt: PropTypes.string,
}

export default Team3
