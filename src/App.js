import * as React from "react";
import "./index.css";
import sentient from "./images/sentient.png";
import fromzero from "./images/fromzero.png";
import tricrypto from "./images/tricrypto.png";
import myzo from "./images/myzo.png";
import insurely from "./images/insurely.png";
import calculat from "./images/calculat.png";
import logo from "./images/logo.png";
import { AnimationWrapper } from "react-hover-animation";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <body class="w3-white">
      <div id="main">
        <header
          class="w3-container w3-padding-top-64 w3-center w3-white"
          id="home"
        >
          <a href="/">
            <img
              src={logo}
              alt="Spudg Studios"
              class="w3-image"
              width="496"
              height="554"
            />
          </a>
          <p class="w3-large">
            Simple and useful applications for anyone, anywhere
          </p>
        </header>
        <div
          class="w3-content w3-justify w3-text-grey w3-padding-64"
          id="about"
        >
          <div
            class="w3-row w3-center w3-padding-16 w3-light-grey w3-card w3-round-xxlarge"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <div class="w3-quarter w3-section">
              <AnimationWrapper>
                <a href="https://play.google.com/store/apps/details?id=com.spudg.sentient">
                  <img
                    src={sentient}
                    alt="Sentient"
                    class="w3-image"
                    width="150"
                    height="150"
                  />
                </a>
                <br />
                Sentient
              </AnimationWrapper>
            </div>
            <div class="w3-quarter w3-section">
              <AnimationWrapper>
                <a href="https://play.google.com/store/apps/details?id=com.spudg.myzo">
                  <img
                    src={myzo}
                    alt="Myzo"
                    class="w3-image"
                    width="150"
                    height="150"
                  />
                </a>
                <br />
                Myzo
              </AnimationWrapper>
            </div>
            <div class="w3-quarter w3-section">
              <AnimationWrapper>
                <a href="https://play.google.com/store/apps/details?id=com.spudg.calculat">
                  <img
                    src={calculat}
                    alt="Calculat"
                    class="w3-image"
                    width="150"
                    height="150"
                  />
                </a>
                <br />
                Calculat
              </AnimationWrapper>
            </div>
            <div class="w3-quarter w3-section">
              <AnimationWrapper>
                <a href="https://play.google.com/store/apps/details?id=com.spudg.insurely">
                  <img
                    src={insurely}
                    alt="Insurely"
                    class="w3-image"
                    width="150"
                    height="150"
                  />
                </a>
                <br />
                Insurely
              </AnimationWrapper>
            </div>
            <div class="w3-quarter w3-section"></div>
            <div class="w3-quarter w3-section">
              <AnimationWrapper>
                <a href="https://play.google.com/store/apps/details?id=com.spudg.tricrypto">
                  <img
                    src={tricrypto}
                    alt="triCrypto"
                    class="w3-image"
                    width="150"
                    height="150"
                  />
                </a>
                <br />
                triCrypto
              </AnimationWrapper>
            </div>
            <div class="w3-quarter w3-section">
              <AnimationWrapper>
                <a href="https://play.google.com/store/apps/details?id=com.spudg.fromzero">
                  <img
                    src={fromzero}
                    alt="FromZero"
                    class="w3-image"
                    width="150"
                    height="150"
                  />
                </a>
                <br />
                FromZero
              </AnimationWrapper>
            </div>
            <div class="w3-quarter w3-section"></div>
          </div>
          <div
            class="w3-padding-64 w3-content w3-text-grey w3-center"
            id="contact"
          >
            <h4 class="w3-text-black">Feedback or suggestions?</h4>
            <hr style={{ width: "100px", margin: "auto" }} />
            <div class="w3-section">
              <p>
                <i class="fa fa-envelope fa-fw w3-text-black w3-xlarge w3-margin-right">
                  {" "}
                </i>
                Email: spudgstudios@gmail.com
              </p>
              <p>
                <i class="fa fa-play fa-fw w3-text-black w3-xlarge w3-margin-right">
                  {" "}
                </i>
                Google Play: Spudg Studios
              </p>
              <ContactForm />
            </div>
            <br />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
