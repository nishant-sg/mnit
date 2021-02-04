import '../CSS/Flipcard1.css';

function Flipcard1(props) {
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            {props.title}
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>{props.desc}</p> 
            <p>We love that guy</p>
          </div>
        </div>
</div>
    );
  }
  
  export default Flipcard1;