import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const NewElement=React.createElement(
   'h1',
   {
    color:'red',
   },
   'hello this is h1',
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  App(),
  NewElement
);

