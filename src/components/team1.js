import React from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text">{props.content1}</span>
          <div className="team1-content">
            <h2 className="thq-heading-2 team1-text01">{props.heading1}</h2>
            <p className="thq-body-large team1-text02">{props.content2}</p>
          </div>
        </div>
        <div className="team1-content01">
          <div className="team1-content02">
            <div className="team1-row">
              <div className="team1-container">
                <div className="team1-card">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content03">
                    <div className="team1-title">
                      <span className="team1-text03 thq-body-small">
                        {props.member1}
                      </span>
                      <span className="team1-text04 thq-body-small">
                        {props.member1Job}
                      </span>
                    </div>
                    <span className="team1-text05 thq-body-small">
                      {props.member1Content}
                    </span>
                  </div>
                  <div className="team1-social-icons">
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
                <div className="team1-card1">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content04">
                    <div className="team1-title1">
                      <span className="team1-text06 thq-body-small">
                        {props.member2}
                      </span>
                      <span className="team1-text07 thq-body-small">
                        {props.member2Job}
                      </span>
                    </div>
                    <span className="team1-text08 thq-body-small">
                      {props.member2Content}
                    </span>
                  </div>
                  <div className="team1-social-icons1">
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
              <div className="team1-container1">
                <div className="team1-card2">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content05">
                    <div className="team1-title2">
                      <span className="team1-text09 thq-body-small">
                        {props.member3}
                      </span>
                      <span className="team1-text10 thq-body-small">
                        {props.member3Job}
                      </span>
                    </div>
                    <span className="team1-text11 thq-body-small">
                      {props.member3Content}
                    </span>
                  </div>
                  <div className="team1-social-icons2">
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
                <div className="team1-card3">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content06">
                    <div className="team1-title3">
                      <span className="team1-text12 thq-body-small">
                        {props.member4}
                      </span>
                      <span className="team1-text13 thq-body-small">
                        {props.member4Job}
                      </span>
                    </div>
                    <span className="team1-text14 thq-body-small">
                      {props.member4Content}
                    </span>
                  </div>
                  <div className="team1-social-icons3">
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
            <div className="team1-row1">
              <div className="team1-container2">
                <div className="team1-card4">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="team1-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content07">
                    <div className="team1-title4">
                      <span className="team1-text15 thq-body-small">
                        {props.member5}
                      </span>
                      <span className="team1-text16 thq-body-small">
                        {props.member5Job}
                      </span>
                    </div>
                    <span className="team1-text17 thq-body-small">
                      {props.member5Content}
                    </span>
                  </div>
                  <div className="team1-social-icons4">
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
                <div className="team1-card5">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="team1-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content08">
                    <div className="team1-title5">
                      <span className="team1-text18 thq-body-small">
                        {props.member6}
                      </span>
                      <span className="team1-text19 thq-body-small">
                        {props.member6Job}
                      </span>
                    </div>
                    <span className="team1-text20 thq-body-small">
                      {props.member6Content}
                    </span>
                  </div>
                  <div className="team1-social-icons5">
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
              <div className="team1-container3">
                <div className="team1-card6">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="team1-placeholder-image6 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content09">
                    <div className="team1-title6">
                      <span className="team1-text21 thq-body-small">
                        {props.member7}
                      </span>
                      <span className="team1-text22 thq-body-small">
                        {props.member7Job}
                      </span>
                    </div>
                    <span className="team1-text23 thq-body-small">
                      {props.member7Content}
                    </span>
                  </div>
                  <div className="team1-social-icons6">
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
                <div className="team1-card7">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="team1-placeholder-image7 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content10">
                    <div className="team1-title7">
                      <span className="team1-text24 thq-body-small">
                        {props.member8}
                      </span>
                      <span className="team1-text25 thq-body-small">
                        {props.member8Job}
                      </span>
                    </div>
                    <span className="team1-text26 thq-body-small">
                      {props.member8Content}
                    </span>
                  </div>
                  <div className="team1-social-icons7">
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
          </div>
          <div className="team1-content11">
            <div className="team1-content12">
              <h2 className="thq-heading-2 team1-text27">{props.heading2}</h2>
              <span className="thq-body-small team1-text28">
                {props.content3}
              </span>
            </div>
            <button className="team1-button thq-button-filled">
              <span className="thq-body-small">{props.actionContent}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member5Alt: 'Member Alt',
  member6Src:
    'https://images.unsplash.com/photo-1556942057-94aaf3ae5d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Join Our Team Today!',
  member8Job: 'Job title',
  member1Alt: 'Image of Leeah Richardson, PhD Candidate at UT Austin',
  member4Alt: 'Member Alt',
  member1: 'Leeah Richardson',
  member7Src:
    'https://images.unsplash.com/photo-1504976640860-42dcbf3a56da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading2: 'We’re hiring!',
  member3Alt: 'Image of Emily Davis, Lab Technician',
  member6Alt: 'Member Alt',
  member7Job: 'Job title',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member3Job: 'Lab Technician',
  member7Alt: 'Member Alt',
  member7Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member8Alt: 'Member Alt',
  member5: 'Full name',
  member2Content:
    'John Smith is a dedicated research assistant supporting Leeah Richardson in her studies on bee cognition and behaviors.',
  member7: 'Full name',
  member8Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Src:
    'https://images.unsplash.com/photo-1572988276585-71035689a285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Src:
    'https://images.unsplash.com/photo-1495568995596-9e40959aa178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member5Job: 'Job title',
  member6Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member3: 'Emily Davis',
  member1Src:
    'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODc0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member6Job: 'Job title',
  member3Src:
    'https://images.unsplash.com/photo-1627687501812-47b459c81345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Job: 'Research Assistant',
  member3Content:
    'Emily Davis plays a crucial role in the lab, assisting in experiments and data collection related to bee cognition research.',
  member5Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  actionContent: 'Open positions',
  member8: 'Full name',
  member4Job: 'Job title',
  member4: 'Full name',
  member2Alt: 'Image of John Smith, Research Assistant',
  member1Content:
    "Leeah Richardson is a PhD Candidate at UT Austin studying bee cognition, pesticides' impact on bees, cognitive abilities, and behaviors in bees.",
  content3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member5Src:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member6: 'Full name',
  member2: 'John Smith',
  member1Job: 'PhD Candidate',
  member4Src:
    'https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDU2ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Meet our team',
}

