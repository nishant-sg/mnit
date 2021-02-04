import './App.css';

import {useState,Link} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import Navbar from './Components/Javascript/Navbar';
import Footer from './Components/Javascript/Footer';
import Home from './Home';

import grid from './Components/Images/grid.png';
import color from './Components/Images/color_wheel.png';
import facebook from './Components/Images/facebook.png';
import insta from './Components/Images/instagram.png';
import twitter from './Components/Images/twitter.png';
import linkedin from './Components/Images/linkedin.png';
import ComingSoon from './Components/Javascript/ComingSoon';
import CircularsFull from './Components/Javascript/CircularsFull';




function App() {
  let [theme,settheme] = useState('light');
  let [open,setOpen] = useState(false);
  const lang = 'en';

  function toggle_theme(){
    if (theme == 'light'){
      settheme('dark');
    }else{
      settheme('light');
    }
  }
  

  return (
    <Router>
    <div className="App">

        <div className="FAB"  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className='fab-button' type='button' onClick={() => setOpen(!open)}>
                <img src={grid} />
            </div>
            <CSSTransition
            in={open}
            timeout={700}
            unmountOnExit
            classNames='alert'
            >
              <div className='fab-div-list'>
                <ul className='fab-list'>
                  <li className='fab-list-li'>
                    <div className='fab-list-li-a'>
                    <img src={color} onClick={toggle_theme}/>
                    </div>
                  </li>
                  <li className='fab-list-li'><a href="https://www.instagram.com/mnitjaipurindia/" target="_blank" className='fab-list-li-a'><img src={insta} /></a></li>
                  <li className='fab-list-li'><a href="https://www.facebook.com/mnitjaipurindia/" target="_blank" className='fab-list-li-a'><img src={facebook} /></a></li>
                  <li className='fab-list-li'><a href="https://www.linkedin.com/school/mnitjaipur/" target="_blank" className='fab-list-li-a'><img src={linkedin} /></a></li>
                  <li className='fab-list-li'><a href="https://twitter.com/mnitjofficial" target="_blank" className='fab-list-li-a'><img src={twitter} /></a></li>
                </ul>
              </div>

            </CSSTransition>

        </div>

      
      <Navbar theme={theme} lang={lang}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/circulars' exact component={CircularsFull} />

        
        <Route path='/academics/overview' exact component={ComingSoon} />
        <Route path='/academics/AcademicCalendar' exact component={ComingSoon} />
        <Route path='/academics/UGProgrammes' exact component={ComingSoon} />
        <Route path='/academics/PGProgrammes' exact component={ComingSoon} />
        <Route path='/academics/MastersDegree' exact component={ComingSoon} />
        <Route path='/academics/AcademicServices' exact component={ComingSoon} />
        <Route path='/Admission/Procedure' exact component={ComingSoon} />
        <Route path='/Admission/Scholarships' exact component={ComingSoon} />
        <Route path='/Admission/JOSAA' exact component={ComingSoon} />
        <Route path='/Admission/ForeignStudents' exact component={ComingSoon} />
        <Route path='/Admission/Others' exact component={ComingSoon} />
        <Route path='/StudentLife/Hostellife' exact component={ComingSoon} />
        <Route path='/StudentLife/Gallery' exact component={ComingSoon} />
        <Route path='/StudentLife/CampusTour' exact component={ComingSoon} />
        <Route path='/StudentLife/Sports' exact component={ComingSoon} />
        <Route path='/StudentLife/Clubs' exact component={ComingSoon} />
        <Route path='/StudentLife/CampusFests' exact component={ComingSoon} />
        <Route path='/StudentLife/Technology&Innovation' exact component={ComingSoon} />
        <Route path='/StudentLife/SocialAwareness' exact component={ComingSoon} />
        <Route path='/Departments/Architecture&Planning' exact component={ComingSoon} />
        <Route path='/Departments/ChemicalEngineering' exact component={ComingSoon} />
        <Route path='/Departments/Chemistry' exact component={ComingSoon} />
        <Route path='/Departments/CivilEngineering' exact component={ComingSoon} />
        <Route path='/Departments/ComputerScience&Engineering' exact component={ComingSoon} />
        <Route path='/Departments/ElectricalEngineering' exact component={ComingSoon} />
        <Route path='/Departments/Electronics&Comms.Engineering' exact component={ComingSoon} />
        <Route path='/Departments/Mathematics' exact component={ComingSoon} />
        <Route path='/Departments/MechanicalEngineering' exact component={ComingSoon} />
        <Route path='/Departments/Metallurgical&MaterialsEngineering' exact component={ComingSoon} />
        <Route path='/Departments/Physics' exact component={ComingSoon} />
        <Route path='/Login/MNITERP' exact component={ComingSoon} /> 
        
        
      </Switch>
      <Footer/>
    </div>
    </Router>);
}

export default App;
