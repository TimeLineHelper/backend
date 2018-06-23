// 'use strict';

// import React, {Component, Fragment} from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Link
// } from 'react-router-dom';
// import ReactDOM from 'react-dom';

// import './style/main.css';
// import './style/timeLine.css';

// // Timeline Funcionality
// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// var items = document.querySelectorAll('.timeline li');
 
// // code for the isElementInViewport function
// function callbackFunc() {
//   for (var i = 0; i < items.length; i++) {
//     if (isElementInViewport(items[i])) {
//       items[i].classList.add('in-view');
//     }
//   }
// }
 
// window.addEventListener('load', callbackFunc);
// window.addEventListener('scroll', callbackFunc);
// // End Timeline Functionality


// class MainPage extends Component {
//   render() {
//     return <Fragment>
//       <div>
//         <h1 id="mainTitle">Marathon Timeline</h1>
//         <p>timeline goes here</p>
//       </div>
//       <div>
//         <h2>Highlights</h2>
//         <p>task info goes here</p>
//       </div>
//     </Fragment>;
//   }
// }

// class App extends Component {
//   render(){
//     return <BrowserRouter>
//       <Fragment>
//         <Route exact path="/" component={MainPage}/>
//       </Fragment>
//     </BrowserRouter>;
//   }
// }

// let root = document.getElementById('root');
// ReactDOM.render(<App/>, root);