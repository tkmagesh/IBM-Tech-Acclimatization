import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './Greeter'
import Products from './Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ES6 Modules
/*
import * as calculator from './calc'
console.log(calculator.add(100,200))
*/

/*
import * as calculator from './calc'
// const add = calculator.add
const { add } = calculator
*/
/*
import { add } from './calc'
console.log(add(100,500))
*/

//importing default exported entity
/* import Employee from './calc'; */
