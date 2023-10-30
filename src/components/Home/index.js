import {Link} from 'react-router-dom'

import {
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="main-container">
      <div className="home-content">
        <h1 className="name">Hi, i'm Kiran Bandla</h1>
        <p className="sw-role">Software Developer</p>
        <p className="jd-desc">
          I am a dedicated and passionate aspiring software developer on a
          journey to transform my love for coding into a fulfilling career. With
          a solid foundation in programming languages and a keen eye for
          problem-solving, I'm committed to crafting efficient and innovative
          software solutions. My personal projects and coursework have equipped
          me with the skills and knowledge necessary to thrive in the dynamic
          field of software development.
        </p>
        <div className="buttons-rt">
          <button type="button" className="hire-btn link-btn">
            <Link to="/projects" className="link-rtr">
              Hire me
            </Link>
          </button>
          <button type="button" className="talk-btn link-btn">
            <Link to="/contact" className="link-rtr">
              Let's talk
            </Link>
          </button>
        </div>
        <footer className="footer-div">
          <ul className="footer-ul">
            <li className="footer-list">
              <a href="https://www.linkedin.com/in/kiran-bandla-a1b16b241/">
                <FaLinkedin />
              </a>
            </li>
            <li className="footer-list">
              <a href="https://www.instagram.com/kittu____2001/">
                <FaInstagramSquare />
              </a>
            </li>
            <li className="footer-list">
              <a href="https://github.com/Kiran19122001">
                <FaGithub />
              </a>
            </li>
            <li className="footer-list">
              <a href="https://www.facebook.com/kittu.mahe.5/">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div className="image-container-cm">
        <img
          src="https://www.zdnet.com/a/img/resize/a4c8436e7e3adf6dfb14266ca1aa83b8157ad0c2/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt="software"
          className="image-comp"
        />
      </div>
    </div>
  </>
)

export default Home
