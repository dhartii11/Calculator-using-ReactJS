

// src/components/Screen/Screen.js
import React from 'react';
import '../../styles/screens.css';

const Screen = (props) => (
  <section className="screen">
    <div className="result-screen">
      {props.output}
    </div>
    <div className="computation-screen">
      {props.equation}
    </div>
  </section>
);

export default Screen;
