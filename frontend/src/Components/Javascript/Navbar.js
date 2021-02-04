import '../CSS/Navbar.css';

import {react, useState} from 'react';

import logo_white from '../Images/logo-white.png';
import logo_dark from '../Images/logo-dark.png';
import menu from '../Images/menu.png';
import search from '../Images/search.png';
import cross from '../Images/cross.png';
import Dropdown from './Dropdown';




function Navbar(props) {
    
    let logo = logo_white;
    const [Click,setClick] = useState(false);

    const handleClick = () => {
        setClick(!Click);
    }
    
    function logo_chooser(){
        if (props.theme == 'light'){
            logo = logo_white;
        } else {
            logo = logo_dark;
        } 
    }

    logo_chooser()

    return (
    <div className={'navbar navbar-'+(props.theme)}>
            <div className={'navbar-left navbar-left-'+(props.theme)}>
               <div className='logo-wrapper'>
                    <a href='/'><img src={logo}/></a>
               </div>
            </div>
            <div className={'navbar-right navbar-right-'+(props.theme)}>
                <div className='hamburger-menu'>
                    <div className='hamburger-menu-div'>
                        <img src={menu} onClick={handleClick}/>
                    </div>
                </div>
            <div className={!Click ? 'test test-'+(props.theme) : 'test test-active test-active-'+(props.theme)}>
                <div className={'navbar-right-top navbar-right-top-'+(props.theme)}>
                    <ul>
                        <li>hindi</li>
                        <li className='search-holder'><input placeholder='Search(unimplemented)' className='search'/><img src={search} /></li>
                    </ul>
                </div>

                <div className={'navbar-right-bottom navbar-right-bottom-'+(props.theme)}>
                <ul className='navbar-right-bottom-ul'>
                    <li className='navbar-right-bottom-ul-li' key={1}><Dropdown title="Academics" items={[{id:'1',value:'Overview'},{id:'2',value:'Academic Calendar'},{id:'3',value:'UG Programmes'},{id:'4',value:'PG Programmes'},{id:'5',value:'Masters Degree'},{id:'6',value:'Academic Services'}]}/></li>
                    <li className='navbar-right-bottom-ul-li' key={2}><Dropdown title="Admission" items={[{id:'1',value:'Procedure'},{id:'2',value:'Scholarships'},{id:'3',value:'JOSAA'},{id:'4',value:'Foreign Students'},{id:'5',value:'Others'}]} /></li>
                    <li className='navbar-right-bottom-ul-li' key={3}><Dropdown title="Student Life" items={[{id:'1',value:'Hostel life'},{id:'8',value:'Gallery'},{id:'2',value:'Campus Tour'},{id:'3',value:'Sports'},{id:'4',value:'Clubs'},{id:'5',value:'Campus Fests'},{id:'6',value:'Technology & Innovation'},{id:'7',value:'Social Awareness'}]} /></li>
                    <li className='navbar-right-bottom-ul-li' key={4}><Dropdown title="Departments" items={[{id:'1',value:'Architecture & Planning'},{id:'2',value:'Chemical Engineering'},{id:'3',value:'Chemistry'},{id:'4',value:'Civil Engineering'},{id:'5',value:'Computer Science & Engineering'},{id:'6',value:'Electrical Engineering'},{id:'7',value:'Electronics & Comms. Engineering'},{id:'8',value:'Mathematics'},{id:'9',value:'Mechanical Engineering'},{id:'10',value:'Metallurgical & Materials Engineering'},{id:'11',value:'Physics'}]} /></li>
                    <li className='navbar-right-bottom-ul-li' key={5}><Dropdown title="Login" items={[{id:'1',value:'MNIT ERP'},{id:'4',value:'MNIT email'},{id:'3',value:'Admin'}]} /></li>
                </ul>

                </div>
                </div>
            </div>
    </div>
  );
}

export default Navbar;
