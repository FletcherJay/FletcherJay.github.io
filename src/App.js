import React from 'react';
import './App.css';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectcard from './Components/Projectcard';
import Bonsai from './Components/Bonsai';
import Typewriter from './Components/Typewriter';
const App = () => {



  return (
    <div>
      <Bonsai/>
      
      <Mainnav/>
      <div className="img-txt-wrapper">
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
      

      
      <Projectcard/>
    </div>
  );
}

export default App;
