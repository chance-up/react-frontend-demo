function Hello(props) {
  return React.createElement('h1', null, `Hello ${props.text}`);
}

ReactDOM.render(
 React.createElement(Hello, {text: 'World'}, null),
 document.getElementById('root')
);


// import React from './react.development.js';
// import ReactDOM from './react-dom.development.js';
// // const React = require("react");
// // const ReactDom = require("react-dom");


// function Hello(props) {
//   return React.createElement('h1', null, `Hello ${props.text}`);
// }

// ReactDOM.render(
//  React.createElement(Hello, {text: 'World'}, null),
//  document.getElementById('root')
// );


// index.js
// import React from 'react';
// import ReactDom from 'react-dom';
// import { createRoot } from 'react-dom/client';


// const element = React.createElement("h1", null, "Hello, World!");
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(element);
// const t = document.getElementById('root');

// const btn = document.createElement('button');
// btn.innerHTML = 'Click me';

// t.appendChild(btn);
