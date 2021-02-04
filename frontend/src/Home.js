import './Home.css';

import background from './Components/Images/background.png';

import Event from './Components/Javascript/Events.js';
import MBD from './Components/Javascript/MBD.js';
import Study from './Components/Javascript/Study.js';

function Home(props) {
  return (
    <div className="bg-animated" style={{  backgroundImage: `url(${background})` }}>
      <div className='tag'>
        <Event/>
        <Study/>
        <MBD/>
      </div>
    </div>
  );
}

export default Home;
