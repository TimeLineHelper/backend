'use strict';
import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import '../../styles/main.scss';

import './style/main.css';
import './style/timeLine.css';

// Timeline Funcionality
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll('.timeline li');

// code for the isElementInViewport function
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add('in-view');
    }
  }
}

window.addEventListener('load', callbackFunc);
window.addEventListener('scroll', callbackFunc);
// End Timeline Functionality

// class MainPage extends Component {
//   render() {
//     return <Fragment>
//       <h1 id="mainTitle">Track It</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere libero nulla, ac lobortis libero tincidunt non. Nulla magna nisi, vehicula vitae neque at, cursus varius massa. Pellentesque sollicitudin enim vitae sollicitudin pulvinar. Quisque a risus vel erat mollis aliquet.</p>
//       <h2>Begin tracking now!</h2>
//       <p><Link to="/create-timeline">Create-timeline</Link></p>
//     </Fragment>;
//   }
// }

// class App extends Component {
//   render() {
//     return <BrowserRouter>
//       <Fragment>
//         <Route exact path="/" component={MainPage} />
//       </Fragment>
//     </BrowserRouter>;
//   }
// }

import Timeline from './components/timeline';
// import MainPage from './components/mainPage';

export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <nav>
          <h1>TimeLine App</h1>
          <ul>
            {/* <li><Link to='/'>Main Page</Link></li> */}
            <li><Link to='/create-timeline'>Timeline</Link></li>
          </ul>
        </nav>
        <div>
          {/* <Route exact path="/" component={MainPage} /> */}
          <Route path="/create-timeline" component={Timeline} />
        </div>
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);