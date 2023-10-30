import {FaPhoneVolume} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsChatDotsFill} from 'react-icons/bs'
import Header from '../Header'

import './index.css'

const Contact = () => (
  <>
    <Header />
    <div>
      <div className="image-touch">
        <h1>Get in touch </h1>
        <p className="through-cn-para line">
          Want to get in touch ? I'd love to hear from you, Here's how you can
          reach me....
        </p>
      </div>
      <div className="contact-me">
        <div className="each-cont">
          <FaPhoneVolume className="cont-me" />
          <h1 className="through-cn">By Phone</h1>
          <p className="through-cn-para">
            This is my number call me :
            <span className="platform-cnt">
              <a href="tel:91+93446587060"> 91+9346587060</a>
            </span>
          </p>
          <div className="address-div">
            <p className="address-head">Address:</p>
            <p className="address">
              Mallemala,Tirupati District,Andhra Pradesh,India,524421 South
              india
            </p>
          </div>
        </div>
        <div className="each-cont">
          <MdEmail className="cont-me" />
          <h1 className="through-cn">By Email</h1>
          <div>
            <p className="">
              Email-1:
              <span className="email-sp">
                <a href="mailto:kiranban0011@gmail.com">
                  kiranban0011@gmail.com
                </a>
              </span>
            </p>
            <p className="">
              Email-2:
              <span className="email-sp">
                <a href="mailto:kiranbandla621@gmail.com">
                  kiranbandla621@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="each-cont">
          <BsChatDotsFill className="cont-me" />
          <h1 className="through-cn">Live Chat</h1>
          <p>Want to have a live chat with me click the button below</p>
          <button type="button" className="start-btn">
            <a href="https://wa.me/9346587060">START</a>
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Contact
