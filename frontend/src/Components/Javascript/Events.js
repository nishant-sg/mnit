import '../CSS/Event.css';
import Circular from './Circulars';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React, { useState } from 'react';

class Events extends React.Component {
    

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    componentDidMount() {

        fetch('http://localhost:8000/api/events/')
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
        const responsive = {
          desktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 30 
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 
          }
        }
        
        
        if (!isLoaded)
            return <div>Loading...</div>;

        return (
          <div className='wrapper'>
            {items.map(item => (
              <div key={item.id} className='event track'>
                <div className='div-top'>
                  <img src={item.pic1}/>
                  <img src={item.pic2}/>
                  <img src={item.pic3}/>
                  <img src={item.pic4}/>
                </div>
                <div className='div-top'>
                  <img src={item.pic5}/>
                  <img src={item.pic6}/>
                  <img src={item.pic7}/>
                  <img src={item.pic8}/>
                </div>
                
                </div>
            ))}
            {items.slice(0,1).map(item => (
              <div key={item.id} className='event track'>
                <div className='div-top'>
                  <img src={item.pic1}/>
                  <img src={item.pic2}/>
                  <img src={item.pic3}/>
                  <img src={item.pic4}/>
                </div>
                <div className='div-top'>
                  <img src={item.pic5}/>
                  <img src={item.pic6}/>
                  <img src={item.pic7}/>
                  <img src={item.pic8}/>
                </div>
                
                </div>
            ))}


            <div className='overlay'/>
          <div className='circular'>
              <Circular/>
            </div>   
            
            <div className='event-list'>

            <Carousel 
            responsive={responsive}
            arrows={false}
            autoPlay={true}
            infinite={true}
            draggable={false}
            swipeable={false}
            autoPlaySpeed={10000}>

          {items.map(item => (
                        
                        <div key={item.id} className='event-list-div'>
                        
                          <div className='event-list-head'>
                            {item.title}
                            </div>
                            <div className='event-list-desc'>
                            {item.description}
                            </div>
                          </div>
                      ))}
            
            </Carousel>
            </div>
            
          </div>
        );

    }

}

export default Events;