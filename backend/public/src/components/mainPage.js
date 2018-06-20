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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere libero nulla, ac lobortis libero tincidunt non. Nulla magna nisi, vehicula vitae neque at, cursus varius massa. Pellentesque sollicitudin enim vitae sollicitudin pulvinar. Quisque a risus vel erat mollis aliquet.</p>
      <h2>Begin tracking now!</h2>
    </Fragment>;
  }
}
