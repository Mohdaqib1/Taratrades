import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./Components/Home";
import Vendor from './Components/Vendor';
import Membership from './Components/Membership';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import logo from './Components/Logo.png';

function App() {
  return (
    <div>

      <header>

        <h1 className='page-name'>TARA TRADES</h1>
        <h2 className='non'>Aqib</h2>
        <img className='logo' src={logo} ></img>
        </header>
      <Router>
        <nav className='nav'>
          <Link to='./Home' className='link'><h3 className='link-h3'> HOME</h3> </Link>
          <Link to='./Vendor' className='link'><h3 className='link-h3'>VENDOR</h3> </Link>
          <Link to='./Membership' className='link'><h3 className='link-h3'>MEMBERSHIP </h3> </Link>
          <Link to='./Offer' className='link'><h3 className='link-h3'>OFFER</h3></Link>
          <Link to='./About' className='link'><h3 className='link-h3'>ABOUT</h3> </Link>
          <Link to='./Contact' className='link'><h3 className='link-h3'>CONTACT US</h3> </Link>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Vendor">
            <Vendor />
          </Route>
          <Route path="/Membership">
            <Membership />
          </Route>
          <Route path="/Offer">
            <Offer />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>


        </Switch>

      </Router>
      <footer>
        <h2>Find me on social media..</h2>
      </footer>
    </div>
  );
}

export default App;