Team1.propTypes = {
  member5Alt: PropTypes.string,
  member6Src: PropTypes.string,
  content1: PropTypes.string,
  member8Job: PropTypes.string,
  member1Alt: PropTypes.string,
  member4Alt: PropTypes.string,
  member1: PropTypes.string,
  member7Src: PropTypes.string,
  heading2: PropTypes.string,
  member3Alt: PropTypes.string,
  member6Alt: PropTypes.string,
  member7Job: PropTypes.string,
  content2: PropTypes.string,
  member3Job: PropTypes.string,
  member7Alt: PropTypes.string,
  member7Content: PropTypes.string,
  member8Alt: PropTypes.string,
  member5: PropTypes.string,
  member2Content: PropTypes.string,
  member7: PropTypes.string,
  member8Content: PropTypes.string,
  member2Src: PropTypes.string,
  member8Src: PropTypes.string,
  member5Job: PropTypes.string,
  member6Content: PropTypes.string,
  member3: PropTypes.string,
  member1Src: PropTypes.string,
  member6Job: PropTypes.string,
  member3Src: PropTypes.string,
  member2Job: PropTypes.string,
  member3Content: PropTypes.string,
  member5Content: PropTypes.string,
  member4Content: PropTypes.string,
  actionContent: PropTypes.string,
  member8: PropTypes.string,
  member4Job: PropTypes.string,
  member4: PropTypes.string,
  member2Alt: PropTypes.string,
  member1Content: PropTypes.string,
  content3: PropTypes.string,
  member5Src: PropTypes.string,
  member6: PropTypes.string,
  member2: PropTypes.string,
  member1Job: PropTypes.string,
  member4Src: PropTypes.string,
  heading1: PropTypes.string,
}

export default Team1
