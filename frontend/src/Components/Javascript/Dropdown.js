import react, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Dropdown.css';
import ard from '../Images/arrow-down.png';

function Dropdown({title,items}) {
    let [open,setOpen] = useState(false);
  
    function handleOnClick(item){
        setOpen(!open);
        console.log(item);
    }

    return (
    <div className="dropdown-wrapper" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
        
        <div className={!open ? 'btn':'btn active'} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(true)} onClick={() => setOpen(true)}>
            <div className="side default-side">{title}</div>
            <div className="side hover-side">{title}<img src={ard}/></div></div>
        <div className='dd-bottom'>
        {open &&(
            <ul className='dd-list' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(true)}>
                {items.map(item => (
                    <li className='dd-list-item' key={items.id} >
                        <Link to={'/'+(title.replace(/\s+/g, ''))+'/'+(item.value.replace(/\s+/g, ''))} className='linkall dd-list-item-link'>
                            <span>{item.value}</span>
                            </Link>
                    </li>
                ))}
            </ul>
        )}</div>
        </div>
        
  );
}

export default Dropdown;
