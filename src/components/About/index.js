import Header from '../Header'
import myProfile from './myProfile.jpeg'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-main-cont">
      <h1>
        About Me <span className="exclamation-mark-a">!</span>
      </h1>
      <div className="image-container-profile">
        <img src={myProfile} alt="profile" className="profile-image" />
      </div>
      <p className="about-desc">
        I'm a software developer with a flair for problem-solving and a love for
        clean, efficient code. Experienced in multiple languages and passionate
        about staying up-to-date in the tech world. I thrive on challenges and
        collaboration to create impactful software solutions
      </p>
      <p className="wht-wht">Here's who i am and What id do</p>
      <div className="buttons-about">
        <button type="button" className="buttons-ab-n">
          <a href="https://drive.google.com/file/d/1scYnl3OVcOQ1LggKMm4bqxStHFZu0oi3/view?usp=drivesdk">
            RESUME/CV
          </a>
        </button>
        <button type="button" className="buttons-ab-n">
          <a href="https://github.com/Kiran19122001">GIT HUB</a>
        </button>
      </div>
    </div>
  </>
)

export default About
