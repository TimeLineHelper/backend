'use strict';

import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import '../../styles/main.scss';

import MainPage from './components/views/mainPage.js';
import CreateTimelinePage from './components/views/createTimelinePage.js';
import AddItemsPage from './components/views/addItemsPage.js';
import DisplayTimelinePage from './components/views/displayTimelinePage.js';

import './style/main.css';
import './style/timeLine.css';

// Begin Timeline Funcionality -- LEAVE, dk's STUFF!
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
// End Timeline Functionality -- LEAVE, dk's stuff!


class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/create-timeline" component={CreateTimelinePage} />
        <Route exact path="/add-items" component={AddItemsPage} />
        <Route exact path="/display-timeline" component={DisplayTimelinePage} />
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);