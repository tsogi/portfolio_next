import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from 'root/src/styles/pages/jptf03'

const Jptf03 = () => {
  return (
    <SectionWrapper
      css={styled.Jptf03}
      headerData={{
        title: 'ფინალური პროექტები',
        description: 'JPTF03 ჯგუფის სტუდენტების ნამუშევრები',
      }}
    >
      <Row>
        <Col xs='12'>
          <section className="articles">
            {students.map((student, index) => (
              <article key={index} className="profile">
                <div className="profile-image">
                  <img 
                    src={student.image || '/jptf03/no_avatar.png'} 
                    alt={student.name}
                  />
                </div>
                <h2 className="profile-username">{student.name}</h2>
                <div className="profile-actions">
                  <a 
                    target="_blank" 
                    href={student.figmaUrl} 
                    className="btn btn--primary"
                    rel="noopener noreferrer"
                  >
                    Figma
                  </a>
                  <a 
                    href={student.websiteUrl} 
                    target="_blank" 
                    className="btn btn--primary"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </div>
              </article>
            ))}
          </section>
          
          <div className="facebookGroup">
            <span>ფეისბუქის ჯგუფი: </span>
            <a 
              href="https://www.facebook.com/groups/638302204587060" 
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/groups/638302204587060
            </a>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

const students = [
  {
    name: 'ამბროლაძე რეზო',
    image: '/jptf03/rezo.jpeg',
    figmaUrl: 'https://www.figma.com/file/XUt6kbvylgQV3f0fmEmPdd/Ecommerce-Web-Pages-(Free)-(Community)?node-id=0-1&t=embNVDEY15B6N5S5-0',
    websiteUrl: 'https://ambroladze.github.io/myproject-ambrola.github.io/'
  },
  {
    name: 'ახალაია თემურ',
    image: '/jptf03/temur.jpeg',
    figmaUrl: 'https://www.figma.com/file/KiwbV0gGBzOa5Pzo7KGQqe/Client-first-Template-9---Webflow-Agency-(Community)-(Community)?node-id=0-1&t=9B3Hp20J8VJ1ptaB-0',
    websiteUrl: 'https://temo827.github.io/FirstProject/'
  },
  {
    name: 'ბაიდოშვილი ლაზარე',
    image: '/jptf03/no_avatar.png',
    figmaUrl: 'https://www.figma.com/file/QfagKTuh0fxOnobAFiYIbf/Bachira-Online-Shop-(Community)?node-id=169-452',
    websiteUrl: 'https://ghuone.github.io/abc/'
  },
  {
    name: 'თაბაგარი თაბა',
    image: '/jptf03/taba.jpg',
    figmaUrl: 'https://www.figma.com/file/lYpu7kcPSHR3CVjpJrSo0s/Website-Event-Ticketing-(Community)?node-id=0-1&t=Uc8DMcztW9o9UJuE-0',
    websiteUrl: 'https://taba1-11.github.io/tabaproject'
  },
  {
    name: 'თენიეშვილი თეკლა',
    image: '/jptf03/no_avatar.png',
    figmaUrl: 'https://www.figma.com/file/cR12A4QnCluY8ZKqDt6nK7/Golobe---Travel-agency-website-(Community)?node-id=108-18842&t=gR5XBfkFqpLzxAEu-0',
    websiteUrl: 'https://teklatenie14.github.io/step.project/'
  },
  {
    name: 'კეკიშვილი საბა',
    image: '/jptf03/saba.jpg',
    figmaUrl: 'https://www.figma.com/file/EQNUlaDm4Kxv6fRUCQua8Y/Agriculture-Webflow-Website-Template-(Community)?node-id=1-430&t=rMTEX7Q2kE4Mdwai-0',
    websiteUrl: 'https://sabakekishvili.github.io/Saba/'
  },
  {
    name: 'კონსტანტინე ფარფალია',
    image: '/jptf03/konstantine.jpg',
    figmaUrl: 'https://www.figma.com/file/pHsb1fRdCbx67Qbm1pAEbq/Slab-Shop---E-Commerce-(Community)?node-id=0-1&t=QCOw1Abznf56D4EV-0',
    websiteUrl: 'https://kkonstantinee.github.io/SlapShop/'
  },
  {
    name: 'კუბლაშვილი დაჩი',
    image: '/jptf03/dachi.jpg',
    figmaUrl: 'https://www.figma.com/file/3ghP8rfj2zrfiuN2GlgVE0/2023-Audi-RS-e-tron%C2%AE-GT-Landing-Page-(Community)?node-id=0-1&t=P1aIOKVUHEJU1F4K-0',
    websiteUrl: 'https://kublashvilidachi.github.io/firstproject'
  },
  {
    name: 'კუსიანი რატი',
    image: '/jptf03/no_avatar.png',
    figmaUrl: 'https://www.figma.com/file/YY7ThTh5kyrtfg9Qh0kEts/DeliCook-%7C-Recipe-and-Delivery-Website-(Community)?node-id=0-1&t=tatVNtWqmLzhNk1Q-0',
    websiteUrl: 'https://ratirati123.github.io/delicoock/'
  },
  {
    name: 'ლიპარტია ნიკოლოზი',
    image: '/jptf03/nikolozi.jpg',
    figmaUrl: 'https://www.figma.com/file/65J3wD94odm2fUo8PzWO7g/Landing-Page-(Community)?node-id=101-11&t=MrQANENmBLfbbyZu-0',
    websiteUrl: 'https://nikalipartia.github.io/project'
  },
  {
    name: 'მიდელაური საბა',
    image: '/jptf03/midelauri_saba.jpg',
    figmaUrl: 'https://www.figma.com/file/mNCseShKqjWL1IcnFzKwlR/Website-Template-%7C-Skydrone-(Community)?node-id=304-14049&t=WW3Rhp9XNdHTNdf6-0',
    websiteUrl: 'https://sab1k0.github.io/Sab'
  },
  {
    name: 'ნარინდოშვილი ივანე',
    image: '/jptf03/ivane.jpeg',
    figmaUrl: 'https://www.figma.com/file/u7aYStsbMSMOewChzbWkyh/FoodWagon-Food-Delivery-Landing-Template-by-ThemeWagon-(Community)?node-id=342-144&t=OJ4iUvZaP3d8uPdx-0',
    websiteUrl: 'https://foodwagon.github.io/.net'
  },
  {
    name: 'ოსეფაიშვილი ალექსანდრე',
    image: '/jptf03/alexandre.jpg',
    figmaUrl: 'https://www.figma.com/file/bEWyLh48E4A63T6LOXCZYb/Devpost-2.0-(Community)?node-id=1-2&t=kOpd5tTZOxp5nACr-0',
    websiteUrl: 'https://alexosepa.github.io/Devpostsite/'
  },
  {
    name: 'ხელიძე გიორგი',
    image: '/jptf03/giorgi.jpeg',
    figmaUrl: 'https://www.figma.com/file/4rFfvsStZrj8rQHA5UaTVL/E-Commerce-Website-(Community)?node-id=0-1&t=tgV3pEK68i4TQ2ZI-0',
    websiteUrl: 'https://xelidze.github.io/Prjct'
  },
  {
    name: 'ხუციშვილი საბა',
    image: '/jptf03/xucishvili_saba.jpg',
    figmaUrl: 'https://www.figma.com/file/lW0gHEBYv2EAWmZuBK1jJu/Free-Travel-Design-Template-(Community)?node-id=0-1&t=j5fxE69V8kMJHiX2-0',
    websiteUrl: 'https://mrn1mbus.github.io/finale'
  }
]

export default Jptf03 