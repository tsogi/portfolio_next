/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/picture.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'About me', description: 'Get to know me' }}
    {...props}
  >
    <div className='row align-items-center'>
      {/* Image part - Displays profile image */}
      <Col xs='12' lg='5' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={aboutImg}
        />
      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='12' lg='7'>
        {/* Information part */}
        <h2 className='_subtitle'>Who am I?</h2>

        <h2 className='_title'>
          I&apos;m Nika Tsogiaidze, a full-stack web developer
        </h2>

        <div className='_description'>
          <p>I am a freelance developer with extensive experience in creating engaging websites, interactive data visualizations, and cross-platform mobile apps. I excel at transforming ideas into fully functional digital products, from design to production, ensuring they meet the latest industry standards</p>
        </div>

        <address className='_address'>
          <Row>
            <Col className='_info' xs='12' md='6'>
              <span>Name:</span>
              <p>Nika Tsogiaidze</p>
            </Col>
            <Col className='_info' xs='12' md='6'>
              <span>Email:</span>
              <p>
                <a href='tsogiaidze@yahoo.com'>tsogiaidze@yahoo.com</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='_info' xs='12' md='6'>
              <span>Age:</span>
              <p>31</p>
            </Col>
            <Col className='_info' xs='12' md='6'>
              <span>From:</span>
              <p>Tbilisi, Georgia</p>
            </Col>
          </Row>
        </address>

        {/* Buttons part */}
        <Button className='_button' href='/partials/about/cv.pdf' download>
          Download CV
        </Button>

        <Button
          as={ScrollLink}
          to={'portfolio'}
          spy={true}
          smooth={true}
          duration={600}
          className='_button'
          variant='light'
        >
          My Work
        </Button>
      </Col>
    </div>
  </SectionWrapper>
)

export default About
