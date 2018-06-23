import React, { Component, Fragment } from 'react';

// import Timeline from './displayTimelinePage.js';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'Track It',
    };
  }

  render() {
    return <Fragment>
      <h1 id="mainTitle">{this.state.appName}</h1>
      <p>Welcome to Track It Timeline App! Log in to start your personalized timeline experience. Dreams, goals, lifetime milestones, the BEST ideas need a plan. </p>
      <h2>Begin tracking now!</h2>
    </Fragment>;
  }
}
