import React, { useState } from 'react';
import '../CSS/CircularFull.css';

class CircularsFull extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            desp:[],
            isLoaded: false
        }

    }

    

    componentDidMount() {

        fetch('http://localhost:8000/api/circulars/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    desp: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    

    render() {

        const { isLoaded,desp, items } = this.state;
        console.log('items;',items);
        const refresh = () => {
            this.forceUpdate();
          }
        

        function mnit_toggle() {
            for (var a in items){
                console.log(items[a].everyone,items);
                if(items[a].everyone == true) {
                    if (desp.includes(items[a])){
                            console.log('hi');
                    }else{
                            desp.push(items[a]);
                            console.log('desp');
                    }
                        
                }else if(items[a].everyone == false){
                    desp.splice(desp.indexOf(items[a]),1);
                }

                }
                refresh();
                console.log('true loop ended',desp);
            }
        
            function general_toggle() {
                for (var a in items){
                    console.log(items[a].everyone,items);
                    if(items[a].general == true) {
                        if (desp.includes(items[a])){
                                console.log('hi');
                        }else{
                                desp.push(items[a]);
                                console.log('desp');
                        }
                            
                    }else if(items[a].general == false){
                        desp.splice(desp.indexOf(items[a]),1);
                    }
    
                    }
                    refresh();
                    console.log('true loop ended',desp);
                }

                function student_toggle() {
                    for (var a in items){
                        console.log(items[a].everyone,items);
                        if(items[a].student == true) {
                            if (desp.includes(items[a])){
                                    console.log('hi');
                            }else{
                                    desp.push(items[a]);
                                    console.log('desp');
                            }
                                
                        }else if(items[a].student == false){
                            desp.splice(desp.indexOf(items[a]),1);
                        }
        
                        }
                        refresh();
                        console.log('true loop ended',desp);
                    }
                    function faculty_toggle() {
                        for (var a in items){
                            console.log(items[a].everyone,items);
                            if(items[a].faculty == true) {
                                if (desp.includes(items[a])){
                                        console.log('hi');
                                }else{
                                        desp.push(items[a]);
                                        console.log('desp');
                                }
                                    
                            }else if(items[a].faculty == false){
                                desp.splice(desp.indexOf(items[a]),1);
                            }
            
                            }
                            refresh();
                            console.log('true loop ended',desp);
                        }

                        function btech_toggle() {
                            for (var a in items){
                                console.log(items[a].everyone,items);
                                if(items[a].btech == true) {
                                    if (desp.includes(items[a])){
                                            console.log('hi');
                                    }else{
                                            desp.push(items[a]);
                                            console.log('desp');
                                    }
                                        
                                }else if(items[a].btech == false){
                                    desp.splice(desp.indexOf(items[a]),1);
                                }
                
                                }
                                refresh();
                                console.log('true loop ended',desp);
                            }

                            function mtech_toggle() {
                                for (var a in items){
                                    console.log(items[a].everyone,items);
                                    if(items[a].mtech == true) {
                                        if (desp.includes(items[a])){
                                                console.log('hi');
                                        }else{
                                                desp.push(items[a]);
                                                console.log('desp');
                                        }
                                            
                                    }else if(items[a].mtech == false){
                                        desp.splice(desp.indexOf(items[a]),1);
                                    }
                    
                                    }
                                    refresh();
                                    console.log('true loop ended',desp);
                                }
                                function phd_toggle() {
                                    window.location.reload(false);
                                    for (var a in items){
                                        console.log(items[a].everyone,items);
                                        if(items[a].phd == true) {
                                            if (desp.includes(items[a])){
                                                    console.log('hi');
                                            }else{
                                                    desp.push(items[a]);
                                                    console.log('desp');
                                            }
                                                
                                        }else if(items[a].phd == false){
                                            desp.splice(desp.indexOf(items[a]),1);
                                        }
                        
                                        }
                                        refresh();
                                        console.log('true loop ended',desp);
                                    }
                                    function clear_toggle() {
                                        window.location.reload(false);
                                        
                                        }


        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="circular-full">
                <div className='circular-full-left'>
                <ul className='circular-tags'>
                    <li className='circular-tags-li'>MNIT<input type="checkbox" onChange={mnit_toggle}/></li>
                    <li className='circular-tags-li'>General<input type="checkbox" onChange={general_toggle}/></li>
                    <li className='circular-tags-li'>Students<input type="checkbox" onChange={student_toggle}/></li>
                    <li className='circular-tags-li'>Faculty<input type="checkbox" onChange={faculty_toggle}/></li>
                    <li className='circular-tags-li'>Btech<input type="checkbox" onChange={btech_toggle}/></li>
                    <li className='circular-tags-li'>Mtech<input type="checkbox" onChange={mtech_toggle}/></li>
                    <li className='circular-tags-li'>PHD<input type="checkbox" onChange={phd_toggle}/></li>
                    <li className='circular-tags-li'>Clear<input type="checkbox" onChange={clear_toggle}/></li>
                    
                </ul>
                </div>
                <div className='line-h'/>
                <div className='circular-full-right'>
                <div className='head'>
                    All Circulars  
                </div>
                <div className='line'/>
                <ul className='circular-1-ul'>
                    {desp.map(item => (
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
                </div>
               
            </div>
        );

    }

}

export default CircularsFull;