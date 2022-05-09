import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const element = <h1>Hello World</h1>;

// function tick() {

//  const element = (<div>
//                       <h1>Time Ticking</h1>

//                       <h2>It is {new Date().toLocaleTimeString()}</h2>

//                   </div>);

// reactDom.render(element, document.getElementById("root"));

// }

// setInterval(tick, 1000);

