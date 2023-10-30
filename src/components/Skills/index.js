import Header from '../Header'
import './index.css'
import Html from './Html.webp'
import Css from './Css.webp'
import Btstp from './Btstp.jpeg'
import Js from './Js.svg'
import React from './React.png'
import Node from './Node.png'
import Exp from './Exp.png'
import Java from './Java.png'
import Py from './Py.jpeg'
import Mysql from './Mysql.png'
import Sqlite from './Sqlite.jpeg'
import Git from './Git.png'

const Skills = () => (
  <>
    <Header />
    <div className="skill-main-container">
      <div className="heading-skill">
        <h1>SKILLS</h1>
      </div>
      <ul className="skills-list-ctn">
        <li className="skill-name">
          <img src={Html} alt="html" className="skill-img" />
          <p>HTML</p>
        </li>
        <li className="skill-name">
          <img src={Css} alt="css" className="skill-img" />
          <p>CSS</p>
        </li>
        <li className="skill-name">
          <img src={Btstp} alt="Btstp" className="skill-img circle" />
          <p>BOOTSTRAP</p>
        </li>
        <li className="skill-name">
          <img src={Js} alt="Js" className="skill-img" />
          <p>JAVASCRIPT</p>
        </li>
        <li className="skill-name">
          <img src={React} alt="React" className="skill-img" />
          <p>REACT JS</p>
        </li>
        <li className="skill-name">
          <img src={Node} alt="Node" className="skill-img" />
          <p>NODE JS</p>
        </li>
        <li className="skill-name">
          <img src={Exp} alt="Exp" className="skill-img circle" />
          <p>EXPRESS JS</p>
        </li>
        <li className="skill-name">
          <img src={Git} alt="Git" className="skill-img circle" />
          <p>GITHUB</p>
        </li>
        <li className="skill-name">
          <img src={Java} alt="Java" className="skill-img circle" />
          <p>JAVA</p>
        </li>
        <li className="skill-name">
          <img src={Py} alt="Py" className="skill-img circle" />
          <p>PYTHON</p>
        </li>
        <li className="skill-name">
          <img src={Mysql} alt="Mysql" className="skill-img circle" />
          <p>MYSQL</p>
        </li>
        <li className="skill-name">
          <img src={Sqlite} alt="Sqlite" className="skill-img circle" />
          <p>SQLITE</p>
        </li>
      </ul>
    </div>
  </>
)

export default Skills
