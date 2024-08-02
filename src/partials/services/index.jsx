/*
This is the services section
*/

import { Row, Col } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single service component
const SingleService = (props) => {
  // Destructure props
  const { cols, Icon, description, title } = props

  return (
    <Col {...cols}>
      <div css={styled.Service}>
        <Icon className='_icon' />
        <h6 className='_title'>{title}</h6>
        <p className='_description'>{description}</p>
      </div>
    </Col>
  )
}

// Services component
const Services = (props) => (
  <SectionWrapper
    css={styled.Services}
    altBg={true}
    headerData={{
      title: 'My Services',
      description: 'Services I offer to my clients',
    }}
    {...props}
  >
    {/* List of services */}
    <Row>
      <SingleService
        Icon={icons.LogoCss3}
        title='Website development'
        description='I can build complete website for you from start to end based on your idea or figma screens'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.Images}
        title='Data visualisation'
        description='I can create interactive data visualisations to better present information to users'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.LogoIonic}
        title='Game development'
        description='I can create 2d browser games. All genres and complexity'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.LogoWordpress}
        title='Mobile development'
        description='I can create mobile apps that will work both on android and ios'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.PhonePortraitSharp}
        title='SEO Optimisation'
        description="If you feel your website doesn't get enough search traffic I can improve it"
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
    </Row>
  </SectionWrapper>
)

export default Services
