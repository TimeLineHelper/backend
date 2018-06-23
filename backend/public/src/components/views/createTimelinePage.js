import React, { Component, Fragment } from 'react';
import {
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import TaskForm from '../tasks/taskForm.js';
import Timeline from '../timeline.js';

export default class CreateTimelinePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { location } = this.props;
    console.log('CREATETIMELINE this.props=', this.props);

    return <Fragment>
      <div>
        <p id="createItem-intro">Begin by creating an Event!</p>
        <TaskForm
          onSubmit={this.handleSubmit}
          buttonText='create'
          // addTask={this.addTask}
        />
        <Link to="/create-timeline"></Link>
      </div>
    </Fragment>;
  }
}