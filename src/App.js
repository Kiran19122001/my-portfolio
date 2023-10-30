import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

const app = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
)
export default app
