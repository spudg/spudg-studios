import 'w3-css/w3.css';
import './index.css';
import sentient from './images/sentient.png';
import fromzero from './images/fromzero.png';
import tricrypto from './images/tricrypto.png';
import myzo from './images/myzo.png';
import insurely from './images/insurely.png';
import calculat from './images/calculat.png';
import logo from './images/logo.png';

function App() {
  return (
    <body class="w3-white">
  <div id="main">
    <header class="w3-container w3-padding-top-64 w3-center w3-white" id="home">
          <img src={logo} alt="boy" class="w3-image" width="496" height="554" />
      <h1 class="w3-large">Simple and useful applications for anyone, anywhere</h1>
    </header>
    <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
      <div class="w3-row w3-center w3-padding-16 w3-light-grey w3-card w3-round-xxlarge">
        <h4 class="w3-text-black">Current apps</h4>
        <div class="w3-quarter w3-section">
          <img src={sentient} alt="boy" class="w3-image" width="150" height="150" /><br />
          Sentient
        </div>
        <div class="w3-quarter w3-section">
          <img src={myzo} alt="boy" class="w3-image" width="150" height="150" /><br />
          Myzo
        </div>
        <div class="w3-quarter w3-section">
          <img src={calculat} alt="boy" class="w3-image" width="150" height="150" /><br />
          Calculat
        </div>
        <div class="w3-quarter w3-section">
          <img src={insurely} alt="boy" class="w3-image" width="150" height="150" /><br />
          Insurely
        </div>
        <div class="w3-quarter w3-section">
        </div>
        <div class="w3-quarter w3-section">
          <img src={tricrypto} alt="boy" class="w3-image" width="150" height="150" /><br />
          triCrypto
        </div>
        <div class="w3-quarter w3-section">
          <img src={fromzero} alt="boy" class="w3-image" width="150" height="150" /><br />
          FromZero
        </div>
        <div class="w3-quarter w3-section">
        </div>
      </div>
    <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h4 class="w3-text-black">Feedback or suggestions?</h4>
      <hr style={{width:"200px"}} class="w3-opacity" />
      <div class="w3-section">
        <p><i class="fa fa-envelope fa-fw w3-text-black w3-xlarge w3-margin-right"> </i>Email: spudgstudios@gmail.com</p>
        <p><i class="fa fa-play fa-fw w3-text-black w3-xlarge w3-margin-right"> </i>Google Play: Spudg Studios</p>
      </div><br />
    </div>
  </div>
  </div>
  </body>
  );
}

export default App;
