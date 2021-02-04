import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Circulars.css';

class Circular extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    componentDidMount() {

        fetch('http://localhost:8000/api/circulars/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    render() {

        const { isLoaded, items } = this.state;
        const disp = (items.reverse()).slice(0,6);
        
        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="circular-1">
                <div className='head'>
                    Latest Circulars  
                </div>
                <div className='line'/>
                <ul className='circular-1-ul'>
                    {disp.map(item => (
                        <li key={item.id} className='circular-1-ul-li' onClick={()=> window.open((item.PDF), "_blank")} href={item.PDF}>
                            <div className='title-bar'>
                                <div className='title'>{item.title}</div>
                                <div className='date'>{item.date}</div>
                            </div>
                            <div className='discription'>
                            {item.description}
                            </div>
                        <div className='line'/>
                        </li>
                    ))}
                    
                </ul>
                <div className='view-button'>
                    <Link to='/circulars' className='linkall'>view all</Link>
                </div>
            </div>
        );

    }

}

export default Circular;