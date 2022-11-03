import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/counters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/** <Counter /> Here we render component counter  */}
   <Counters />
  </React.StrictMode>
);

