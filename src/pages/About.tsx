import React from 'react'
import Title from '../components/Title/Title'

const About = (): React.ReactElement => (
  <>
    <Title title={'About this pet project'} />
    <p style={{ margin: '20px', lineHeight: '1.3' }}>
      This is a small practice project made with react using the github API.
      Code can be found{' '}
      <a target='blank' href='https://github.com/inThaHouse/github_viewer'>
        here
      </a>
      .
    </p>
  </>
)

export default About
