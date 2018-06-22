import React, { Component, Fragment } from 'react';
import {
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Timeline from '../timeline.js';

export default class CreateTimelinePage extends Component {
  constructor(props) {
    super(props);


  }





  render() {
    return <BrowserRouter>
      <Fragment>
        <div>
          <p id="createItem-intro">Begin by creating an Event to Track!</p>
          <Route path="/create-timeline" component={Timeline} />
        </div>
      </Fragment>
    </BrowserRouter>
  }
}