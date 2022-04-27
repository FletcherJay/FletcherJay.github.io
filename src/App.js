import React from 'react';
import './App.css';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectcard from './Components/Projectcard';
import Bonsai from './Components/Bonsai';
import Typewriter from './Components/Typewriter';
import Techstack from './Components/Techstack';
import Contactform from './Components/Contactform';
import Footer from './Components/Footer';
const App = () => {



  return (
    <div className="App">
      <Bonsai/>
      
      <Mainnav/>
      <div className="typewriter-location">
        <h1
          style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
        >
          Fletcher is {" "}
          <span style={{ color: "black", fontWeight: "normal" }}>
            <Typewriter
              loop
              cursor
              typespeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[ "a Web Developer.", "an Entrepreneur.", "a Life Long Learner.", "persistant.", "fun!" ]}
            />
          </span>
        </h1>
      </div>
      

      <Techstack/>
      <Projectcard/>
      <Contactform/>
      <Footer/>
    </div>
  );
}

export default App;
