import '../CSS/MBD.css';
import pic1 from '../Images/architecture.png';

function MBD() {
  return (
    <div className="MBD">
        <div className='mbd-top'>
            <div className='mbd-top-right'>
                Message from the Director
            </div>
        </div>
        <div className='mbd-bottom'>
            <div className='mbd-left'>
                <img src={pic1}/>
            </div>
            <div className='mbd-right'>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary</p>
            </div>
        </div>
    </div>  
  );
}

export default MBD;
