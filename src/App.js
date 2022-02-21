import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./Components/Home";
import Vendor from './Components/Vendor';
import Membership from './Components/Membership';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Logo from './Components/Logo.png';

function App() {
  return (
    <div>
      <header>

        <div className='page-name'>TARA TRADES</div>
        <img className='logo' src={Logo} ></img>
        </header>
      
       
      <div className='container-show'>
      <div className='cal-show-m'>    <Membership /></div>
        <div className='cal-show'>  <Home /></div>
        <div className='offer'>  <Offer /></div>
        <div className='cal-show'>    <Vendor /></div>
        <div className='cal-show'><About /></div>
      </div>
      <footer>
        <div><Contact /></div>
      </footer>
    </div>
  );
}

export default App;
