/*
This is the footer section
*/

import { Col, Row } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import { css } from '@emotion/react'
import { darken } from 'polished'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single block component to display icon and content
const SingleBlock = (props) => {
  const { cols, Icon, content } = props
  return (
    <Col {...cols}>
      <div css={styled.SingleBlock}>
        {/* Icon to display */}
        <Icon className='_icon' />
        {/* Content to display */}
        <p className='_content'>{content}</p>
      </div>
    </Col>
  )
}

// Social icon component
const SocialIcon = (props) => {
  const { url, Icon, color } = props
  return (
    <a
      href={url}
      css={css`
        background-color: ${color};
        &:focus,
        &:hover {
          background-color: ${darken(0.08, color)};
        }
        ${styled.SocialIcon}
      `}
    >
      {/* Icon to display */}
      <Icon className='_icon' />
    </a>
  )
}

// Footer component
const Footer = (props) => (
  <SectionWrapper css={styled.Footer} {...props}>
    {/* List contact information blocks */}
    <Row className='_contact'>
      <SingleBlock
        Icon={icons.MapSharp}
        content={
          <a href='https://maps.app.goo.gl/tnUxqL1MoaghUVZa8' target='_blank'>
            Tbilisi, Georgia.
          </a>
        }
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.CallSharp}
        content={<a href='tel:+995598111417'>+995 598 111417</a>}
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.SendSharp}
        content={<a href='mailto:tsogiaidze@yahoo.com'>tsogiaidze@yahoo.com</a>}
        cols={{ xs: '12', sm: '4' }}
      />
    </Row>
    {/* List social media icons and copyright notice */}
    <Row className='_row _mini'>
      <Col xs='12' lg='5' className='_socials'>
        <SocialIcon url='https://www.youtube.com/@nika_tsogiaidze' Icon={icons.LogoYoutube} color='#c33a38' />
        <SocialIcon url='https://github.com/tsogi' Icon={icons.LogoGithub} color='#6e5494' />
        <SocialIcon url='https://www.facebook.com/tsogiaidze' Icon={icons.LogoFacebook} color='#3B5998' />
        <SocialIcon url='https://www.linkedin.com/in/tsogiaidze/' Icon={icons.LogoLinkedin} color='#0077B5' />
      </Col>
      <Col as='p' xs='12' lg='7' className='_copyright-notice'>
        Copyright © 2024 all rights reserved. Developed by{' '}
        <a href='/'>
          Nika
        </a>
        .
      </Col>
    </Row>
  </SectionWrapper>
)

export default Footer
