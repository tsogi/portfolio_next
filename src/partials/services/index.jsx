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
        description='I can independently build a complete website from scratch, taking your idea or Figma designs all the way to production.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.Images}
        title='Data visualisation'
        description='I can craft interactive data visualizations to effectively present information to users'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.LogoIonic}
        title='Game development'
        description='I can develop 2D browser games across various genres and complexities, creating immersive and enjoyable gaming experiences tailored to your specifications'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.LogoWordpress}
        title='Mobile development'
        description='I can develop mobile apps that are compatible with both Android and iOS, ensuring a seamless experience across both platforms.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.PhonePortraitSharp}
        title='SEO Optimisation'
        description="If your website isn't receiving the search traffic you desire, I can optimize it to improve visibility and increase traffic"
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
    </Row>
  </SectionWrapper>
)

export default Services
