import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {TiThMenu} from 'react-icons/ti'
// import 'reactjs-popup/dist/index.css' // Import the styles for the popup

import './index.css'

const Header = () => (
  <div>
    <nav className="navbar-pc">
      <div className="logo-name">
        <Link to="/" className="logo-link">
          <h1>Portfolio</h1>
        </Link>
      </div>
      <nav className="mobile-div">
        <Popup
          trigger={
            <button className="menu-btn-ct">
              <TiThMenu className="menu-btn" />
            </button>
          }
          position="bottom right"
          on="click"
          closeOnDocumentClick
        >
          <div className="components">
            <Link to="/" className="nav-link">
              <p className="line-effect">Home</p>
            </Link>
            <Link to="projects" className="nav-link">
              <p className="line-effect">Projects</p>
            </Link>
            <Link to="/skills" className="nav-link">
              <p className="line-effect">Skills</p>
            </Link>

            <Link to="contact" className="nav-link">
              <p className="line-effect">Contact</p>
            </Link>
            <Link to="/about" className="nav-link">
              <p className="line-effect">About</p>
            </Link>
          </div>
        </Popup>
      </nav>
      <nav className="laptop-div">
        <div className="components">
          <Link to="/" className="nav-link">
            <p className="line-effect">Home</p>
          </Link>
          <Link to="projects" className="nav-link">
            <p className="line-effect">Projects</p>
          </Link>
          <Link to="/skills" className="nav-link">
            <p className="line-effect">Skills</p>
          </Link>

          <Link to="contact" className="nav-link">
            <p className="line-effect">Contact</p>
          </Link>
          <Link to="/about" className="nav-link">
            <p className="line-effect">About</p>
          </Link>
        </div>
      </nav>
    </nav>
  </div>
)
export default Header
